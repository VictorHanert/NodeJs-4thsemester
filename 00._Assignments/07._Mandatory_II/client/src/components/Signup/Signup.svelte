<script>
import { BASE_URL } from "../../stores/generalStore.js";
import { goto } from "$app/navigation";
import toast from "svelte-french-toast";

  let name = "";
  let email = "";
  let password = "";

    const signup = async () => {
        const customer = {
        name,
        email,
        password,
        };
    
        try {
        const response = await fetch($BASE_URL + '/api/signup', {
            method: "POST",
            credentials: "include",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(customer),
        });
    
        if (!response.ok) {
            throw new Error("Signup failed");
        }
        // if signup is successful, redirect to login page:
        await goto("/auth");
        } catch (error) {
        console.error(error);
        toast("Signup failed", {
            icon: "❌",
            position: "center-top",
        });
        }
    };
</script>

<main>
  <h2 class="text-2xl font-bold mb-8 text-center">Sign up</h2>
  <form method="POST">
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700"
        >Username</label
      >
      <input
        id="name"
        name="name"
        placeholder="insert here"
        required
        bind:value={name}
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>

    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Email</label
      >
      <input
        id="email"
        name="email"
        type="email"
        placeholder="insert here"
        required
        bind:value={email}
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>

    <div class="mb-4">
      <label for="password" class="block text-sm font-medium text-gray-700"
        >Password</label
      >
      <input
        id="password"
        name="password"
        type="password"
        placeholder="insert here"
        required
        bind:value={password}
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>

    <button
      class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Sign Up
    </button>
  </form>
</main>
