const PizzaShop = require("./pizza-shop")
const DrinkMachine = require('./drink-machine')
const orderDrink = new DrinkMachine()
const pizza = new PizzaShop()

pizza.on("order", (size, topping )=>{
    console.log(`Bakking ${size} Pizzza type ${topping}`)
    orderDrink.serveDrink(size)
})


pizza.order("Medium", "Crowun-Crust")
pizza.displayOrderNumber()

pizza.order("Large", "Chicken Fajita")
pizza.displayOrderNumber()

pizza.order("Small", "Mushroom")
pizza.displayOrderNumber()
