import { WagmiProvider, createConfig, fallback, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const alchemyKey = import.meta.env.VITE_ALCHEMY_API_KEY;
const publicSepoliaRpc = http("https://ethereum-sepolia-rpc.publicnode.com");
const sepoliaTransport = alchemyKey
  ? fallback([
      http(`https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`, {
        timeout: 3_000,
      }),
      publicSepoliaRpc,
    ])
  : publicSepoliaRpc;

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [sepolia],
    transports: {
      [sepolia.id]: sepoliaTransport,
    },

    // Required API Keys
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID!,

    // Required App Info
    appName: "Ens Integration",

    // Optional App Info
    appDescription: "Ens Integration",
    appUrl: "https://zk.email", // your app's url
    appIcon: "./favicon-light.svg", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
