'use client';
import { useTranslations } from 'next-intl';
import { FC, useMemo } from 'react';
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
import { LoaderCircleIcon } from 'lucide-react';
import useCustomerForm from '../customer-form/use-customer-form';

import dynamic from 'next/dynamic';
import { usePathname } from '@/app/navigation';
import { cn } from '@/lib/utils';
const FailedDialog = dynamic(() => import('../customer-form/failed-dialog'), { ssr: false });
const SuccessfulDialog = dynamic(() => import('../customer-form/successful-dialog'), {
  ssr: false,
});

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

  const location = usePathname();
  const type = useMemo(() => {
    switch (location) {
      case '/':
        return 'type_1';
      case '/thiet-ke-website-bat-dong-san':
        return 'type_2';
      case '/thiet-ke-website-noi-that':
        return 'type_3';
      case '/thiet-ke-website-ban-hang':
        return 'type_4';
      case '/thiet-ke-website-du-lich':
        return 'type_5';
      case '/thiet-ke-website-doanh-nghiep':
        return 'type_6';
      case '/blog':
        return 'type_7';
      case '/lien-he':
        return 'type_8';
      default:
        return 'type_1';
    }
  }, [location]);

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
                      className="h-[40px] rounded-md border-transparent focus-visible:border-transparent placeholder:text-xs"
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
                      className="h-[40px] rounded-md border-transparent focus-visible:border-transparent placeholder:text-xs"
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
                      className="h-[40px] rounded-md border-transparent focus-visible:border-transparent placeholder:text-xs"
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
                        className="h-[40px] text-xs rounded-md z-[10] border-transparent focus-visible:border-transparent"
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
                    className="rounded-md border-transparent focus-visible:border-transparent placeholder:text-xs"
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
              className={cn(
                'text-white w-full disabled:opacity-50',
                isPending && 'cursor-not-allowed',
                type === 'type_1'
                  ? 'bg-secondary hover:bg-secondary/90'
                  : type === 'type_2'
                  ? 'bg-[#007789] hover:bg-[#007789]/90'
                  : type === 'type_3'
                  ? 'bg-[#dfa041] hover:bg-[#dfa041]/90'
                  : type === 'type_4'
                  ? 'bg-[#FF293F] hover:bg-[#FF293F]/90'
                  : type === 'type_5'
                  ? 'bg-[#024C7D] hover:bg-[#024C7D]/90'
                  : ''
              )}
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
