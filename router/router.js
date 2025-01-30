const express = require('express');
const nodemailer= require('nodemailer');
const router = express.Router();
//////////////////////////////////////////////////////////////
const transporter = nodemailer.createTransport({
  service:'Gmail',
  auth:{
    user:'globaldorado78@gmail.com',
    pass:'fauthesukyadpjmv'
  }
});
/////////////////////////////////////////////////////////////
router.get('/',(req,res)=>{
try{
res.render('index');
}catch(error){
console.error(error.message);
res.status(500).send('Error en el servidor');
}
});
///////////////////////////////////////////////////////////
router.post('/enviarEmail',(req,res)=>{
try{
const {nombre,email,telefono,mensaje} = req.body;
const message = {
      from:'globaldorado78@gmail.com',
      to:'elrandygraterol@gmail.com',
      subject:`Nombre : ${nombre}`,
      text:`Notificacion de  ${email} , telefono : ${telefono} , mensaje : ${mensaje}`
    }
    transporter.sendMail(message,(error,info)=>{
     if(error){
       console.log(error.message);
       res.json({status:false});
     }else{
      console.log(`Mensaje de aprobacion enviado ${info.response}`);
      res.json({status:true});
    }
  })
}catch(error){
console.error(error.message);
res.status(500).send(`error en el servidor : ${error.message}`);
}
});

module.exports= router;