"use client";

import { postState } from "@/entities/Post/PostState";
import { useRecoilValue } from "recoil";
import style from "./PostList.module.css";
import { Post } from "@/entities/Post/PostModel";

export default function PostList() {
  const posts = useRecoilValue(postState);

  console.log(posts);

  return (
    <div className={style.postList}>
      {posts.length > 0 ? (
        <ul className={style.postListUl}>
          {posts.map((post: Post, index: number) => {
            return (
              <li className={style.postListLi}>
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
