"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useTranslations } from "next-intl";
import { FC, useState, useTransition } from "react";
import CustomHeading2 from "../custom-heading-2";
import ContentContainer from "../content-container";
import { formatDateForContactForm, zPhoneNumber } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { ContactInfo } from "./section-11";
import { saveFormData } from "@/actions/customer.action";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import SubmitButton from "../submit-button";

interface Props {}

const Section16: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("home_page.section_16");
  const t_id = useTranslations("home_page.section_ids");
  const t_btn = useTranslations("common.button");
  const [openDialog, setOpenDialog] = useState(false);
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
        await saveFormData({
          ...values,
          created_at: formatDateForContactForm(new Date()),
        });
        setOpenDialog(true);
      } catch (error) {
        console.error("Error saving form data:", error);
        setOpenFailedDialog(true);
      }
    });
  }

  return (
    <>
      <section id={t_id("quote")} className="relative bg-white pb-[150px]">
        <ContentContainer
          maxWidth="max-w-[1000px]"
          customClassName="pt-[95px] pb-10 px-[100px] rounded-[25px] bg-white shadow-[0_0_40px_rgba(0,50,82,0.09)]"
        >
          <div className="mb-10">
            <CustomHeading2 customClassname="text-center" t={t} type_1 />
            <p className="text-center mb-2">{t("sub_heading_1")}</p>
            <p className="text-center mb-2">{t("sub_heading_2")}</p>

            <ContactInfo isSection16 />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="h-[54px] rounded-[27px] px-[30px]"
                          placeholder={t("field_1.name")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="h-[54px] rounded-[27px] px-[30px]"
                          type="email"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tel"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="h-[54px] rounded-[27px] px-[30px]"
                          type="tel"
                          placeholder="+84962334807"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-[54px] rounded-[27px] px-[30px] z-[10]">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="basic">
                            {t("field_4.option_1")}
                          </SelectItem>
                          <SelectItem value="premium">
                            {t("field_4.option_2")}
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder={t("field_5.placeholder")}
                        className="rounded-[27px] px-[30px] py-5"
                        {...field}
                        rows={5}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="text-center">
                <SubmitButton isLoading={isPending} type_1 className="my-4" />
              </div>
            </form>
          </Form>
        </ContentContainer>
      </section>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-green-600 mb-2 font-bold">
              {t("submit_successfully.heading")}
            </DialogTitle>
            <DialogDescription>
              {t("submit_successfully.description")}
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2"></div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                type="button"
                className="text-white ml-auto !bg-green-600"
              >
                {t_btn("close")}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={openFailedDialog} onOpenChange={setOpenFailedDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-500 mb-2 font-bold">
              {t("submit_failed.heading")}
            </DialogTitle>
            <DialogDescription>
              {t("submit_failed.description")}
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2"></div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" className="text-white ml-auto !bg-red-600">
                {t_btn("close")}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Section16;
