/**
 * Index.js:
 * This is the routing module for the back-end of the application.
 *
 * 
 */

//App Dependencies
const { ProductModel } = require('./lib/app/models/Product');
const { ProductDAO } = require('./lib/app/database/ProductDAO.js');
const bodyParser = require('body-parser');

//Express Application instance
const express = require('express');
const app = express()
const port = process.env.port;

// Database configuration
const dbHost = "localhost"
const dbPort = 53380;
const dbUsername = "azure";
const dbPassword = "6#vWHD_$";

app.use(express.static('app/images'))
app.use(bodyParser.json());

app.listen(port, () =>{
    console.log(`App listening on port ${port}!`);
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

/** 
 * GET '/':
 * gets the default root Route for the application, only sends a message
*/
app.get('/', function (_req, res){
    res.send('This is the default root Route.');
})

/** 
 * GET '/products':
 * gets a list of all products in the database using ProductDAO
*/
app.get('/products', function (req, res){
    let dao = new ProductDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findAllProducts(function(products)
    {
        res.json(products);
    });
});

/** 
 * GET '/products/:id':
 * gets a specific product using its id using ProductDAO
*/
app.get('/products/:id', function (req, res){
    let dao = new ProductDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findProducts(req.params.id, function(products)
    {
        res.json(products)
    })
})

/** 
 * POST '/products':
 * posts a product to the database using ProductDAO
*/
app.post('/products', function (req, res){
    if(!req.body.name){
        res.status(400).json({"error": "There was an issue with the posted product, it could not be added"});
    }
    else{
        let product = new ProductModel(-1, req.body.name, req.body.type, req.body.shelfLife, req.body.price);
        let dao = new ProductDAO(dbHost, dbPort, dbUsername, dbPassword);
        dao.create(product, function(productId){
            if(productId == -1) res.status(200).json({"error": "There was an issue with the posted product, it could not be added"})
            else res.status(200).json({"success" : "Creating product successful with ID of " + productId});
        })
        }
});

/** 
 * PUT '/products/:id':
 * updates a product in the database by taking an id and using ProductDAO to find and update the product
*/
app.put('/products/:id', function (req, res) {
    if(!req.body.name){
        res.status(400).json({"error": "There was an issue with the posted product, it could not be updated"});
    }
    else {
        let product = new ProductModel(req.params.id, req.body.name, req.body.type, req.body.shelfLife, req.body.price);
        let dao = new ProductDAO(dbHost, dbPort, dbUsername, dbPassword);
        dao.update(product, function(changes)
        {
            if(changes == 0)
                res.status(200).json({"error": "There was an issue with the posted product, it could not be updated"});
            else
                res.status(200).json({"success": "Updating product successful"});
        })
    }
});

/** 
 * DELETE '/products/:id':
 * deletes a product in the database by taking its id and using ProductDAO to remove it
*/
app.delete('/products/:id', function (req, res){
    let productId = Number(req.params.id);

    let dao = new ProductDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.delete(productId, function(changes){
        if(changes == 0)
            res.status(200).json({"error": "Product deletion failed"});
        else
            res.status(200).json({"sucess" : "Product deleted"})
    });
});