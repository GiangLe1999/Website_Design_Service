"use server";

import sendEmail from "@/lib/send-mail";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "customer-forms-data.json");

export const saveFormData = async (formData: any) => {
  try {
    await sendEmail(
      process.env.SMTP_MAIL_TO as string,
      "KH RiverLee gửi form liên hệ",
      `<h1>Khách hàng gửi form liên hệ tại website ${
        process.env.NEXT_PUBLIC_BASE_URL
      }:</h1>
      <ul>
        <li>Họ và tên: <b>${formData.full_name}</b></li>
        <li>SĐT: <b>${formData.tel}</b></li>
        <li>Email: <b>${formData.email}</b></li>
        <li>Gói thiết kê: <b>${
          formData.type === "basic" ? "Gói Basic" : "Gói Premium"
        }</b></li>
        <li>Tin nhắn: <b>${formData.message || "Không có nội dung"}</b></li>
        <li>Thời gian gửi form: <b>${formData.created_at}</b></li>
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

    // Push formData to existingData
    existingData.push(formData);

    // Write updated data back to the file
    fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

    console.log("Data saved successfully.");
  } catch (error) {
    console.error("Error saving data:", error);
    throw new Error("Could not save data.");
  }
};
