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
