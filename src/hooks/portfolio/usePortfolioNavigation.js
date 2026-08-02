"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function usePortfolioNavigation() {
  const router = useRouter();

  const saveDraft = async (saveFunction, data) => {
    const result = await saveFunction(data);

    if (!result.success) {
      toast.error(result.data.message);
      return false;
    }

    toast.success(result.data.message);
    return true;
  };

  const saveAndContinue = async (
    saveFunction,
    data,
    nextRoute
  ) => {
    const success = await saveDraft(saveFunction, data);

    if (success) {
      router.push(nextRoute);
    }
  };

  const goBack = (route) => {
    router.push(route);
  };

  return {
    saveDraft,
    saveAndContinue,
    goBack,
  };
}