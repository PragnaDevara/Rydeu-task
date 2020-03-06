const express_var = require("express");

//Mongoose is a package used to connect nodejs application with mongodb and manipulate mongodb from nodejs application

const db = require("mongoose");

//here we are initializing the app variable with express function

const app = express_var();

//in the below line "Organisation_Var" is a model variable which is exported from a organisation_schema file which is written in /databases/Organisation


const { Organisation_Var} = require("./databases/Organisation");
const { Vehicle_Var} = require("./databases/Vehicle");
const { Pricing_Var} = require("./databases/Pricing");

db
    .connect("mongodb://localhost/Project", { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB..."));
//in below line we are initializing the usage of functionality of express package i.e using json object for request and response purpose
app.use(express_var.json());
app.post('/senddata', async (req, res) => {
    //once the /senddata route is called this block of code will be executed
    //create a new service object and assigning it to pricing variable
    serviceObj = new Pricing_Var({
        city: req.body.city,
        organisation_id: req.body.organisation_id,
        totaldistance: req.body.totaldistance
    });
    
    // save the object using the save() which is a mongoose method
    await serviceObj.save()
        .then(() => res.status(200).send({
            message: "Success"
        }))
        .catch(err => res.status(400).send({
            message: "data cant be received"
        }))
})