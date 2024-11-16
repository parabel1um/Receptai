import { NextResponse } from "next/server";
import { connect } from "@/lib/db";
import Post from "@/modals/Post";
import User from "@/modals/User";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const { title, text } = await req.json();

    await connect();

    const userData = await currentUser();

    if (!userData?.id) {
      return NextResponse.json({ error: "not authenticated" }, { status: 401 });
    }

    const found = await User.findOne({ clerkId: userData.id });

    if (!found) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    const newPost = new Post({
      title,
      text,
      userId: found._id,
    });

    await newPost.save();

    found.posts.push(newPost._id);
    await found.save();

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });
  } catch (error) {
    console.error("error creating recipe:", error);
    return NextResponse.json(
      { error: "error creating recipe" },
      { status: 500 }
    );
  }
}
