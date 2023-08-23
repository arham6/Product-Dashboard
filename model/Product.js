const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    id:{
        type:Number
    },
    title:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    },
    category:{
        type:String
    },
    image:{
        type:String
    },
    sold:{
        type:Boolean
    },
    dateOfSale:{
        type:String
    }
})

const Product=mongoose.model('product',ProductSchema)
module.exports=Product