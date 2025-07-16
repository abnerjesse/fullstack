import { mande } from "mande";

const login = mande("http://localhost:3000/login", {});

export function loginApi(user) {
  return login.post(user);
}
