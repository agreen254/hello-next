import { Suspense } from "react";
import Link from "next/link";
import UserTable from "./UserTable";

export type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  searchParams: { sortOrder: string };
};

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Fetching users data...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
