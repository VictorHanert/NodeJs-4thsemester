import { goto } from "$app/navigation";
import user from "../stores/userStore";

export function login(username, password) {
  return fetch("http://localhost:3030/api/login", {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data.error === true) throw new Error(data.message);
    })
    .then(async () => {
      await goto("/myspace", { noScroll: false, replaceState: true });
    })
    .catch((error) => {
      console.log("Error loggin in", error);
    });
};

export async function logout() {
    await fetch("http://localhost:3030/api/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    });
    user.update((val) => (val = null));
    await goto("/", { noScroll: false, replaceState: true });
  }