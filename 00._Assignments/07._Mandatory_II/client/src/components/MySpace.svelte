<script>
  import toast, { Toaster } from "svelte-french-toast";

  let name = "";
  let nameHistory = [];

  function addNameToList() {
    if (name.length <= 1) {
      return toast("Please enter a name", {
        icon: "❌",
        position: "top-left",
      });
    }

    toast("Name added to the history", {
      icon: "✅",
      position: "top-left",
    });

    let timestamp =
      new Date().getDate() +
      "/" +
      new Date().getMonth() +
      "/" +
      new Date().getFullYear() +
      " " +
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds();
    const nameAndTime = { name: name, timestamp: timestamp };

    nameHistory = [...nameHistory, nameAndTime];
    name = "";
  }

  const clearHistory = () => {
    nameHistory = [];
    toast("History cleared", {
      icon: "✔️",
      position: "center-top",
    });
  };
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="mySpacePage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col items-center justify-center text-center lg:text-left gap-4 md:gap-5 lg:gap-6"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Welcome to <span class="poppins text-violet-400">MySpace</span>
      </h2>
      <Toaster />

      <h4 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
        {#if name.length <= 1}
          What's your name?
        {:else}
          Hello <span class="poppins text-violet-400">{name}</span>
        {/if}
      </h4>

      <input
        bind:value={name}
        placeholder="Name"
        class="w-2/3 shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        on:keypress={(e) => {
          if (e.key === "Enter") {
            addNameToList();
          }
        }}
      />
      <button
        type="button"
        on:click={addNameToList}
        class="mt-5 w-2/3 bg-violet-500 hover:bg-violet-700 text-white font-bold p-3 rounded focus:outline-none focus:shadow-outline"
      >
        Enter
      </button>
    </div>

    <div class="text-center p-5 shadow-2xl grid bg-white text-black">
      <div>
        <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
          Whiteboard with <br /><span class="poppins text-violet-400"
            >names history</span
          >
        </h2>

        <ul id="name-history">
          {#each nameHistory as { name, timestamp }}
            <li>
              <button
                type="button"
                on:click={() =>
                  toast(`Name: ${name} - Timestamp: ${timestamp}`, {
                    position: "top-left",
                  })}
              >
                <p class="mt-5"><b>{name}</b> at {timestamp}</p>
              </button>
            </li>
          {/each}
        </ul>
        {#if nameHistory.length === 0}
          <p class="mt-5">No names added yet</p>
        {:else}
          <button
            type="button"
            on:click={clearHistory}
            class="mt-5 w-2/3 hover:bg-violet-400 font-bold p-3 rounded"
          >
            Clear History 🗑️</button
          >
        {/if}
      </div>
    </div>
  </section>
</main>
