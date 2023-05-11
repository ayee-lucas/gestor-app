"use strict";

import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IService {
    serviceName: string;
    description: string;
    price: number;
    availability: boolean;
    createdAt: Date;
}

export interface IServiceModel extends IService, Document { }

const serviceSchema = new Schema({
    serviceName: {
        type: String,
        required: [true, "Service name is required."],
    },
    description: {
        type: String,
        required: [true, "Description is required."],
    },
    price: {
        type: Number,
        required: [true, "Price is required."],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
    {
        versionKey: false,
    }
);

const Service = (models.Service || mongoose.model<IServiceModel>("Service", serviceSchema)) as typeof models.Service & (new (args: any) => IServiceModel);

export default Service;
