import "dotenv/config";
import mongoose, { connect } from "mongoose";



mongoose.set('strictQuery', false);

async  function dbConnect(): Promise<void> {
    const MONGODB_CNN = <string>process.env.MONGODB_CNN;
    await connect (MONGODB_CNN);
    
    console.log( "Base de datos online" );
}

export default dbConnect;