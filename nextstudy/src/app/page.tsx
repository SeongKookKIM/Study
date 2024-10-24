interface userType {
  user?: {
    name: string;
  };
}

export default function Home({ user }: userType) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {user && user.name ? <h1>Hello! {user.name}</h1> : <button>Login</button>}
    </div>
  );
}
