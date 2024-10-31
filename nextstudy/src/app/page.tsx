"use client";

import { postState } from "@/entities/Post/PostState";
import Header from "@/widgets/Header/Header";
import { useRecoilValue } from "recoil";

export default function Home() {
  const posts = useRecoilValue(postState);

  console.log(posts);

  return (
    <div className="home cm-wrapper">
      <Header backBtn={false} title="Todo List" newPostBtn={true} />
    </div>
  );
}
