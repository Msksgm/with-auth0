import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function Index() {
  const { user, error, isLoading } = useUser();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  if (user) {
    return (
      <div>
        <h1> Welcome back! </h1>
        <p>
          Youre logged in with the following email address:
          {user.email}!
        </p>

        <Link href="/api/auth/logout">Logout</Link>
      </div>
    );
  }

  return (
    <div>
      <h1> Welcome, stranger! </h1>
      <p>
        Please
        <Link href="/api/auth/login">
          <a>Login.</a>
        </Link>
      </p>
    </div>
  );
}
