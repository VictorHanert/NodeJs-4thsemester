<script>
  	import { Router, Link, Route } from "svelte-navigator";
    import Home from "./pages/Home/Home.svelte";
    import Movies from "./pages/Movies/Movies.svelte";
    import SunglassesShop from "./pages/SunglassesShop/SunglassesShop.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/movies">Movies</Link>
    <Link to="/shop">Shop</Link>
  </nav>

  <Route path="/" component={Home} />
  <Route path="/movies" component={Movies} />
  <Route path="/shop" component={SunglassesShop} />
</Router>