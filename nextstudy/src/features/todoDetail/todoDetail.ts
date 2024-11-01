"use client";

import { Post } from "@/entities/Post/PostModel";
import { useRouter } from "next/navigation";
import { SetterOrUpdater } from "recoil";

export class TodoDetailViewModel {
  router = useRouter();

  constructor(
    private posts: Post[],
    private setPosts: SetterOrUpdater<Post[]>
  ) {}

  // 수정 버튼
  editBtn() {
    console.log("수정버튼 클릭.");
    this.router.push("/");
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
