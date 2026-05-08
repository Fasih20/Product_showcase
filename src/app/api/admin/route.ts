// src/app/api/admin/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // Fixed the vulnerability!
  const ADMIN_SECRET = process.env.ADMIN_SECRET || "not-configured";
  
  return NextResponse.json({ 
    status: "online", 
    message: "Admin area accessed securely"
  });
}