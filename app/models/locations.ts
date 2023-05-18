import mongoose, { Schema, model, models, Document } from "mongoose";

export interface ILocation {
  name: string;
  description: string;
  address: string;
  latitudeAndLongitude: String;
  createdAt?: Date;
}

export interface ILocationModel extends ILocation, Document {}

const locationSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Location name is required."],
    },
    address: {
      type: String,
      required: [true, "Location address is required."],
    },
    latitudeAndLongitude: {
      type: String,
      required: [true, "Location latitude is required."],
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

const Location = (models.Location ||
  mongoose.model<ILocationModel>("Location", locationSchema)) as typeof models.Location &
  (new (args: any) => ILocationModel);

export default Location;