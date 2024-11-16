"use client";
import Post from "@/modals/Post";
import { useState, useEffect } from "react";

interface Post {
  username: string;
  _id: string;
  title: string;
  text: string;
  likeCount: number;
  time: Date;
  userId: string;
  __v: number;
}

const NewestRecipes = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/recipes`,
          {
            method: "GET",
          }
        );

        const result = await response.json();

        if (!result.success) {
          throw new Error("failed to fetch posts");
        }

        const sorted = result.posts.sort((a: Post, b: Post) => {
          return new Date(b.time).getTime() - new Date(a.time).getTime();
        });

        setPosts(sorted);
      } catch (error) {
        console.error("error fetching posts:", error);
        return [];
      }
    };
    getAllPosts();
  }, []);

  return (
    <div className="flex flex-wrap items-start justify-start mx-auto w-full h-full gap-4 mt-5">
      {posts.map((post: Post, index) => (
        <div
          key={index}
          className="mb-4 p-4 w-full max-w-[350px] bg-[#FFFBF2] rounded-xl"
        >
          <p className="text-gray-600 text-sm">{post.username}</p>
          <h1 className="font-bold text-lg">{post.title}</h1>
          <p className="text-gray-600">{post.text}</p>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">
              <span className="font-bold">Likes:</span> {post.likeCount}
            </p>
            <p className="text-sm text-gray-500 font-medium">
              {new Date(post.time).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewestRecipes;
