import { mande } from "mande";
import { useProfileStore } from "../stores/profileStore";

const profileApi = mande("http://localhost:3000/perfil", {});

function setToken() {
  const store = useProfileStore();
  profileApi.options.headers.token = store.userLogged.token;
}

export function createProfileApi(profile) {
  return profileApi.post(profile);
}

export function getProfileApi() {
  return profileApi.get();
}

export function getProfileByIdApi(profileId) {
  return profileApi.get(profileId);
}

export function updateProfileApi(profile) {
  setToken();
  return profileApi.put(profile._id, profile);
}
