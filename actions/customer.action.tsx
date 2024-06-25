"use server";

import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "form-data.json");

export const saveFormData = async (formData: any) => {
  try {
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
