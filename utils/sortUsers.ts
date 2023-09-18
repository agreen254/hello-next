import { User } from "@/app/users/page";
import { sort } from "fast-sort";

function sortUsers(users: User[], sortOrder: string) {
  if (sortOrder === "name") {
    return sort(users).asc((u) => u.name);
  } else if (sortOrder === "email") {
    return sort(users).asc((u) => u.email);
  } else {
    return users;
  }
}

export default sortUsers;
