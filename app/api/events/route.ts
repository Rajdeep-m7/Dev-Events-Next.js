import Event from "@/database/event.model";
import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const createdevent = await Event.create(body);

    return NextResponse.json({ event: createdevent }, { status: 201 });

  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}