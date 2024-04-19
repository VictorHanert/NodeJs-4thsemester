<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../stores/generalStore.js";
    import { fetchGet } from "../../util/api.js";

    let movies = [];

    onMount(async () => {
        movies = (await fetchGet($BASE_URL + "/api/movies")).data;
    });
</script>

<h1>Movies</h1>

{#each movies as movie}
 <p>{movie.id}</p>
 <h3>{movie.title} - by {movie.director} - from {movie.year}</h3>
 {/each}