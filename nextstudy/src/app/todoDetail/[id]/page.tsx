"use client";
import Header from "@/widgets/Header/Header";
import style from "./todoDetail.module.css";
import { postState } from "@/entities/Post/PostState";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";

import { Post } from "@/entities/Post/PostModel";
import { useParams, useRouter } from "next/navigation";

export default function todoDetail() {
  const router = useRouter();
  const state = useParams();
  const posts = useRecoilValue(postState);

  //State
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    setPost(posts[Number(state.id)]);
  }, []);

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
          https://nextjs.org/docs/messages/fast-refresh-reloadFast Refresh had
          to perform a full reload. Read more:
          https://nextjs.org/docs/messages/fast-refresh-reloadFast Refresh had
          to perform a full reload. Read more:
          https://nextjs.org/docs/messages/fast-refresh-reloadFast Refresh had
          to perform a full reload. Read more:
          https://nextjs.org/docs/messages/fast-refresh-reloadFast Refresh had
          to perform a full reload. Read more:
          https://nextjs.org/docs/messages/fast-refresh-reloadFast Refresh had
          to perform a full reload. Read more:
          https://nextjs.org/docs/messages/fast-refresh-reloadFast Refresh had
          to perform a full reload. Read more:
          https://nextjs.org/docs/messages/fast-refresh-reloadFast Refresh had
          to perform a full reload. Read more:
          https://nextjs.org/docs/messages/fast-refresh-reloadFast Refresh had
          to perform a full reload. Read more:
          https://nextjs.org/docs/messages/fast-refresh-reload
        </p>
        <div className={style.detailBtnbox}>
          <button type="button" className={`cm-button ${style.edtit}`}>
            수정
          </button>
          <button type="button" className={`cm-button ${style.delete}`}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
