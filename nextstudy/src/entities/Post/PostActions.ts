"use client";

import { useRecoilCallback, useSetRecoilState } from "recoil";
import { postState } from "./PostState";
import { Post } from "./PostModel";

function useAddPost() {
  const setPosts = useSetRecoilState(postState);
  return (newPost: Post) => {
    setPosts((prev) => [...prev, newPost]);
  };
}

function useEditPost() {
  return useRecoilCallback(({ set }) => (index: number, updatePost: Post) => {
    set(postState, (prev) =>
      prev.map((post, i) => (i === index ? updatePost : post))
    );
  });
}

function useDeletePost() {
  return useRecoilCallback(({ set }) => (index: number) => {
    set(postState, (prev) => prev.filter((_, i) => i !== index));
  });
}

export { useAddPost, useEditPost, useDeletePost };
