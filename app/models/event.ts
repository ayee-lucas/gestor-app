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
      maxlength: [100, "Event name cannot exceed 100 characters."],
    },
    type: {
      type: String,
      required: [true, "Event type is required."],
      enum: {
        values: ["conference", "seminar", "workshop"],
        message: "Event type must be conference, seminar or workshop.",
      },
    },
    description: {
      type: String,
      required: [true, "Event description is required."],
      maxlength: [500, "Event description cannot exceed 500 characters."],
    },
    price: {
      type: Number,
      required: [true, "Event price is required."],
      min: [0, "Event price must be greater than or equal to 0."],
      max: [1000, "Event price cannot exceed 1000."],
    },
    maxCapacity: {
      type: Number,
      required: [true, "Event maximum capacity is required."],
      min: [1, "Event maximum capacity must be greater than 0."],
      max: [1000, "Event maximum capacity cannot exceed 1000."],
    },
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
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

const Event = (models.Event ||
  mongoose.model<IEventModel>("Event", eventSchema)) as typeof models.Event &
  (new (args: any) => IEventModel);

export default Event;
