const Registermodel = require('../model/Register');

const app = require('express').Router()


app.post ('/loginview', async (request, response) => {
    const { email, password } = request.body;
    // console.log(request.body)
    const user = await Registermodel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password && user.status ==='ACTIVE'){
        response.json({ success: true, message: 'Login successful',username: user.email ,id:user._id  });
      }
       else {
        response.json({ success: false, message: 'Invalid Password and email' });
      }
    }
    
    })
  })




  module.exports=app
