import dbConnect from "@/app/utils/DatabaseConnection";
import Consumable from "@/app/models/consumable";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

interface params extends Request{
    params:{
        id: string;
    };
}


export async function GET(request: Request, params: params){

    const id = params.params.id;

    try{
        const consumable = await Consumable.findById(id);
        if(!consumable){
            return new NextResponse("Consumable not found",{
                status: 404,
            }); 
        }
        return new NextResponse(JSON.stringify(consumable),{
            status: 200,
        });
    }catch (err){
        console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
}
}


export async function PUT(request:Request, params: params) {
    const id = params.params.id;
    const data = await request.json();

    try{
        const consumable = await Consumable.findByIdAndUpdate(id, data, { new: true});
        if (!consumable) {
            return new NextResponse("Consumable not found",{
                status: 404,
            });
        } 
        return new NextResponse(JSON.stringify(consumable),{
            status: 200,
        });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify(err), {
          status: 500,
        });
      }
}


export async function DELETE(request: Request, params:params) {
    const id = params.params.id;

    try{
        const consumable = await Consumable.findByIdAndDelete(id);
        if (!consumable){
            return new NextResponse("Consumable not found",{
                status:404,
            });
        }
        return new NextResponse(JSON.stringify(consumable),{
            status: 200,
        });
    }catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }

}