"use client";

import { postState } from "@/entities/Post/PostState";
import { useRecoilValue } from "recoil";
import style from "./PostList.module.css";
import { Post } from "@/entities/Post/PostModel";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostList() {
  const posts = useRecoilValue(postState);
  const [dbPosts, setDbPosts] = useState<Post[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/post", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("포스트를 가져오는데 실패하였습니다.");
        }

        const postsData = await response.json();

        console.log(postsData);

        setDbPosts(postsData);
      } catch (error) {
        console.error("Data Fetching Failed", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={style.postList}>
      {dbPosts.length > 0 ? (
        <ul className={style.postListUl}>
          {dbPosts.map((post: Post, index: number) => {
            return (
              <li
                key={index}
                className={style.postListLi}
                onClick={() => router.push(`/todoDetail/${index}`)}
              >
                <h3 className={style.postListTitle}>{post.title}</h3>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={style.postListUndefined}>
          <p className={style.postListUndefinedText}>
            내용이 존재하지 않습니다.
          </p>
        </div>
      )}
    </div>
  );
}
