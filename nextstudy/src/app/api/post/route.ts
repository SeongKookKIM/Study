import { db } from "@/shared/utils/database";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const [rows] = await db.query(`SELECT * FROM posts`);

    return NextResponse.json(rows);
  } catch (error) {
    console.warn("Get 에러", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, content } = await req.json();
    console.log(title, content);

    const [result] = await db.query(
      "INSERT INTO posts (title, content) VALUES (?, ?)",
      [title, content]
    );

    return NextResponse.json(
      { message: "Post created successfully", data: result },
      { status: 201 }
    );
  } catch (error) {
    console.warn("Post 에러", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
