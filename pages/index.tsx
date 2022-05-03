import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data, status } = useSession();
  return (
    <>
      {status !== "authenticated" ? (
        <>
          サインインしてください。 <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      ) : (
        <>
          サインイン完了。 email: {data?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}
