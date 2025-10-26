import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import {
  eq,
  ne,
  gt,
  gte,
  lt,
  lte,
  isNull,
  isNotNull,
  between,
  notBetween,
  like,
  ilike,
  notIlike,
  not,
  and,
  or,
} from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // const userList = await db.select().from(users).where(not(eq(users.name, "John Doe")));
    // const userList = await db.select().from(users).where(and(ilike(users.name, "%doe%"),gte(users.createdAt,new Date("2023-01-01"))));
    // const userList = await db.select().from(users).where(or(eq(users.name, "John Doe"),eq(users.name, "Jane Smith")));
    // const userList = await db.select().from(users).where(and(eq(users.id,5),or(like(users.name, "%doe%"),gte(users.createdAt,new Date("2023-01-01")))));
    const userList = await db.query.users.findFirst({
      with: {
        profile: true,
      },
    });

    return NextResponse.json(
      { success: true, data: userList },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/users Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
