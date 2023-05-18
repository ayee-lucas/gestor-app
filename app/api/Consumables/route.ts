import dbConnect from "@/app/utils/DatabaseConnection";
import Consumable from "@/app/models/consumable";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export async function GET() {
    try {
        const consumables = await Consumable.find();
        if(!consumables || consumables.length === 0){
            return new NextResponse("No consumables found",{
                status: 404,
            });
        }
        return new NextResponse(JSON.stringify(consumables),{
            status: 200,
        });
    }catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify(err), {
            status: 500,
        })
    }
}


export async function POST(request: NextRequest) {
    try{
        const json = await request.json();
        console.log({ DataRequest: json});

        const existingConsumable = await Consumable.findOne({
            $or: [{ name: json.name}, { description: json.description}],
        });

        if (existingConsumable){
            throw new Error("A consumable with the same name or description already exists.");

        }

        const data = new Consumable(json);
        console.log({ ConsumableCreated: data});

        const consumable = await data.save();

        return new NextResponse(
            JSON.stringify(consumable),{
                status: 200,
                headers: { "Content-Type": "application/json"},
            });

    }catch (err) {
        console.log({ err });

        const error = {
            message: "Error Saving Consumables",
            error: err,
        };
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}