import React from "react";

type Props = {
  params: { id: number; pid: number };
};

const UserPhotoPage = ({ params: { id, pid } }: Props) => {
  return (
    <div>
      Displaying Photo #{pid} for user {id}
    </div>
  );
};

export default UserPhotoPage;
