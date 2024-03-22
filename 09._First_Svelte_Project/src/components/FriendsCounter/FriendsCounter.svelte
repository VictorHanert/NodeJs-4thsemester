<script>
    export let friendsCounter = 0;

    function alienateAFriend() {
        friendsCounter--;
    }
</script>

<div>Friends Counter:</div>
<h1>{friendsCounter}</h1>
<button on:click={alienateAFriend}>Alienate A Friend</button>