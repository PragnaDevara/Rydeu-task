const express_var = require("express");
const db = require("mongoose");
const app = express_var();

const { Organisation_Var} = require("./databases/Organisation");
const { Vehicle_Var} = require("./databases/Vehicle");
const { Pricing_Var} = require("./databases/Pricing");

db
    .connect("mongodb://localhost/Project", { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB..."));
//in below line we are initializing the usage of functionality of express package i.e using json object for request and response purpose
app.use(express_var.json());
app.get('/price', async (req, res) => {
    //once the /price route is called this block of code will be executed
    //create a new service object and assigning it to pricing variable
    let serviceObj = await Pricing_Var.findOne({ 
        city: req.body.city,
        organisation_id: req.body.organisation_id,
        totaldistance: req.body.totaldistance
    });
    if(serviceObj){
        if(req.body.totaldistance>10){
            distance = req.body.totaldistance-10,
            minivanprice=distance*200 //since 2 euros is equal to 200 cents
            sedanprice=distance*100  //since 1 euro is equal to 100 cents
            return res.status(200).send({
                message: "minivanprice = "+minivanprice+" sedanprice = "+sedanprice
            })
        }
        else{
            minivanprice=2500
            sedanprice=2500
            return res.status(200).send({
                message: "minivanprice = "+minivanprice+" sedanprice = "+sedanprice
            })
        }
    }
    else return res.status(400).send({
        message : "Data not found"
    })
})