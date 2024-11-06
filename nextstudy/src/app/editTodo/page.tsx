"use client";

import { editPostState } from "@/entities/Post/PostState";
import PostForm from "@/features/post/PostForm";
import Header from "@/widgets/Header/Header";
import { useRecoilValue } from "recoil";

export default function editTodo() {
  const postInfo = useRecoilValue(editPostState);

  return (
    <div className="cm-wrapper">
      <Header backBtn={true} title="EditPost" newPostBtn={false} />
      <PostForm
        newPost={false}
        index={postInfo.id}
        defaultTitle={postInfo.title}
        defaultContent={postInfo.content}
      />
    </div>
  );
}
