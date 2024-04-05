<script>
    export let child;
</script>

<div
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.familySheep || "not-a-black-sheep"}
>
    <p>{child.name}</p>

</div>

<style>
    .is-girl {
        background-color: #ff3dd8;
    }
    .is-boy {
        background-color: #39bdff;
    }
    .black-sheep {
        border: 5px solid black;
    }
    .grey-sheep {
        border: 5px solid #d5d5d5;
    }
    .not-a-black-sheep {
        border: 5px solid white;
    }
</style>