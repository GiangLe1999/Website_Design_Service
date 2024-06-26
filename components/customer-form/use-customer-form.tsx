"use client";

import { saveFormData } from "@/actions/customer.action";
import { formatDateForContactForm, zPhoneNumber } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const useCustomerForm = () => {
  const t = useTranslations("home_page.section_16");
  const [openSuccessfulDialog, setSucessfulOpenDialog] = useState(false);
  const [openFailedDialog, setOpenFailedDialog] = useState(false);
  const [isPending, startTransition] = useTransition();

  const ContactFormSchema = z.object({
    full_name: z.string().min(2, {
      message: t("field_1.error"),
    }),
    tel: zPhoneNumber(t("field_2.error")),
    email: z.string().email({ message: t("field_3.error") }),
    message: z.string().optional(),
    type: z.string(),
  });

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      full_name: "",
      tel: "",
      email: "",
      message: "",
      type: "basic",
    },
  });

  async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    startTransition(async () => {
      try {
        const result = await saveFormData({
          ...values,
          created_at: formatDateForContactForm(new Date()),
        });
        if (result === "success") {
          setSucessfulOpenDialog(true);
          form.reset();
        } else {
          throw new Error("Error saving form data");
        }
      } catch (error) {
        console.error("Error saving form data:", error);
        setOpenFailedDialog(true);
      }
    });
  }

  return {
    t,
    onSubmit,
    openSuccessfulDialog,
    setSucessfulOpenDialog,
    openFailedDialog,
    setOpenFailedDialog,
    isPending,
    form,
  };
};

export default useCustomerForm;
