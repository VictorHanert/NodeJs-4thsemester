<script>
    let name = "";
    let password = "";
</script>

<div>
  <form>
    <div class="form-element">
      <label for="name">Username </label>
      <input id="name" name="name" placeholder="Username" required />
    </div>

    <div class="form-element">
      <label for="password">Password </label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        required
      />
    </div>

    <button type="submit">Login</button>
  </form>
</div>

<style>
  .form-element {
    margin-bottom: 10px;
  }

  input {
    padding: 5px;
    width: 100%;
  }

  button {
    padding: 5px;
    width: 100%;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
