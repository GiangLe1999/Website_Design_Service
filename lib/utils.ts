import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import parsePhoneNumber from "libphonenumber-js";
import * as z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const zPhoneNumber = (errorMsg: string) =>
  z.string().transform((value, ctx) => {
    const phoneNumber = parsePhoneNumber(value, {
      defaultCountry: "VI",
    });

    if (!phoneNumber?.isValid()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: errorMsg,
      });
      return z.NEVER;
    }

    return phoneNumber.formatInternational();
  });

export const formatDateForContactForm = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${hours}:${minutes}, ${day}/${month}/${year}`;
};
