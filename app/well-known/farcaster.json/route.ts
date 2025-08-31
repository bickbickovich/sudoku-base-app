import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    type: "miniapp",
    url: "https://localhost:3000/sudoku.html", // link to your Sudoku HTML
  });
}
