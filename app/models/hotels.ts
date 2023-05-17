"use strict";

import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IHotel {
  name: string;
  address: string;
  city: string;
  country: string;
  rating: number;
  rooms: string[];
  createdAt: Date;
}

export interface IHotelModel extends IHotel, Document {}

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Hotel name is required."],
      unique: true
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required."],
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
