<script>
  import user from "$lib/stores/userStore.js";
  import { userLoggedInStatus } from "$lib/util/api.js";
  import { onMount } from "svelte";
  import AdminDashboard from "../../lib/components/AdminDashboard.svelte";

  onMount(async () => {
    const result = await userLoggedInStatus();
    const returnedData = await result.json();
    if (returnedData.success === true)
      user.update((val) => (val = returnedData.data));
  });
</script>

<svelte:head>
  <title>Admin page</title>
</svelte:head>

<div class="grid text-center place-items-center m-10">
  {#if $user?.role === "admin"}
    <AdminDashboard />
  {:else}
    <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
      You are not an admin!
    </h2>
    <a
      class="p-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      href="/">Go back to safety</a
    >
  {/if}
</div>
