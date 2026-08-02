"use client";

import { useEffect } from "react";

import { usePortfolioTracker } from "@/hooks/portfolio/usePortfolioTracker";

export default function PortfolioTracker({
  slug,
  portfolio,
}) {
  const { trackPortfolio } =
    usePortfolioTracker();

  useEffect(() => {
    return trackPortfolio(
      slug,
      portfolio,
    );
  }, [
    slug,
    portfolio,
    trackPortfolio,
  ]);

  return null;
}