import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const config = createConfig({
  chains: [mainnet, sepolia],
  //   connectors: [
  //     injected(),
  //     coinbaseWallet({ appName: "Create Wagmi" }),
  //     walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }),
  //   ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
