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
      date: new Date(),
      userId: found._id,
      username: found.username,
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

export async function GET(req: Request) {
  try {
    await connect();
    const posts = await Post.find();
    return NextResponse.json({ success: true, posts }, { status: 200 });
  } catch (error) {
    console.error("error getting recipes:", error);
    return NextResponse.json(
      { error: "error getting recipes" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { postId } = await req.json();

    await connect();
    const userData = await currentUser();

    if (!userData?.id) {
      return NextResponse.json({ error: "not authenticated" }, { status: 401 });
    }

    const found = await User.findOne({ clerkId: userData.id });
    if (!found) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    const post = await Post.findById(postId);
    console.log(postId);
    if (!post) {
      return NextResponse.json({ error: "post not found" }, { status: 404 });
    }

    post.likeCount += 1;
    await post.save();
    return NextResponse.json({ success: true, post }, { status: 200 });
  } catch (error) {
    console.error("error adding like:", error);
    return NextResponse.json({ error: "error adding like" }, { status: 500 });
  }
}
