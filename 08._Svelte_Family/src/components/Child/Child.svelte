<script>
  export let child;
  export let onShowLove;
  export let onTakeFromTreasureChest;

  import { fridgeMessages } from "../../stores/fridgeMessageStore";

  let fridgeMessageInputValue = "";

  function submitFridgeMessage() {
    const newFridgeMessage = {
        creator: child.name,
        message: fridgeMessageInputValue
    };
    fridgeMessages.set([... $fridgeMessages, newFridgeMessage]);
    fridgeMessageInputValue = "";
  }
</script>

<div
  class:is-girl={child.isGirl}
  class:is-boy={!child.isGirl}
  class={child.familySheep || "not-a-black-sheep"}
>
  <p>{child.name}</p>

  <label for="fridgeMessage">Write a fridge message</label>
  <input type="text" name="fridgeMessage" placeholder="Write message" 
  bind:value={fridgeMessageInputValue}/>
  <br />
  <button on:click={submitFridgeMessage}>Post fridge message</button>
  <br />
  <button on:click={() => onShowLove(child.name)}>Show Love 💚</button>
  <br />
  <button on:click={onTakeFromTreasureChest}>Take from treasure chest</button>
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
