import { FC } from "react";
import useCustomerForm from "./use-customer-form";

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

import SubmitButton from "../submit-button";
import FailedDialog from "./failed-dialog";
import SuccessfulDialog from "./successful-dialog";

interface Props {}

const Section16Form: FC<Props> = (props): JSX.Element => {
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

export default Section16Form;
