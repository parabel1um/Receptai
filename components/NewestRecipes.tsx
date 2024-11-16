"use client";
import Post from "@/modals/Post";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface Post {
  id: string;
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

  const handleLike = async (postId: string, currentLikeCount: number) => {
    try {
      const updated = posts.map((post) => {
        if (post.id === postId) {
          return { ...post, likeCount: currentLikeCount + 1 };
        }
        return post;
      });
      setPosts(updated);

      const response = await fetch("/api/recipes", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "failed to create recipe");
      }
    } catch (error) {
      console.error("error adding like:", error);
    }
  };

  return (
    <div className="flex flex-wrap items-start justify-start mx-auto w-full h-full gap-4 mt-5">
      {posts.map((post: Post, index) => (
        <div
          key={index}
          className="mb-4 p-4 w-full max-w-[350px] bg-[#FFFBF2] rounded-xl relative"
        >
          <button
            onClick={() => handleLike(post.id, post.likeCount)}
            className="absolute top-4 right-4"
          >
            <Heart />
          </button>
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
