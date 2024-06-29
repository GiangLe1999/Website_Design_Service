'use client';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '../ui/input';

import { Button } from '../ui/button';
import SuccessfulDialog from '../customer-form/successful-dialog';
import FailedDialog from '../customer-form/failed-dialog';
import useCustomerForm from '../customer-form/use-customer-form';
import { LoaderCircleIcon } from 'lucide-react';

interface Props {}

const FooterForm: FC<Props> = (props): JSX.Element => {
  const t_btn = useTranslations('common.button');
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 rounded-md mt-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="h-[40px] rounded-md focus:border-none placeholder:text-xs"
                      placeholder={t('field_1.name')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
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
                      className="h-[40px] rounded-md focus:border-none placeholder:text-xs"
                      type="email"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
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
                      className="h-[40px] rounded-md focus:border-none placeholder:text-xs"
                      type="tel"
                      placeholder="+84962334807"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger
                        aria-label="Choose a type"
                        className="h-[40px] text-xs rounded-md z-[10] focus:border-none"
                      >
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="basic">{t('field_4.option_1')}</SelectItem>
                      <SelectItem value="premium">{t('field_4.option_2')}</SelectItem>
                    </SelectContent>
                  </Select>
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
                    placeholder={t('field_5.placeholder')}
                    className="rounded-md focus:border-none placeholder:text-xs"
                    {...field}
                    rows={7}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="text-center">
            <Button
              type="submit"
              disabled={isPending}
              variant="secondary"
              className="text-white w-full disabled:opacity-50"
            >
              <>
                {isPending ? (
                  <>
                    {t_btn('loading')}
                    <LoaderCircleIcon className="w-5 h-5 ml-2 animate-spin" />
                  </>
                ) : (
                  t_btn('submit')
                )}
              </>
            </Button>
          </div>
        </form>
      </Form>

      <SuccessfulDialog
        openSuccessfulDialog={openSuccessfulDialog}
        setSucessfulOpenDialog={setSucessfulOpenDialog}
      />

      <FailedDialog openFailedDialog={openFailedDialog} setOpenFailedDialog={setOpenFailedDialog} />
    </>
  );
};

export default FooterForm;
