'use strict'

import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IEvent {
  name: string;
  type: string;
  description: string;
  price: number;
  maxCapacity: number;
  createdAt: Date;
}

export interface IEventModel extends IEvent, Document {}

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Event name is required."],
    },
    type: {
      type: String,
      required: [true, "Event type is required."],
      
    },
    description: {
      type: String,
      required: [true, "Event description is required."],
    },
    price: {
      type: Number,
      required: [true, "Event price is required."],
    },
    maxCapacity: {
      type: Number,
      required: [true, "Event maximum capacity is required."],
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

const Event = (models.Event ||
  mongoose.model<IEventModel>("Event", eventSchema)) as typeof models.Event &
  (new (args: any) => IEventModel);

export default Event;
