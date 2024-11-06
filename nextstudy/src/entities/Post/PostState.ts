import { atom } from "recoil";
import { Post } from "./PostModel";

export const postState = atom<Post[]>({
  key: "postState",
  default: [],
});

export const editPostState = atom<Post>({
  key: "editPostState",
  default: {
    id: 0,
    title: "",
    content: "",
  },
});
