<script>
  import { logout } from "$lib/util/api.js";
  import user from "$lib/stores/userStore.js";
  import { Toaster } from "svelte-french-toast";

  $: isLoggedIn = $user === null ? false : true;

  export let y;
</script>

<Toaster />
<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
    (y > 0
      ? " py-4 bg-slate-950 border-violet-950"
      : " py-6 bg-transparent border-transparent")}
>
  <h1 class="font-medium">
    <a
      href="/myspace"
      class="hover:text-violet-400 duration-300 hover:text-2xl"
    >
      <b class="font-bold poppins">My</b> Space
    </a>
  </h1>
  <div class="sm:flex items-center gap-4 hidden">
    <a href="/" class="duration-200 hover:text-violet-400">
      <p>Home <i class="fa-solid fa-home"></i></p>
    </a>

    <a href="/about" class="duration-200 hover:text-violet-400">
      <p>About <i class="fa-solid fa-bars-staggered"></i></p>
    </a>

    {#if isLoggedIn === false}
      <a
        href="/auth"
        class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">
          Login <i class="fa-solid fa-right-to-bracket"></i>
        </h4>
      </a>
    {:else}
      {#if $user.role === 'admin'}
        <a
          href="/admin"
          class="duration-200 hover:text-violet-400"
        >
          <p>Admin <i class="fa-solid fa-crown"></i></p>
        </a>
      {/if}
      <button
        class="blueShadow px-5 py-2 rounded-full bg-violet-400 hover:bg-violet-500"
        on:click={logout}
        >Logout <i class="fa-solid fa-right-from-bracket"></i></button
      >
    {/if}
  </div>
</header>
