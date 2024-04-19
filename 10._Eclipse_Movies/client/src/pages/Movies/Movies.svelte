<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../stores/generalStore";

    let movies = [];

    onMount(() => {
        fetch($BASE_URL + "/api/movies")
        .then((response) => response.json())
        .then((result) => {
            movies = result.data
        });
    });
</script>

<h1>Movies</h1>

{#each movies as movie}
 <p>{movie.id}</p>
 <h3>{movie.title} - by {movie.director} - from {movie.year}</h3>
 {/each}