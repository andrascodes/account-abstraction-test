"use client";

import { queryClient } from "@/config/reactQuery";
import { config } from "@/config/wagmi";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { WagmiProvider, WagmiProviderProps } from "wagmi";

export function Providers({
  children,
  initialState,
}: PropsWithChildren<Pick<WagmiProviderProps, "initialState">>) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
