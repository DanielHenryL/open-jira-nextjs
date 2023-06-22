import { Entry } from "@/interfaces";
import mongoose, { Model, Schema } from "mongoose";

//no es necesaria esta parte pero es de utilidad.
interface IEntry extends Entry{}


//Crando schema
const entrySchema = new Schema({
    description: { type: String, required:true},
    createdAt:{ type:Number},
    status:{
        type:String,
        enum:{
            values:['pedding', 'in-progress', 'finished'],
            message:'{VALUE} no es un estado permitido'
        }
    }
})

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema);

export default EntryModel