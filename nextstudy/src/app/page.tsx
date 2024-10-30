import Header from "@/widgets/Header/Header";

export default function Home() {
  return (
    <div className="home cm-wrapper">
      <Header backBtn={false} title="Todo List" newPostBtn={true} />
    </div>
  );
}
