import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  return NextResponse.redirect(new URL("/Rudaah_Garba_05_final.pdf", url.origin));
}
