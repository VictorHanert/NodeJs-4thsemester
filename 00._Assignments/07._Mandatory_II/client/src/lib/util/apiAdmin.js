import user from "$lib/stores/userStore";
import { toast } from "svelte-french-toast";

const BASE_URL = "http://localhost:3030";

export async function getAllUsers() {
    try {
      const response = await fetch(BASE_URL + "/api/admin/users", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      });
  
      const data = await response.json();
  
      if (data.error) {
        throw new Error(data.message);
      }
  
      user.update((state) => {
        state.users = data;
        return state;
      });
  
      return data;
    } catch (error) {
      console.log("Error getting users", error);
      return [];
    }
  }

export async function deleteUser(id) {
    try {
      const response = await fetch(BASE_URL + "/api/admin/users/" + id, {
        method: "DELETE",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      });
  
      const data = await response.json();
  
      if (data.error) {
        throw new Error(data.message);
      }
  
      user.update((state) => {
        state.users = state.users.filter((user) => user._id !== id);
        return state;
      });
  
      toast.success("User deleted successfully");
    } catch (error) {
      console.log("Error deleting user", error);
    }
  }