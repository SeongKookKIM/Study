import Post from "@/features/post/Post";
import Header from "@/widgets/Header/Header";

export default function addTodo() {
  return (
    <div className="cm-wrapper">
      <Header backBtn={true} title="New Post" newPostBtn={false} />
      <Post />
    </div>
  );
}
