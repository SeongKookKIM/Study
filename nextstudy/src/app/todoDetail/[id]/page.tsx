"use client";
import Header from "@/widgets/Header/Header";
import style from "./todoDetail.module.css";
import { postState } from "@/entities/Post/PostState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";

import { Post } from "@/entities/Post/PostModel";
import { useParams } from "next/navigation";
import { TodoDetailViewModel } from "@/features/todoDetail/todoDetail";
import { useEditPostInfo } from "@/entities/Post/PostActions";

export default function todoDetail() {
  const state = useParams();
  const posts = useRecoilValue(postState);
  const setPosts = useSetRecoilState(postState);
  const editPostInfo = useEditPostInfo();

  //State
  const [post, setPost] = useState<Post | null>(null);

  //View Model
  const viewModel = new TodoDetailViewModel(posts, setPosts, editPostInfo);

  useEffect(() => {
    setPost(posts[Number(state.id)]);
  }, []);

  // Edit
  const handlerEditBtn = () => {
    if (post) {
      viewModel.editBtn(post, Number(state.id));
    } else {
      console.log("post 데이터가 존재하지 않습니다.");
    }
  };

  // Delete
  const hanlderDeleteBtn = () => {
    viewModel.deleteBtn(Number(state.id));
  };

  return (
    <div className="cm-wrapper">
      <Header backBtn={true} title="Post" newPostBtn={true} />
      <div className={style.detailWrapper}>
        <h3 className={style.title}>{post?.title}</h3>
        <p className={style.content}>{post?.content}</p>
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
