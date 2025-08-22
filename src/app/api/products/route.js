import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    const result = await dbConnect("products").insertOne(data);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const products = await dbConnect("products").find().toArray();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
