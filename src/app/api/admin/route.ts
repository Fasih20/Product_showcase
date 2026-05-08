// src/app/api/admin/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // DELIBERATE VULNERABILITY FOR SCOUT TO CATCH:
  const ADMIN_SECRET = "super-secret-admin-password-123!";
  
  return NextResponse.json({ 
    status: "online", 
    message: "Admin area accessed",
    debug_key: ADMIN_SECRET 
  });
}