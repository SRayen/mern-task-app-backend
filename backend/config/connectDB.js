const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    //an exit code of 0 signifies a successful execution, while a non-zero exit code indicates an error or abnormal termination.
    process.exit(1);
  }
};

module.exports = connectDB;
