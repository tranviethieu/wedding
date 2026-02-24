import { useState } from "react";
import { Gift, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const BANK_INFO = {
  bankName: "Techcombank",
  accountNumber: "83197700412003",
  accountHolder: "DO THI PHUONG",
};

const GiftBox = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(BANK_INFO.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Fixed gift button */}
      <TooltipProvider>
        <Tooltip defaultOpen open>
          <TooltipTrigger asChild>
            <motion.button
              onClick={() => setOpen(true)}
              className="fixed bottom-6 left-6 z-50 w-9 h-9 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
              aria-label="Mừng cưới"
            >
              <Gift className="w-5 h-5" />
            </motion.button>
          </TooltipTrigger>
          <TooltipContent side="right" className="font-body">
            Nhấn để tặng quà 🎁
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-card border-gold-light max-w-sm mx-auto rounded-2xl">
          <DialogHeader className="text-center items-center">
            <DialogTitle className="font-script text-gold text-4xl">
              Mừng Cưới
            </DialogTitle>
            <DialogDescription className="font-body text-muted-foreground text-base mt-2">
              Cảm ơn bạn đã gửi lời chúc và món quà đến đôi uyên ương!
            </DialogDescription>
          </DialogHeader>

          {/* QR Code placeholder */}
          <div className="flex justify-center my-4">
            <div className="w-48 h-48 bg-[#fff] border-2 border-gold-light rounded-xl flex items-center justify-center p-3">
              <img
                src={`https://img.vietqr.io/image/${BANK_INFO.bankName}-${BANK_INFO.accountNumber}-compact.png?accountName=${encodeURIComponent(BANK_INFO.accountHolder)}`}
                alt="QR Code chuyển khoản"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Bank info */}
          <div className="space-y-2 text-center font-serif">
            <p className="text-muted-foreground text-md">
              {BANK_INFO.bankName}
            </p>
            <p className="text-foreground text-lg font-number tracking-wider">
              {BANK_INFO.accountNumber}
            </p>
            <p className="text-muted-foreground text-md">
              {BANK_INFO.accountHolder}
            </p>
          </div>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="mt-2 mx-auto flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm hover:bg-primary/90 transition-colors"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Đã copy
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy số tài khoản
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GiftBox;
