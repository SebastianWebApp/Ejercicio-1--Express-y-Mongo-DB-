import mongoose from "mongoose";

const connectToDB = async () => {
    await mongoose.connect(process.env.URI).then(res=>{
        console.log("Conectada a la base de datos")
    })
}

export default connectToDB;