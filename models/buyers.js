const db = require('../config/db');

class buyers {
    constructor(customer_number , name , adress , age) {
        this.customer_number = customer_number
        this.name = name
        this.adress = adress
        this.age = age
    }

    async save(){
        let sql = `
        INSERT INTO buyers (customer_number, name ,address, age) 
        VALUES (
            ${this.customer_number},
            ${this.name},
            ${this.adress},
            ${this.age}
        )
        `;
        const newBuyer = await db.execute(sql);
    }
}

module.exports = new buyers