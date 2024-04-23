<script>
    import { slide } from 'svelte/transition';
    import LoginForm from "$lib/components/LoginForm/LoginForm.svelte";
    import SignupForm from "$lib/components/SignupForm/SignupForm.svelte";
  
    let activeForm = "login";
  </script>
  
  <main>
    <section class="flex items-center justify-center text-black m-8">
      <div class="w-full max-w-md bg-white p-8 rounded shadow-md min-h-form">
        {#if activeForm === "login"}
        <div class="front" transition:slide={{ delay: 250, duration: 200}}>
          <LoginForm />
          <p class="text-center mt-5">Don't have an account? 
            <button on:click={() => (activeForm = "signup")} class="text-blue-500 underline">Sign up</button></p>
        </div>
        {:else if activeForm === "signup"}
        <div class="back" transition:slide={{ delay: 250, duration: 200}}>
          <SignupForm />
          <p class="text-center mt-5">Already have an account?
            <button on:click={() => (activeForm = "login")} class="text-blue-500 underline">Login</button></p>
        </div>
        {/if}
      </div>
    </section>
  </main>