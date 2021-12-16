const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(parser.json());
let userDetails = require("./user");
const queryString = require("querystring");
app.use(express.json());
require("./conn");


app.post("/insert", async(req, res) => {
  try {
    const user = userDetails(req.body);
   const data = await user.save();

    res.status(200).json({ message: "data inserted" ,data});
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});
app.get("/get-data", async(req, res) => {
    try{
    const data= await userDetails.find({});
    res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
    
})
app.delete("/get-delete/:id", async(req, res) => {
    try{
    const data= await userDetails.findByIdAndDelete(req.params.id);
    res.status(200).send({message:"Data Deleted"});
    } catch (err) {
        res.status(404).send({ message:"data did not found"});
    }
    
})

app.listen(3006, () => {
  console.log("Run on port 3000");
});
