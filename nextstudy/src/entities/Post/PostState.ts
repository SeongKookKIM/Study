import { atom } from "recoil";
import { Post } from "./PostModel";

export const postState = atom<Post[]>({
  key: "postState",
  default: [],
});
