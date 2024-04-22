import { goto } from "$app/navigation";
import user from "../user";

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