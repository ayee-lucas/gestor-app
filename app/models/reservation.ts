"use strict";

import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IReservation {
  event: string;
  user: string;
  attendees: number;
  createdAt: Date;
}

export interface IReservationModel extends IReservation, Document {}

const reservationSchema = new Schema({
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
    required: [true, "Event is required."],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required."],
  },
  attendees: {
    type: Number,
    required: [true, "Number of attendees is required."],
    min: [1, "Number of attendees must be greater than 0."],
    max: [1000, "Number of attendees cannot exceed 1000."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{
  versionKey: false,
});

const Reservation = (models.Reservation ||
  mongoose.model<IReservationModel>("Reservation", reservationSchema)) as typeof models.Reservation & (new (args: any) => IReservationModel);

export default Reservation;
