import db from "@/lib/database/db";
import { NextResponse } from "next/server";

// GET ALL USERS
export async function GET(req) {
    try {
      const users = await db.user.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      return NextResponse.json(users);
    } catch (error) {
      console.error(error);
      return NextResponse.error(new Error("Failed to fetch users"), {
        status: 500,
      });
    }
  }