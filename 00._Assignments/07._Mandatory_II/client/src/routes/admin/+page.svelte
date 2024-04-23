<script>
    import user from "$lib/stores/userStore.js";
</script>
<svelte:head>
 <title>Admin page</title>
</svelte:head>

{#if $user?.role === 'admin'}
<h1>Welcome {$user?.firstName}</h1>
{:else if $user?.role !== 'admin'}
<h1>You are not an admin</h1>
{:else}
<h1>You are not even logged in please leave</h1>
<a href="/">Go back to safety</a>
{/if}