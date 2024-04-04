<script>
  import Login from "./components/Login/Login.svelte";
  import Signup from "./components/Signup/Signup.svelte";

  let activeForm = 'login';
</script>
<main>
  <div class="switch">
    <button on:click={() => activeForm = 'login'} class:active-button={activeForm === 'login'}>SIGN IN</button>
    <button on:click={() => activeForm = 'signup'} class:active-button={activeForm === 'signup'}>SIGN UP</button>
  </div>
  <hr>
  <div id="box">
    <div class="form-container">
      {#if activeForm === 'login'}
        <Login />
      {:else if activeForm === 'signup'}
        <Signup />
      {/if}
    </div>
  </div>
</main>

<style>
  #box {
    background-color: aliceblue;
    padding: 50px;
    margin-top: 20px;
    border-radius: 10px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
</style>