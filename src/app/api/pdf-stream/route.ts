import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath0 = path.join(process.cwd(), "public", "Rudaah_Garba_05_final.pdf");
    const filePath1 = path.join(process.cwd(), "Rudaah Garba 05 final.pdf");

    let targetFilePath = "";
    if (fs.existsSync(filePath0)) {
      targetFilePath = filePath0;
    } else if (fs.existsSync(filePath1)) {
      targetFilePath = filePath1;
    }

    if (!targetFilePath) {
      return new NextResponse("File not found", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(targetFilePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline",
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error serving PDF stream:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
