

const feed = require("../model/feedbackModel")

const feeddata = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  try {
    let create = await feed.create(req.body)
    return res.send({status: true, data: create });
  }
  catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


const getfeed = async function (req,res) {

  const {page=1, limit=1 } = req.query;
  try{
    const datafeed = await feed.find()

    .limit(limit * 1) 
    .skip((page-1) * limit);

    if (!datafeed.length) return res.status(404).send({status:false, message:"No data found"});
    return res.send({
      status:true,
      message: "Data Found",
      current_page: page,
      toatl_page: Math.ceil(datafeed.length/limit),
      data:datafeed
    });
  } catch (error) {
    return res.status(500).send({status:false, message:error});
  }
}

module.exports = {feeddata, getfeed}