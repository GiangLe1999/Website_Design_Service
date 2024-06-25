import { NextResponse } from "next/server";
import sendEmail from "@/lib/utils";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "form-data.json");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await sendEmail(
      process.env.SMTP_MAIL_TO as string,
      "KH tại RiverLee gửi form liên hệ",
      `<h1>Khách hàng gửi form liên hệ tại website ${process.env.NEXT_PUBLIC_BASE_URL}:</h1>
      <ul>
        <li>Họ và tên: <b>${body.full_name}</b></li>
        <li>SĐT: <b>${body.tel}</b></li>
        <li>Email: <b>${body.email}</b></li>
        <li>Gói thiết kê: <b>${body.type}</b></li>
        <li>Tin nhắn: <b>${body.mesage}</b></li>
        <li>Thời gian gửi form: <b>${body.created_at}</b></li>
      </ul>
      `
    );

    let existingData = [];

    // Check if the file exists
    if (fs.existsSync(dataFilePath)) {
      // Read the file content
      const fileContent = fs.readFileSync(dataFilePath, "utf-8").trim();

      // Parse the JSON content if it's not empty
      if (fileContent !== "") {
        existingData = JSON.parse(fileContent);
      }
    }

    // Push body to existingData
    existingData.push(body);

    // Write updated data back to the file
    fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json(
      {
        status: 200,
        msg: "Add new customer information successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: 500, error: "Internal server error", msg: error },
      { status: 500 }
    );
  }
}
