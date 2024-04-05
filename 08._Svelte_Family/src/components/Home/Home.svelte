<script>
    import { fridgeMessages } from "../../stores/fridgeMessageStore";
</script>

<h2 style="border: 1px solid black; padding: 20px;">
    Home
</h2>

<div class="fridge">
    {#each $fridgeMessages as fridgeMessage}
    <p>{fridgeMessage.creator ?? "Title"}: {fridgeMessage.message}</p>
    {/each}
</div>

<slot></slot>

<style>
    .fridge {
        background-color: aliceblue;
        padding: 200px 80px;
        border-radius: 20px;
        border: 1px solid black;
    }
</style>
