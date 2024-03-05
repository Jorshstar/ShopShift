import mongoose from'mongoose';

//This establishes a connection to the database
const connectDB = async () => {
  try {

    mongoose.set('strictQuery', false);
    
    //Connect to the database using the MONGO_URI environment variable
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      
    }) 
      
    //If the connection is successful, log a success message and also adds a yellow underline
    console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.underline.bold)
  } catch (error) {
    
    //If the connection fails, log an error message and exit the process
    console.log(error);
    
    //Exit the process with an error code if the connection fails
    process.exit(1);
  }
}
//Export the connectDB function
export default connectDB
