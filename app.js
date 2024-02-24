const express = require('express');
const app = express();
const port = 3000;

//GET Endpoint 
app.get('/', (req, res) => {
  res.send('Hello World!');
});
/**
 * this function multiplies two numbers
 *@param {number} multiplicant
 *@param {number} multiplier
 *@returns {number} product
 
 */
const multiply = (multiplicant, multiplier) => {
    const product = multiplicant * multiplier;
    return product;
}


// gett multiply endpoint http://localhost:3000/multiply?a=5&b=6 
app.get('/multiply', (req, res) => {
    try {
        const multiplicant = parseFloat(req.query.a);
        const multiplier = parseFloat(req.query.b);
        if (isNaN(multiplier) === NaN) throw new Error('Invalid input');
        if (isNaN(multiplicant) === NaN) throw new Error('Invalid input');
        console.log({multiplicant}, {multiplier});
        const product = multiply(multiplicant, multiplier);
        res.send(product.toString(10));
    }catch(err){
        console.error(err);
        res.send('Could not calculate the product. Please check the input values.');       
    }
    

});

app.listen(port, () => {console.log(
    `Example app listening at http://localhost:${port}`);
});