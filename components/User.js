import { useSession, signIn, signOut } from "next-auth/react";

export default function User() {
  const { data: session } = useSession();

  if (session)
    return (
      <>
        <img
          onClick={signOut}
          src={session.user.image}
          alt="user-profile"
          className="h-10 w-10 rounded-full cursor-pointer p-1 hover:bg-gray-200"
        />
      </>
    );

  return (
    <>
      <button
        onClick={signIn}
        className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
      >
        Sign in
      </button>
    </>
  );
}
