<script>
    import { writable } from 'svelte/store';

    const progress = writable(0);
    const numbers = Array.from({ length: 11 }, (_, i) => i / 10);
</script>

<h4>How excited are you about MySpace from 1 - 10?</h4>
<progress value={$progress}></progress>

<div class="flex justify-between">
    {#each numbers as number (number)}
        <button on:click={() => progress.set(number)}>
            {number * 10}
        </button>
    {/each}
</div>

{#if $progress === 1}
    <p>Wow thats amazing!</p>
{/if}
{#if $progress !== 0}
    <p>Thank you for your feedback!</p>
{/if}

<style>
    progress {
        display: block;
        width: 100%;
    }

    /* For Chrome and Safari */
    progress::-webkit-progress-value {
        background: #7d45d8; /* Change to your desired color */
    }

    /* For Firefox */
    progress::-moz-progress-bar {
        background: #7d45d8; /* Change to your desired color */
    }
</style>