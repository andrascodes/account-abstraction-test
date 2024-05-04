"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({
    name: ensName ?? "",
    query: { enabled: Boolean(ensName) },
  });

  if (!address) {
    return (
      <div>
        {connectors.map((connector) => (
          <Button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </Button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  return (
    <div>
      {ensAvatar && (
        <Image src={ensAvatar} alt="ENS Avatar" width={50} height={50} />
      )}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <Button onClick={() => disconnect()}>Disconnect</Button>
    </div>
  );
}
