import prisma from '@/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, feedback } = body;
    const response = await prisma.feedback.create({
      data: {
        name: name,
        feedback: feedback,
      },
    });
    if (!response) {
      return NextResponse.json(
        { error: "Can't able to post the feedback" },
        { status: 400 },
      );
    }
    return NextResponse.json(response.id, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "OOP's!,Can't able to submit the feedback",
      },
      {
        status: 500,
      },
    );
  }
}

export async function GET() {
  try {
    const res = await prisma.feedback.findMany();
    if (!res) {
      return NextResponse.json(
        {
          message: 'Fetching feedback failed',
        },
        {
          status: 400,
        },
      );
    }
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Can't able to fetch the feedback",
      },
      {
        status: 500,
      },
    );
  }
}
