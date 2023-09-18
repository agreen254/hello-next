import React from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const UserTable = async () => {
  // no need to use a hook
  // all happens on the server side
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 }, // fetches new data every 10 seconds
  });
  const users: User[] = await res.json();

  return (
    <div className="flex justify-center">
      <table className="table table-bordered max-w-[50vw]">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
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
