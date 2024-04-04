<script>
    let name = "";
    let email = "";
    let password = "";
    let confirmPassword = "";
    let error = "";

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            error = "Passwords do not match";
            return;
        }

        error = "";
        console.log("Submitted");
    };
</script>

<div>
    <form>
        <div class="form-element">
            <label for="name">Username </label>
            <input id="name" name="name" placeholder="Username" required />
        </div>

        <div class="form-element">
            <label for="email">Email </label>
            <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
            />
        </div>

        <div class="form-element">
            <label for="password">Password </label>
            <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
            />
        </div>

        <div class="form-element">
            <label for="password">Confirm Password </label>
            <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                placeholder="Confirm Password"
                required
            />
        </div>

        <div class="form-element">
            <button aria-label="Sign Up">Sign Up</button>
        </div>
    </form>
</div>

<style>
    .form-element {
        margin-bottom: 10px;
    }

    input {
        padding: 5px;
        width: 100%;
    }

    button {
        padding: 5px;
        width: 100%;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>