<script>
  import { register } from "$lib/util/api.js";

  let username = "";
  let password = "";
  let firstname = "";
  let lastname = "";
</script>

<main>
  <h2 class="text-2xl font-bold mb-8 text-center">Sign up</h2>
  <form
    on:submit|preventDefault={register(username, firstname, lastname, password)}
  >
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700"
        >Firstname</label
      >
      <input
        id="firstname"
        name="firstname"
        placeholder="insert here"
        required
        bind:value={firstname}
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>

    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700"
        >Lastname</label
      >
      <input
        id="lastname"
        name="lastname"
        placeholder="insert here"
        required
        bind:value={lastname}
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>

    <div class="mb-4">
      <label for="username" class="block text-sm font-medium text-gray-700"
        >Username</label
      >
      <input
        id="username"
        name="username"
        placeholder="insert here"
        required
        bind:value={username}
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
      type="submit"
      class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Sign Up
    </button>
  </form>
</main>
