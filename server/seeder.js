const mongoose = require("mongoose");
const Pizza = require("./models/model");
const pizzas = require("./data/Pizza-data");

const importData = async ()=>{
    try {
        await Pizza.deleteMany();
        const sampleData = pizzas.map((pizza) => {return {...pizza}});
        await Pizza.insertMany(sampleData)
        console.log(`data imported `)
        process.exit()
    } catch (error) {
        console.log("the error", error)
        process.emit(1)
    }
};
const dataDestory = () => {}

if(process.argv[2] === '-d'){
    dataDestory()
}else{
    importData()
}