import { db } from '@/database';
import { Entry, IEntry } from '@/models';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = 
| {message: string}
| IEntry

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;
    
    if( !mongoose.isValidObjectId(id) ){
        return res.status(400).json({ message: 'El id no es valido' + id })
    }

    switch( req.method ) {
        case 'PUT':
            return updateEntries( req, res)
        case 'GET':
            return getEntry( req, res)
        case 'DELETE':
            return deleteEntry( req, res )
        default:
            return res.status(400).json({ message: 'Metodo no existe' + id })
    }
    
}

const updateEntries =  async( req:NextApiRequest, res:NextApiResponse<Data>) => {
    const { id } = req.query;
    await db.connect()
    const entryToUpdate = await Entry.findById( id );

    if( !entryToUpdate ){
        await db.disconnect()
        return res.status(400).json({ message: 'No hay entrada con ese id' + id })
    }

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status, 
    } = req.body

    try {
        const updateEntries = await Entry.findByIdAndUpdate( id, {description, status}, { runValidators:true, new:true})
        await db.disconnect()
        res.status(200).json(updateEntries!)
        
    } catch (error:any) {
        console.log({error})
        await db.disconnect()
        res.status(400).json({message:error.errors.status.message})
    }   
    //entryToUpdate.desciption = description;
    //entryToUpdate.status = status;
    // await entryToUpdate.save()

}
const getEntry = async( req:NextApiRequest, res:NextApiResponse<Data>) => {

    const { id } = req.query;

    await db.connect()
    const entryInDB = await Entry.findById( id )
    await db.disconnect()

    if( !entryInDB ){
        return res.status(400).json({ message: 'No hay entrada con ese id' + id })
    }

    return res.status(200).json(entryInDB)
}

const deleteEntry = async(req:NextApiRequest, res:NextApiResponse<Data>) => {
    const { id } = req.query;
    await db.connect()
    const entryInDB = await Entry.findByIdAndDelete( id )
    await db.disconnect()
    if( !entryInDB ){
        return res.status(400).json({ message: 'No hay entrada con ese id' + id })
    }
    return res.status(200).json(entryInDB)
}