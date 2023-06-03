const express = require('express'); 
const axios = require('axios');
const bodyParser = require('body-parser');


const app = express();
app.use(express.static("public"));
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , (req , res) =>{

    axios.get('https://api.exchangerate-api.com/v4/latest/USD').then(response =>{
        const exchangeRates = response.data.rates;
        const usdToTry = exchangeRates.TRY;
       
        res.render('main' , {_usdToTry : usdToTry});
    })
})
app.listen(3000 , () => {
    console.log("server is running at port 3000");
})
