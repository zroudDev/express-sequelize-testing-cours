'use strict'
const User =require('../models').User
const Profil =require('../models').Profil
 
exports.getAll=(req,res)=>{
    User.findAll({ include:Profil})
    .then(response=>res.status(200).send(response))
    .catch(response=>res.status(500).send(response))
}
exports.createUser=(req,res,next)=>{
    User.create({
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password,
    })
    .then(response=>res.status(200).send(response))
    .catch(response=>res.status(500).send(response))

}
exports.getUserById=(req,res)=>{
    User.findOne({where:{id:req.params.id}})
    .then(response=>res.status(200).send(response))
    .catch(response=>res.status(500).send(response))

}

exports.updateUserById=(req,res)=>{
    User.update({
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password,
        },
        {where:{id:req.params.id}}
    )
    .then(response=>res.status(200).send(response))
    .catch(response=>res.status(500).send(response))

}

exports.destroyUserById=(req,res)=>{
    User.destroy( {where:{id:req.params.id}})
    .then(response=>res.status(200).send(response))
    .catch(response=>res.status(500).send(response))
}