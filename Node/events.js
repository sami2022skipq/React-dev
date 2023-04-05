const EventEmitter = require('node:events')


const emiter = new EventEmitter()

emiter.on("order-pizza", (size, type)=> console.log(`Order Received Baking a  ${size} pizza ${type} will be ready is 15 `))

emiter.on("order-pizza", (siza)=>{
    if(siza == "Large" )
        console.log("sering complimentry drings ")
    
    else
        console.log(` 20 % discount `)
})
emiter.emit(`order-pizza`, "Large", "Fajita-Sazillian")

setTimeout(() => {
    console.log(" after 2000 ms ")
}, 2000);