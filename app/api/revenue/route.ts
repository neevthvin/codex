import { NextResponse } from "next/server";
import { revenueEntries } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({ data: revenueEntries });
}
