"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";
import CustomHeading2 from "../custom-heading-2";
import ContentContainer from "../content-container";
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

import SubmitButton from "../submit-button";
import { saveFormData } from "@/actions/customer.action";
import SuccessfulDialog from "../customer-form/successful-dialog";
import FailedDialog from "../customer-form/failed-dialog";
import useCustomerForm from "../customer-form/use-customer-form";

interface Props {}

const Section16: FC<Props> = (props): JSX.Element => {
  const t_id = useTranslations("home_page.section_ids");

  const {
    t,
    onSubmit,
    openSuccessfulDialog,
    setSucessfulOpenDialog,
    openFailedDialog,
    setOpenFailedDialog,
    isPending,
    form,
  } = useCustomerForm();

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

      <SuccessfulDialog
        openSuccessfulDialog={openSuccessfulDialog}
        setSucessfulOpenDialog={setSucessfulOpenDialog}
      />

      <FailedDialog
        openFailedDialog={openFailedDialog}
        setOpenFailedDialog={setOpenFailedDialog}
      />
    </>
  );
};

export default Section16;
