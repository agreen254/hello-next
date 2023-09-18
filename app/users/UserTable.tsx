import React from "react";
import sortUsers from "@/utils/sortUsers";
import Link from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  sortOrder: string;
};

const UserTable = async ({ sortOrder }: Props) => {
  // no need to use a hook
  // all happens on the server side
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {}, // fetches new data every 10 seconds
  });
  const users: User[] = await res.json();
  const sortedUsers = sortUsers(users, sortOrder);

  return (
    <div className="flex justify-center">
      <table className="table table-bordered max-w-[50vw]">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
