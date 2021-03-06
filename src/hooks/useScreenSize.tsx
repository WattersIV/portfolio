import React from "react";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

export function useScreenSize() {
  const theme = useTheme();
  const isLarge = !useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = !useMediaQuery(theme.breakpoints.up("md"));
  const isSmall = !useMediaQuery(theme.breakpoints.up("sm"));
  const isTiny = !useMediaQuery(theme.breakpoints.up("xs"));

  return { isMobile, isSmall, isTiny, isLarge };
}