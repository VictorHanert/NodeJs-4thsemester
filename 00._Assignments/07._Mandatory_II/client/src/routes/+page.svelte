<script>
    import user from "$lib/stores/userStore.js";
    import NumberBar from "../lib/components/NumberBar.svelte";
    $: isLoggedIn = $user === null ? false : true;
  </script>
  
  <main class="flex flex-col flex-1 p-4">
    <section
      id="introPage"
      class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
      <div
        class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
      >
        <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
          <span class="poppins text-violet-400">Template</span> webpage
          <br />
          to be used in <span class="poppins text-violet-400">Node.js</span>
          semester
        </h2>
        <a
          href={isLoggedIn ? "/myspace" : "/auth"}
          class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
          />
          <h4 class="relative z-9">
            {isLoggedIn ? "Explore MySpace" : "Login"}
            <i class="fa-solid {isLoggedIn ? 'fa-globe' : 'fa-right-to-bracket'}"></i>
          </h4>
        </a>
      </div>
    </section>
    <NumberBar />
  </main>
  