"use strict";
import { IRoom } from "./rooms";

import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IHotel {
  name?: string;
  admin?: string;
  address?: string;
  description?: string;
  city?: string;
  country?: string;
  rating?: number;
  rooms?: IRoom[];
  createdAt?: Date;
}

export interface IHotelModel extends IHotel, Document {}

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Hotel name is required."],
      unique: true,
      maxlength: [200, "Hotel name cannot exceed 200 characters."],
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required."],
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot exceed 500 characters."],
      default: "",
      trim: true,
      required: false,
    },
    address: {
      type: String,
      required: [true, "Hotel address is required."],
    },
    city: {
      type: String,
      required: [true, "Hotel city is required."],
    },
    country: {
      type: String,
      required: [true, "Hotel country is required."],
    },
    rating: {
      type: Number,
      required: [true, "Hotel stars is required."],
      min: [1, "Rating cannot be less than 1."],
      max: [5, "Rating cannot be greater than 5."],
    },
    rooms: [
      {
        type: Schema.Types.ObjectId,
        ref: "Room",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

const Hotel = (models.Hotel ||
  mongoose.model<IHotelModel>("Hotel", hotelSchema)) as typeof models.Hotel &
  (new (args: any) => IHotelModel);

export default Hotel;
