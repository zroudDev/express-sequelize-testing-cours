'use strict'
module.exports=(app)=>{
    const userController=require('../controllers/userController')
    const profilController=require('../controllers/profilController')
    const productController=require('../controllers/productController')
    
    app.route('/user').get(userController.getAll)
    app.route('/user/:id').get(userController.getUserById)
    app.route('/user').post(userController.createUser)
    app.route('/user/:id').put(userController.updateUserById)
    app.route('/user/:id').delete(userController.destroyUserById)

    app.route('/profil').get(profilController.getAll)
    app.route('/profil/:id').get(profilController.getProfilById)
    app.route('/profil').post(profilController.createprofil)
    app.route('/profil/:id').put(profilController.updateprofil)
    app.route('/profil/:id').delete(profilController.deleteProfilById)

    app.route('/product').get(productController.getAll)
    app.route('/product/:id').get(productController.getProductById)
    app.route('/product').post(productController.createProduct)
    app.route('/product/:id').put(productController.updateProduct)
    app.route('/product/:id').delete(productController.deleteProductById)
}