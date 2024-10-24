interface userType {
  user?: {
    name: string;
  };
}

export default function Home({ user }: userType) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {user && user.name ? (
        <h1>{user.name}님 환영합니다.</h1>
      ) : (
        <h1>
          로그인을 해주세요.<button>로그인</button>
        </h1>
      )}
    </div>
  );
}
