'use strict'

'use strict'

import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IRoom {
  number: string;
  type: string;
  description: string;
  price: number;
  available: boolean;
  createdAt: Date;
}

export interface IRoomModel extends IRoom, Document {}

const roomSchema = new Schema(
  {
    number: {
      type: String,
      required: [true, "Room number is required."],
    },
    type: {
      type: String,
      required: [true, "Room type is required."],
    },
    description: {
      type: String,
      required: [true, "Room description is required."],
    },
    price: {
      type: Number,
      required: [true, "Room price is required."],
    },
    available: {
      type: Boolean,
      default: true,
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

const Room = (models.Room ||
  mongoose.model<IRoomModel>("Room", roomSchema)) as typeof models.Room &
  (new (args: any) => IRoomModel);

export default Room;
