"use client";

import { Post } from "@/entities/Post/PostModel";
import { useRouter } from "next/navigation";
import { title } from "process";
import { SetterOrUpdater } from "recoil";

export class TodoDetailViewModel {
  router = useRouter();

  constructor(
    private posts: Post[],
    private setPosts: SetterOrUpdater<Post[]>,
    private editPostInfo: (editPost: Post) => void
  ) {}

  // 수정 버튼
  editBtn(post: Post, index: number) {
    try {
      const postInfo = {
        id: index,
        title: post.title,
        content: post.content,
      };
      this.editPostInfo(postInfo);
      this.router.push("/editTodo");
    } catch {}
  }

  // 삭제버튼
  deleteBtn(index: number) {
    try {
      if (window.confirm("글을 삭제하시겠습니까?")) {
        const updatePosts = this.posts.filter((_, i) => i !== index);
        this.setPosts(updatePosts);

        this.router.push("/");
      }
    } catch (error) {
      console.warn(error);
    }
  }
}
