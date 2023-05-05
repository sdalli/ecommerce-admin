import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex item-center">
        <div className="text-center p-4 px-10 w-full">
          <button
            onClick={() => signIn()}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return <div> Logged In {session.user.name} </div>;
}
