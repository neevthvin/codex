import { NextResponse } from "next/server";
import { getDashboardKpis } from "@/lib/kpis";

export async function GET() {
  return NextResponse.json({ data: getDashboardKpis() });
}
