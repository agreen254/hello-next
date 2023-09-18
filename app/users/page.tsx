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
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
