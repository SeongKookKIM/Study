"use client";

import { useRecoilCallback, useSetRecoilState } from "recoil";
import { editPostState, postState } from "./PostState";
import { Post } from "./PostModel";

function useAddPost() {
  const setPosts = useSetRecoilState(postState);
  return (newPost: Post) => {
    setPosts((prev) => [...prev, newPost]);
  };
}

function useEditPost() {
  return useRecoilCallback(({ set }) => (updatePost: Post) => {
    set(postState, (prev) =>
      prev.map((post, i) => (i === updatePost.id ? updatePost : post))
    );
  });
}

function useDeletePost() {
  return useRecoilCallback(({ set }) => (index: number) => {
    set(postState, (prev) => prev.filter((_, i) => i !== index));
  });
}

function useEditPostInfo() {
  const editPostInfo = useSetRecoilState(editPostState);
  return (editPost: Post) => {
    editPostInfo(editPost);
  };
}

export { useAddPost, useEditPost, useDeletePost, useEditPostInfo };
