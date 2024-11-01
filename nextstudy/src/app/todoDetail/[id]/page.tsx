"use client";
import Header from "@/widgets/Header/Header";
import style from "./todoDetail.module.css";
import { postState } from "@/entities/Post/PostState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";

import { Post } from "@/entities/Post/PostModel";
import { useParams, useRouter } from "next/navigation";
import { TodoDetailViewModel } from "@/features/todoDetail/todoDetail";

export default function todoDetail() {
  const router = useRouter();
  const state = useParams();
  const posts = useRecoilValue(postState);
  const setPosts = useSetRecoilState(postState);

  //State
  const [post, setPost] = useState<Post | null>(null);

  //View Model
  const viewModel = new TodoDetailViewModel(posts, setPosts);

  useEffect(() => {
    setPost(posts[Number(state.id)]);
  }, []);

  // Edit
  const handlerEditBtn = () => {
    viewModel.editBtn();
  };

  // Delete

  const hanlderDeleteBtn = () => {
    viewModel.deleteBtn(Number(state.id));
  };

  return (
    <div className="cm-wrapper">
      <Header backBtn={true} title="Post" newPostBtn={true} />
      <div className={style.detailWrapper}>
        <h3 className={style.title}>{post?.title}11</h3>
        <p className={style.content}>
          {post?.content}Fast Refresh had to perform a full reload. Read more:
          https://nextjs.org/docs/messages/fast-refresh-reloadFast Refresh had
          to perform a full reload. Read more:
          https://nextjs.org/docs/messages/fast-refresh-reloadFast Refresh had
          to perform a full reload. Read more:
          https://nextjs.org/docs/messages/fast-refresh-reloadFast Refresh had
          to perform a full reload. Read more:
        </p>
        <div className={style.detailBtnbox}>
          <button
            type="button"
            className={`cm-button ${style.edtit}`}
            onClick={handlerEditBtn}
          >
            수정
          </button>
          <button
            type="button"
            className={`cm-button ${style.delete}`}
            onClick={hanlderDeleteBtn}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
