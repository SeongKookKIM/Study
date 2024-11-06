"use client";

import { useEffect, useState } from "react";
import style from "./PostForm.module.css";
import { useAddPost, useEditPost } from "@/entities/Post/PostActions";
import { useRouter } from "next/navigation";
import { PostPropsModel } from "@/entities/Post/PostPropsModel";
import { Post } from "@/entities/Post/PostModel";

function PostForm({
  newPost,
  defaultTitle,
  index,
  defaultContent,
}: PostPropsModel) {
  const addPost = useAddPost();
  const [title, setTitlte] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const router = useRouter();

  const recoilEditPost = useEditPost();

  const hanlderAddPost = () => {
    if (title && content) {
      addPost({ title, content });
      setTitlte("");
      setContent("");

      router.push("/");
    } else {
      window.alert("제목과 내용을 입력해주세요.");
    }
  };

  const hanlderEdiptPost = () => {
    console.log(title);
    console.log(content);
    if (title && content) {
      const editPost: Post = {
        id: index,
        title,
        content,
      };

      recoilEditPost(editPost);

      router.push("/");
    } else {
      window.alert("제목과 내용을 입력해주세요.");
    }
  };

  useEffect(() => {
    if (!newPost) {
      setTitlte(defaultTitle ?? "");
      setContent(defaultContent ?? "");
    }

    return () => {
      setTitlte("");
      setContent("");
    };
  }, [newPost, defaultTitle, defaultContent]);

  return (
    <div className={style.post}>
      <div className={style.titleBox}>
        <label className={style.title}>제목</label>
        <input
          type="text"
          className={style.titleInput}
          value={title}
          onChange={(e) => setTitlte(e.target.value)}
        />
      </div>

      <div className={style.contentBox}>
        <label className={style.content}>내용</label>
        <textarea
          typeof="text"
          className={style.contentTextarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {newPost ? (
        <button type="button" className="cm-button" onClick={hanlderAddPost}>
          작성하기
        </button>
      ) : (
        <button type="button" className="cm-button" onClick={hanlderEdiptPost}>
          수정하기
        </button>
      )}
    </div>
  );
}

export default PostForm;
