<script>
  import MySpace from "../../components/MySpace.svelte";
  import { onMount } from "svelte";
  import user from "../../user";

  $: isLoggedIn = $user === null ? false : true;

  onMount(async () => {
    const userLoggedInStatus = async () => {
      const result = await fetch("http://localhost:3030/api/user", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      });
      return result;
    };
    const result = await userLoggedInStatus();
    const returnedData = await result.json();
    if (returnedData.success === true)
      user.update((val) => (val = returnedData.data));
  });
</script>

<svelte:head>
  <title>MySpace</title>
</svelte:head>

{#if isLoggedIn}
  <MySpace />
{:else}
  <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
    You need to be <span class="poppins text-violet-400">logged in</span> here!
    <br />
    Go to <a href="/auth" class="poppins text-violet-400">login-page</a> to acces the content
  </h2>
{/if}
