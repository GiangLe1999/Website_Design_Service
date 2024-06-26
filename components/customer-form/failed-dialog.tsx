import { useTranslations } from "next-intl";
import { FC } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  openFailedDialog: boolean;
  setOpenFailedDialog: (openFailedDialog: boolean) => void;
}

const FailedDialog: FC<Props> = ({
  openFailedDialog,
  setOpenFailedDialog,
}): JSX.Element => {
  const t = useTranslations("home_page.section_16");
  const t_btn = useTranslations("common.button");

  return (
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
  );
};

export default FailedDialog;
