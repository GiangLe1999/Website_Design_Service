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
import { useTranslations } from "next-intl";
interface Props {
  openSuccessfulDialog: boolean;
  setSucessfulOpenDialog: (openSuccessfulDialog: boolean) => void;
}

const SuccessfulDialog: FC<Props> = ({
  openSuccessfulDialog,
  setSucessfulOpenDialog,
}): JSX.Element => {
  const t = useTranslations("home_page.section_16");
  const t_btn = useTranslations("common.button");

  return (
    <Dialog open={openSuccessfulDialog} onOpenChange={setSucessfulOpenDialog}>
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
            <Button type="button" className="text-white ml-auto !bg-green-600">
              {t_btn("close")}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessfulDialog;
