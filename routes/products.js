const express = require("express");
const router = express.Router();
const axios=require('axios')
const Product=require('../model/Product')

//Route 1: to seed the database
router.get('/seedDB',async(req,res)=>{
    try {
        const seeded=await Product.count({})
        if(seeded===0){
            const json=await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json")
            await Product.create(json.data);
            res.send("db seeded successfully")
        }
        else{
            res.send("db already seeded")
        }
    } 
    catch (error) {
        console.log("error in /seedDB route", error.message)
    }
})

//Route 2: to fetch transactions for the given month, search value and page
router.get('/getAllTransactions',async(req,res)=>{
    try {
        const {searchVal,pageNo,month}=req.query
        
        const json=await Product.find({
            "$and": [ {"$or": [
                                { title: { '$regex': searchVal, '$options': 'i' } }, 
                                { description: { '$regex': searchVal, '$options': 'i' } }, 
                                { price: { '$regex': searchVal, '$options': 'i' } }
                              ]
                      },
                {dateOfSale: { '$regex': `-${month}-` }}
            ]
        })
        .sort({id:1})
        .skip(3*(parseInt(pageNo)-1))
        .limit(3)

        res.json(json)
    }
    catch (error) {
        console.log('error in /getAllTransactions route', error.message)
    }
})

module.exports=router