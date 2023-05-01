const adminModel = require("../model/adminModel")

const Adminregister = async (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    try{
    let create =  await adminModel.create(req.body)
    return res.send({status:true, data: create})
    }
    catch (err) {
        return res.status(500).send({status:false, message:err.message});
    }
}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const AdminLogin= async function (req, res) {
    try {
    let Username = req.body.email;
    let password = req.body.password;
    let user = await adminModel.findOne({email: Username, password: password});
    if(!user){return res.status(400).send({msg: "email or paaword is wrong"})}
    res.status(201).send({ status: true, data:user});
    } catch (err) {
      console.log(err);
      return res.status(500).send({ status: false, msg: err.message });
    }
  };



  module.exports={AdminLogin,Adminregister}
  