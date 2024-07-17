import { FC } from 'react';
import useCustomerForm from './use-customer-form';

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

import SubmitButton from '../submit-button';
import Reveal from '../reveal';

import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
const FailedDialog = dynamic(() => import('./failed-dialog'), { ssr: false });
const SuccessfulDialog = dynamic(() => import('./successful-dialog'), { ssr: false });

interface Props {
  type: 'type_1' | 'type_2';
}

const SectionForm: FC<Props> = ({ type }): JSX.Element => {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Reveal>
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className={cn(
                          'h-[54px] rounded-[27px] px-[30px]',
                          type === 'type_2' && 'border-[#006f8b69] focus-visible:border-[#006f8be5]'
                        )}
                        placeholder={t('field_1.name')}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Reveal>

            <Reveal>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className={cn(
                          'h-[54px] rounded-[27px] px-[30px]',
                          type === 'type_2' && 'border-[#006f8b69] focus-visible:border-[#006f8be5]'
                        )}
                        type="email"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Reveal>

            <Reveal>
              <FormField
                control={form.control}
                name="tel"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className={cn(
                          'h-[54px] rounded-[27px] px-[30px]',
                          type === 'type_2' && 'border-[#006f8b69] focus-visible:border-[#006f8be5]'
                        )}
                        type="tel"
                        placeholder="+84962334807"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Reveal>

            <Reveal>
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger
                          aria-label="Choose a type"
                          className={cn(
                            'h-[54px] rounded-[27px] px-[30px] z-[10]',
                            type === 'type_2' &&
                              'border-[#006f8b69] focus:border-[#006f8be5] focus-visible:border-[#006f8be5]'
                          )}
                        >
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="basic">{t('field_4.option_1')}</SelectItem>
                        <SelectItem value="premium">{t('field_4.option_2')}</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </Reveal>
          </div>

          <Reveal>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder={t('field_5.placeholder')}
                      className={cn(
                        'rounded-[27px] px-[30px] py-5',
                        type === 'type_2' && 'border-[#006f8b69] focus-visible:border-[#006f8be5]'
                      )}
                      {...field}
                      rows={5}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Reveal>

          <Reveal customClassname="text-center">
            <SubmitButton
              isLoading={isPending}
              className="my-4"
              type_1={type === 'type_1'}
              type_2={type === 'type_2'}
            />
          </Reveal>
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

export default SectionForm;
