<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-navigator";
    import { BASE_URL } from "../../stores/generalStore";
    import { fetchGET, fetchPOST } from "../../util/api";

    onMount(async() => {
        const customer = {
            name: "Helle"
        };
        await fetchPOST($BASE_URL + "/api/customers", customer);

        const result = await fetchGET($BASE_URL + "/api/customers");
        console.log(result);
    });


    function completeCheckout() {
        navigate('/');
    }
</script>

<h1>Sunglasses Shop</h1>

<button on:click={completeCheckout}>Checkout</button>