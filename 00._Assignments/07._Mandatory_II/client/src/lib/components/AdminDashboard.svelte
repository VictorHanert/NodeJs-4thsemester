<script>
    import user from "$lib/stores/userStore.js";
    import { userLoggedInStatus } from "$lib/util/api.js";
    import { onMount } from "svelte";
    import { getAllUsers, deleteUser } from "$lib/util/apiAdmin.js";
    import { writable } from "svelte/store";
  
    const userList = writable([]);
  
    onMount(async () => {
      const result = await userLoggedInStatus();
      const returnedData = await result.json();
      if (returnedData.success === true)
        user.update((val) => (val = returnedData.data));
  
      const users = await getAllUsers();
      if (Array.isArray(users)) {
        userList.set(users);
      } else {
        console.error('getAllUsers did not return an array:', users);
      }
    });
  </script>

<main>
    <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
      Welcome {$user?.firstname}
    </h2>
    <hr>
    <h2 class="mt-10 text-xl sm:text-2xl md:text-3xl">Admin dashboard</h2>
    <table class="table-auto bg-white text-black">
      <thead>
        <tr>
          <th class="px-4 py-2">Username</th>
          <th class="px-4 py-2">Role</th>
          <th class="px-4 py-2">First name</th>
          <th class="px-4 py-2">Last name</th>
          <th class="px-4 py-2">Email</th>
          <th class="px-4 py-2">Delete</th>
        </tr>
      </thead>
      <tbody>
      {#each $userList as user}
        <tr>
          <td class="border px-4 py-2">{user.username}</td>
          <td class="border px-4 py-2">{user.role}</td>
          <td class="border px-4 py-2">{user.firstname}</td>
          <td class="border px-4 py-2">{user.lastname}</td>
          <td class="border px-4 py-2">{user.email}</td>
            <td class="border px-4 py-2">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" on:click={() => deleteUser(user._id)}>
                Delete
                </button>
            </td>
        </tr>
      {/each}
        </tbody>
    </table>
</main>