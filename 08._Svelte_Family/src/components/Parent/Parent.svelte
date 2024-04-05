<script>
    export let parentName;
    export let myChildren;

    import Child from "../Child/Child.svelte";
    import { fridgeMessages } from "../../stores/fridgeMessageStore";

    function handleShowLove(childName) {
        console.log(`${parentName} is loved by ${childName}`);
        
    }

    let treasureChest = ['💰','🍹','👑','🥑'];

    const childrenTakingItemsCount = {};

    function handleTakeFromTreasureChest() {
        treasureChest.pop();
        treasureChest = treasureChest;
    }

    function clearFridgeMessages() {
        fridgeMessages.set([{message: "Svelte Family Fridge"}]);
    }

</script>

<h2>{parentName}</h2> 
<button on:click={clearFridgeMessages}>Clear fridge ❌</button>
<div>
    {#each treasureChest as treasure}
    <span>{treasure + " "}</span>
    {/each}
</div>
<br>

{#each myChildren as child}
<Child child={child} onShowLove={handleShowLove} onTakeFromTreasureChest={handleTakeFromTreasureChest}/>
{/each}
