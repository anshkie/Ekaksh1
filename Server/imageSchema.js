const mongoose=require("mongoose")
const ImageDetailsSchema = new mongoose.Schema(
    {
        image: String,
        name: String
    },
    {
        collection:"ImageDetails",
    }
);
mongoose.model("ImageDetails",ImageDetailsSchema)