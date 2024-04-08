const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("./config/dbConnect");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/files",express.static('files'));

require("./pdfDetails");
const PdfSchema = mongoose.model("PdfDetails");
require("./user");
require("./imageSchema");
const User=mongoose.model("users")
const Images=mongoose.model("ImageDetails")
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post("/upload-files", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const fileName = req.file.filename;
    try {
        if (title) {
            await PdfSchema.create({ title: title, pdf: fileName });
            res.send({ status: "ok" });
        } else {
            // Handle the case when no title is provided
            res.send({ status: "Title is required." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.get("/get-files", async (req, res) => {
    try {
        const data = await PdfSchema.find({}); // Await the promise returned by PdfSchema.find()
        res.send({ status: "ok", data: data });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.post("/upload-image",upload.single("image"), async (req, res) => {
    console.log(req.body)
    const name= req.body.name;
    const imageName = req.file.filename;

    try{
        await Images.create({image:imageName,name:name});
        res.json({status:"ok"})
    }
    catch(error)
    {
        res.json({status:error})
    }
})

app.get("/get-image",async(req,res)=>{
    try{
        Images.find({}).then((data)=>{
            console.log("success")
            res.send({status:"ok",data:data});
        })
    }catch(error)
    {
        res.send({status:error})
    }
})
app.post("/register", async (req, res) => {
    const user = new User(req.body);
    const result = await user.save();
    console.log("success")
    //result=result.toObject();
    //delete result.password
    res.send(result);
  });
  app.post("/login", async (req, res) => {
    /*console.log(req.body)
     */ let user = await User.findOne(req.body).select("-password");
  
    if (req.body.password && req.body.email) {
      if (user) {
        res.send(user);
        console.log("suck")
      } else {
        res.send({ result: "user does not exist" });
      }
    } else {
      
      res.send({ result: "fill all" });
    }
  });
app.listen(8000, () => {
    console.log("Database Connected");
});
