import { mande } from "mande";

const api = mande(
  "https://perfil-profissional-api-c2c0b9c521b8.herokuapp.com/perfil",
  {}
);

export function createProfileApi(profile) {
  return api.post(profile);
}
