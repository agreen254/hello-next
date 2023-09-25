"use client";

const LodashLoader = () => {
  return (
    <>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "a" }, { name: "c" }, { name: "b" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </>
  );
};

export default LodashLoader;
