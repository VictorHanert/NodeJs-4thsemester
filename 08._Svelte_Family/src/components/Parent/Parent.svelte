<script>
    export let parentName;
    export let myChildren;

    import Child from "../Child/Child.svelte";

    function handleShowLove(childName) {
        console.log(`${parentName} is loved by ${childName}`);
        
    }

    let treasureChest = ['💰','🍹','👑','🥑'];

    const childrenTakingItemsCount = {};

    function handleTakeFromTreasureChest(childName) {
        treasureChest.pop();
        treasureChest = treasureChest;
    }

</script>

<h2>{parentName}</h2>
<div>
    {#each treasureChest as treasure}
    <span>{treasure + " "}</span>
    {/each}
</div>
<br>

{#each myChildren as child}
<Child child={child} onShowLove={handleShowLove} onTakeFromTreasureChest={handleTakeFromTreasureChest}/>
{/each}
