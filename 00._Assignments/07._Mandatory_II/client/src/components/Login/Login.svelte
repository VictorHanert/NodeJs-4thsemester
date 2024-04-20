<script>
  import toast, { Toaster } from "svelte-french-toast";
  import { BASE_URL } from "../../stores/generalStore.js";
  import { goto } from "$app/navigation";

  let username = "";
  let password = "";

  const login = async () => {
    const customer = {
      username,
      password,
    };

    try {
      const response = await fetch(`${$BASE_URL}/api/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }
      // if login is successful, redirect to home page:
      await goto("/myspace");
    } catch (error) {
      console.error(error);
      toast("Invalid username or password", {
        icon: "❌",
        position: "center-top",
      });
    }
  };

  const resetPassword = () => {
    toast("Email sent to reset password", {
      icon: "✅",
      position: "center-top",
    });
  };
</script>

<Toaster />
<main>
  <h2 class="text-2xl font-bold text-black mb-8 text-center">Login</h2>
  <form on:submit|preventDefault={login}>
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700"
        >Username</label
      >
      <input
        id="name"
        name="name"
        placeholder="insert here"
        required
        bind:value={username}
        autocomplete="username"
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>

    <div class="mb-6">
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
        autocomplete="current-password"
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>

    <button
      type="submit"
      class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Login
    </button>
  </form>
  <p class="text-center mt-8">
    Forgot your password?
    <button
      on:click={resetPassword}
      id="reset-password"
      class="text-blue-500 underline">Reset it here</button
    >
  </p>
</main>
