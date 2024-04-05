<script>
    import { fridgeMessages } from "../../stores/fridgeMessageStore";

    export let fridgeHeight = 50;
</script>

<div class="fridge" style="min-height: {fridgeHeight}vh;">
    {#each $fridgeMessages as fridgeMessage}
    <p>{fridgeMessage.creator ?? "Title"}: {fridgeMessage.message}</p>
    {/each}
</div>


<style>
    .fridge {
        background-color: aliceblue;

        border-radius: 20px;
        border: 1px solid black;
    }
</style>