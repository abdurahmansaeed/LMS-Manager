import { NextResponse } from "next/server";

export function GET(request) {
  const user = [
    {
      name: " Abdurahman Saeed",
      phone: "2626",
      coure: "Java",
    },
    {
      name: " Abdurahman Saeed",
      phone: "2525",
      coure: "JavaScript",
    },
    {
      name: " Abdurahman Saeed",
      phone: "2727",
      coure: "Cpp",
    },
  ];
  return NextResponse.json(user);
}

export function POST() {}

export function PUT() {}

export function DELETE(request) {
  console.log("delete api called");
  return NextResponse.json(
    {
      message: "deleted!!",
      status: true,
    },
    { status: 201, statusText: "hey text changed" }
  );
}
