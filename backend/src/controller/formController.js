const form = require("../model/formModel")

const userData = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  try {
    let create = await form.create(req.body)
    return res.send({ status: true, data: create });
  }
  catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
}



//***************************************************************************************************************** */


const getuser = async function (req, res) {
  try {

    const studentData = await form.find();
    if (!studentData) return res.status(404).send({ status: false, message: "data is not present" });
    return res.send(studentData)
  } catch (error) {
    return res.status(500).send({ status: false, message: error });
  }
}

module.exports = { userData, getuser }