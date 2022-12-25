'use strict'
const  Profil =require('../models').Profil
const  Product =require('../models').Product
const  User =require('../models').User
 
exports.getAll=(req,res)=>{
    Product.findAll(({include: [Profil,User]}))
    .then(response=>res.status(200).send(response))
    .catch(response=>res.status(500).send(response))
}

exports.getProductById=(req,res)=>{
    Product.findOne({where:{id:req.params.id}, include: Profil})
    .then(response=>res.status(200).send(response))
    .catch(response=>res.status(500).send(response))
}

exports.createProduct=(req,res,next)=>{
    Product.create({
        price:req.body.price,	
        name:req.body.name,	
        profilId : req.body.profilId
        }).then(response=>res.status(200).send(response))
        .catch(response=>res.status(500).send(response))
}

exports.updateProduct=(req,res,next)=>{
    Product.update({
        price:req.body.price,	
        name:req.body.name,	
        profilId : req.body.profilId
        },{where:{id:req.params.id}}
    )
    .then(response=>res.status(200).send(response))
    .catch(response=>res.status(500).send(response))
}

exports.deleteProductById=(req,res)=>{
    Product.destroy({where:{id:req.params.id}})
    .then(response=>res.status(200).send(response))
    .catch(response=>res.status(500).send(response))
}