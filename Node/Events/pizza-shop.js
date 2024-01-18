const EventEmitter = require('node:events')
const { type } = require('node:os')
class PizaaShop extends EventEmitter { 
    constructor(){
        super()
        this.orderNumer =0
    }
    order(size, topping){
        this.orderNumer ++
        this.emit ("order", size, topping)
    }
    displayOrderNumber(){
        console.log(`The current order number is ${this.orderNumer}`)
    }
}

module.exports = PizaaShop