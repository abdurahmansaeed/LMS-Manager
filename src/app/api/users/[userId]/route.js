import { NextResponse } from "next/server";

export function DELETE(request) {
  return NextResponse.Json({
    message: "testing delete",
  });
}
