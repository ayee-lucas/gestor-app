"use strict";

import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IBill {
  issueDate: Date;
  nit: string;
  user: Schema.Types.ObjectId;
  roomPrice: Schema.Types.ObjectId;
  eventType: Schema.Types.ObjectId;
  items: Schema.Types.ObjectId;
  services: Schema.Types.ObjectId;
  hotel: Schema.Types.ObjectId;
  itemsSubtotal: Number;
  servicesSubtotal: Number;
  total: number;

}

export interface IBillModel extends IBill, Document {}

const billSchema = new Schema(
  {
    issueDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User "],
    },
    nit: {
      type: String,
      default: "C/F",
    },
    roomPrice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
    eventType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
        },
        unitPrice: {
          type: Number,
        },
      },
    ],
    services: [
      {
        service: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Service",
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    itemsSubtotal: {
      type: Number,
      default: 0,
    },
    servicesSubtotal: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
  }
);

const Bill = (models.Bill ||
  mongoose.model<IBillModel>("Bill", billSchema)) as typeof models.Bill &
  (new (args: any) => IBillModel);

export default Bill;
