import { NextResponse } from "next/server";
import { saveBetaSignup } from "@/lib/beta-signups";
import { honeypotWasFilled, validateBetaSignup } from "@/lib/beta-validation";

export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 16 * 1024;
const successResponse = {
  success: true,
  message: "Beta request received.",
};

export async function POST(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_REQUEST_BYTES) {
    return NextResponse.json(
      { success: false, message: "Please check the submitted details." },
      { status: 413 },
    );
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        { success: false, message: "Please check the submitted details." },
        { status: 413 },
      );
    }
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json(
      { success: false, message: "Please check the submitted details." },
      { status: 400 },
    );
  }

  // Silently acknowledge bot submissions without writing them to PostgreSQL.
  if (honeypotWasFilled(body)) {
    return NextResponse.json(successResponse);
  }

  const validation = validateBetaSignup(body);
  if (!validation.success) {
    return NextResponse.json(
      { success: false, message: "Please check the submitted details." },
      { status: 400 },
    );
  }

  try {
    await saveBetaSignup(validation.data);
    return NextResponse.json(successResponse, { status: 201 });
  } catch (error) {
    const safeMessage =
      error instanceof Error
        ? error.message.replace(/postgres(?:ql)?:\/\/\S+/gi, "[redacted database URL]")
        : "Unknown database error";
    const diagnostic =
      error && typeof error === "object"
        ? {
            name: "name" in error ? String(error.name) : "UnknownError",
            code: "code" in error ? String(error.code) : undefined,
            message: safeMessage,
          }
        : { name: "UnknownError", code: undefined, message: safeMessage };
    console.error(`Beta signup persistence failed ${JSON.stringify(diagnostic)}`);

    return NextResponse.json(
      { success: false, message: "Unable to submit beta request." },
      { status: 500 },
    );
  }
}
