<script>
  import FriendsCounter from "./components/FriendsCounter/FriendsCounter.svelte";
  import Greeter from "./components/Greeter/Greeter.svelte";

</script>
<main>
  <h2>Hello there, <u>friends</u>!</h2>
  <Greeter name = "Bob"></Greeter>
  <Greeter name = "Alice"></Greeter>
  <Greeter name = "Eve"></Greeter>
  <FriendsCounter friendsCounter = {3}></FriendsCounter>
</main>
