"use server";
import User from "@/modals/User";
import { connect } from "@/lib/db";
import Post from "@/modals/Post";

export async function createUser(user: any) {
  try {
    await connect();
    await User.create(user);
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    throw new Error("failed to create a new user");
  }
}
