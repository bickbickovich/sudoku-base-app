import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    type: "miniapp",
    url: "http://localhost:3000/sudoku.html",
  });
}
