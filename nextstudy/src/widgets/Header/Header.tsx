"use client";

import style from "./Header.module.css";
import { HeaderModel } from "@/entities/Header/HeaderModel";
import { useRouter } from "next/navigation";

function Header({ backBtn, title, newPostBtn }: HeaderModel) {
  const router = useRouter();

  return (
    <div className={style.header}>
      <div className={style.backBtn}>
        {backBtn ? <p onClick={() => router.back()}>back</p> : ""}
      </div>
      <h1 className={style.title} onClick={() => router.push("/")}>
        {title}
      </h1>
      <div className={style.addTodoBtn}>
        {newPostBtn ? (
          <p onClick={() => router.push("/addTodo", { scroll: true })}>
            추가하기
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
