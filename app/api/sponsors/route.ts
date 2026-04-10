import { NextResponse } from "next/server";
import { sponsorDeals } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({ data: sponsorDeals });
}
