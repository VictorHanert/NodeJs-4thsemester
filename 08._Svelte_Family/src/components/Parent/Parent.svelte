<script>
    export let parentName;
    export let myChildren;

    import Child from "../Child/Child.svelte";
</script>

<h2>{parentName}</h2>

{#each myChildren as child}
<Child child={child}/>
{/each}
