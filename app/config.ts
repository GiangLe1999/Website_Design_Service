import { Pathnames } from "next-intl/navigation";

export const defaultLocale = "vi" as const;
export const locales = ["vi", "en"] as const;

export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
