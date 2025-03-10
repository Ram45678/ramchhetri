
import { toast } from "sonner";

type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

export const useToast = () => {
  return {
    toast: ({ title, description, variant }: ToastProps) => {
      if (variant === "destructive") {
        return toast.error(title, {
          description,
        });
      }
      
      return toast.success(title, {
          description,
      });
    },
    // Original toast function still available
    dismiss: () => toast.dismiss(),
  };
};

export { toast };
