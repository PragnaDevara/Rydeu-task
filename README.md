# Rydeu-task
Organisation.js,Vehicle.js,Pricing.js are the Schemas.
Using Postman, we can send some data and store them in database.
The TaxiPricing API using a service object, intially fetches the data(i.e,city,organisation_id,totaldistance) from within the request.
If the serviceobject is found, then it calculates the pricing and returns the value.
If the serviceobject is not found, then it shows "Data not found" error as response.
