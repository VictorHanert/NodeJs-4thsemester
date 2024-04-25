import { goto } from "$app/navigation";
import user from "$lib/stores/userStore";
import { toast } from "svelte-french-toast";

const BASE_URL = "http://localhost:3030";

export async function userLoggedInStatus() {
  const result = await fetch(BASE_URL + "/api/user", {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  });
  return result;
}

export function register(username, firstname, lastname, password, email) {
  fetch(BASE_URL + "/api/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      firstname: firstname,
      lastname: lastname,
      password: password,
      email: email,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then(async (data) => {
      console.log(data);
      if (data.error === true) throw new Error(data.message);
      location.reload();
    })
    .catch((error) => {
      console.log("Error registering", error);
    });
}

export function login(username, password) {
  fetch(BASE_URL + "/api/login", {
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
      toast.success("You have been logged in", {
        duration: 3000,
        position: "top-center",
      });
    })
    .catch((error) => {
      console.log("Error loggin in", error);
    });
}

export async function logout() {
  await fetch(BASE_URL + "/api/logout", {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      user.update((val) => (val = null));
      toast.success("You have been logged out", {
        duration: 3000,
        position: "top-center",
      });
      return goto("/", { noScroll: false, replaceState: true });
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
}
