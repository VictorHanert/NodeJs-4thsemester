<script>
    import Login from "../components/Login/Login.svelte";
    import Signup from "../components/Signup/Signup.svelte";
  
    let activeForm = "login";
  </script>
  
  <main>
    <section class="flex items-center justify-center text-black m-8">
      <div class="w-full max-w-md bg-white p-8 rounded shadow-md">
            {#if activeForm === "login"}
              <Login />
              <p class="text-center mt-5">Don't have an account? <button on:click={() => (activeForm = "signup")} class="text-blue-500 underline">Sign up</button></p>
            {:else if activeForm === "signup"}
              <Signup />
              <p class="text-center mt-5">Already have an account? <button on:click={() => (activeForm = "login")} class="text-blue-500 underline">Login</button></p>
            {/if}
      </div>
    </section>
  </main>