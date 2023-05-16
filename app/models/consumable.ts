'use strict'

import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IConsumable {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export interface IConsumableModel extends IConsumable, Document {}

const consumableSchema = new Schema({
    name: {
        type: String,
        required: [true, "Consumable name is required."],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    price:{
        type: Number,
        required: [ true, "Price is required"],
    },
    quantity:{
        type: Number,
        required:[true, "Quantity is required"],
    }

});

const Consumable = (models.Consumable || mongoose.model<IConsumableModel>("Consumable", consumableSchema)) as typeof models.Consumable & (new(args: any)=> IConsumableModel);

export default Consumable;