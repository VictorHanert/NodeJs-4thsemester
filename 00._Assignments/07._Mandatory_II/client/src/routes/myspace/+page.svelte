<script>
  import { onMount } from "svelte";
  import { userLoggedInStatus } from "$lib/util/api.js";
  import Whiteboard from "$lib/components/Whiteboard.svelte";
  import YouShallNotPass from "$lib/components/YouShallNotPass.svelte";
  import user from "$lib/stores/userStore.js";

  $: isLoggedIn = $user === null ? false : true;

  onMount(async () => {
    const result = await userLoggedInStatus();
    const returnedData = await result.json();
    if (returnedData.success === true)
      user.update((val) => (val = returnedData.data));
  });
</script>

{#if isLoggedIn}

  <Whiteboard />

{:else}

  <YouShallNotPass />

{/if}
