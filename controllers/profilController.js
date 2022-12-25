'use strict'
const  Profil =require('../models').Profil
const  User =require('../models').User
const  Product =require('../models').Product

exports.getAll=(req,res)=>{
    Profil.findAll(({include: [Product,User]}))
    .then(response=>res.status(200).send(response))
    .catch(response=>res.status(500).send(response))
}

exports.getProfilById=(req,res)=>{
    Profil.findOne({where:{id:req.params.id},include: [Product,User]})
    .then(response=>res.status(200).send(response))
    .catch(response=>res.status(500).send(response))
}

exports.createprofil=(req,res,next)=>{
    Profil.create({
        firstName:req.body.firstName,	
        lastName:req.body.lastName,	
        country	:req.body.country,
        userId : req.body.userId
        }).then(response=>res.status(200).send(response))
        .catch(response=>res.status(500).send(response))
}

exports.updateprofil=(req,res,next)=>{
    Profil.update({
        firstName:req.body.firstName,	
        lastName:req.body.lastName,	
        country	:req.body.country,
        userId : req.body.userId
        },{where:{id:req.params.id}}
    )
    .then(response=>res.status(200).send(response))
    .catch(response=>res.status(500).send(response))
}

exports.deleteProfilById=(req,res)=>{
    Profil.destroy({where:{id:req.params.id}})
    .then(response=>res.status(200).send(response))
    .catch(response=>res.status(500).send(response))
}