"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function ProgressBarClient() {
  return (
    <ProgressBar
      height="3px"
      color="var(--accent)"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
