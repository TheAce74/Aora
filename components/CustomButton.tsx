import { cn } from "@/lib/utils";
import { ButtonProps, Text, TouchableOpacity } from "react-native";

type CustomButtonProps = ButtonProps & {
  isLoading?: boolean;
  titleClassName?: string;
  containerClassName?: string;
};

export default function CustomButton({
  title,
  titleClassName,
  containerClassName,
  isLoading,
  ...props
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      className={cn(
        "items-center justify-center rounded-xl bg-secondary px-8 py-4 disabled:opacity-50",
        containerClassName,
      )}
      activeOpacity={0.7}
      disabled={isLoading}
      {...props}
    >
      <Text
        className={cn("font-psemibold text-lg text-primary", titleClassName)}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
