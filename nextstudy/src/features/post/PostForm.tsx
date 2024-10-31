"use client";

import { useState } from "react";
import style from "./PostForm.module.css";
import { useAddPost } from "@/entities/Post/PostActions";
import { useRouter } from "next/navigation";

function PostForm() {
  const addPost = useAddPost();
  const [title, setTitlte] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const router = useRouter();

  const hanlderAddPost = () => {
    console.log(title, content);
    if (title && content) {
      addPost({ title, content });
      setTitlte("");
      setContent("");

      router.push("/");
    }
  };

  return (
    <div className={style.post}>
      <div className={style.titleBox}>
        <label className={style.title}>제목</label>
        <input
          type="text"
          className={style.titleInput}
          onChange={(e) => setTitlte(e.target.value)}
        />
      </div>

      <div className={style.contentBox}>
        <label className={style.content}>내용</label>
        <textarea
          typeof="text"
          className={style.contentTextarea}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button type="button" className="cm-button" onClick={hanlderAddPost}>
        작성하기
      </button>
    </div>
  );
}

export default PostForm;
