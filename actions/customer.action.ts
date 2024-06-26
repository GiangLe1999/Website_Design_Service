"use server";

import sendEmail from "@/lib/send-mail";

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

    const res = await fetch(process.env.WEB_APP_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    return result.result;
  } catch (error) {
    console.error("Error saving data:", error);
    throw new Error("Could not save data.");
  }
};
