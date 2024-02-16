const express = require("express");
const app = express();

const drinks = [
    {
        "id": 1,
        "name": "Espresso Martini",
        "type": "Coffee",
        "description": "A cocktail made with espresso, vodka, coffee liqueur, and simple syrup, typically served in a martini glass.",
        "ingredients": ["Espresso", "Vodka", "Coffee liqueur", "Simple syrup"]
    },
    {
        "id": 2,
        "name": "Mojito",
        "type": "Cocktail",
        "description": "A refreshing cocktail made with white rum, sugar, lime juice, soda water, and mint.",
        "ingredients": ["White rum", "Sugar", "Lime juice", "Soda water", "Mint leaves"]
    },
    {
        "id": 3,
        "name": "Margarita",
        "type": "Cocktail",
        "description": "A classic cocktail consisting of tequila, triple sec, and lime juice, often served with salt on the rim of the glass.",
        "ingredients": ["Tequila", "Triple sec", "Lime juice", "Salt"]
    },
    {
        "id": 4,
        "name": "Cosmopolitan",
        "type": "Cocktail",
        "description": "A cocktail made with vodka, triple sec, cranberry juice, and freshly squeezed lime juice.",
        "ingredients": ["Vodka", "Triple sec", "Cranberry juice", "Lime juice"]
    }
];


// routes
app.get("/drinks", (req, res) => {
    res.send({ data: drinks });
});

app.get("/drinks/:id", (req, res) => {
    const id = Number(req.params.id);
    const foundDrink = drinks.find((drink) => drink.id === id);

    if (!foundDrink) {
        return res.status(404).send({ data: "Drink not found" });
    }

    res.send({ data: foundDrink });
});


// Always in bottom
app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server");
        return;
    }
    console.log("Server is now running on port", 8080)
})