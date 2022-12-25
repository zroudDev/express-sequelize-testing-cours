const express=require('express')
const app=express();
const db=require('./models');
const route=require('./routers/route')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

db.sequelize.sync().then(()=>{
    app.listen(3000,()=>console.log(`server listening  in prort ${3000}`))
})
route(app)
