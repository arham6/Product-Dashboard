const express = require("express");
const router = express.Router();
const Product=require('../model/Product')

//Route 3: to get all sales statistics
router.get('/sales',async(req,res)=>{
    try {
        const {month}=req.query
        let totalSale=0,noOfProducts=0,totalSold=0;
        
        const json=await Product.find({dateOfSale: { '$regex': `-${month}-` }})

        json.forEach((element) => {
            noOfProducts++
            if(element.sold){
                totalSale+=parseFloat(element.price)
                totalSold++
            } 
        })
        res.json({totalSale,totalSold,totalUnsold:noOfProducts-totalSold})
    }
    catch (error) {
        console.log('error in /sales route', error.message)
    }
})

//Route 4: to get data for bar chart
router.get('/BarChartData',async(req,res)=>{
    try {
        const {month}=req.query
        let productPrice=0,range1=0,range2=0,range3=0,range4=0,range5=0,range6=0,range7=0,range8=0,range9=0,range10=0

        const json=await Product.find({dateOfSale: { '$regex': `-${month}-` }})

        json.forEach((element) => {
            productPrice=parseFloat(element.price)
            if(productPrice>=0 && productPrice<=100){
                range1++;
            } 
            else if(productPrice>=101 && productPrice<=200){
                range2++;
            } 
            else if(productPrice>=201 && productPrice<=300){
                range3++;
            } 
            else if(productPrice>=301 && productPrice<=400){
                range4++;
            } 
            else if(productPrice>=401 && productPrice<=500){
                range5++;
            } 
            else if(productPrice>=501 && productPrice<=600){
                range6++;
            } 
            else if(productPrice>=601 && productPrice<=700){
                range7++;
            } 
            else if(productPrice>=701 && productPrice<=800){
                range8++;
            } 
            else if(productPrice>=801 && productPrice<=900){
                range9++;
            } 
            else if(productPrice>=901){
                range10++;
            } 
        })
        res.json({range1,range2,range3,range4,range5,range6,range7,range8,range9,range10})
    }
    catch (error) {
        console.log('error in /BarChartData route', error.message)
    }
})

//Route 4: to get data for pie chart
router.get('/PieChartData',async(req,res)=>{
    try {
        const {month}=req.query

        const json=await Product
        .aggregate([
            {$match:{dateOfSale: { '$regex': `-${month}-` }}},
            {$group:{_id:'$category',quantity:{$sum:1}}}
        ])

        res.json(json)  //returns array of objects of different categories of items along with their quantity
    }
    catch (error) {
        console.log('error in /PieChartData route', error.message)
    }
})

module.exports=router