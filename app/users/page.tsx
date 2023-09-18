import UserTable from "./UserTable";

type User = {
  id: number;
  name: string;
  email: string;
};

const UsersPage = () => {
  return (
    <>
      <h1>Users</h1>
      <UserTable />
    </>
  );
};

export default UsersPage;
