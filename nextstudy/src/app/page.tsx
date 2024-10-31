import Header from "@/widgets/Header/Header";
import PostList from "./PostList";

export default function Home() {
  return (
    <div className="home cm-wrapper">
      <Header backBtn={false} title="Todo List" newPostBtn={true} />
      <PostList />
    </div>
  );
}
