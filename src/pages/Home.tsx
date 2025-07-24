import React, { useState } from "react";
import {
  TonConnectButton,
  useTonWallet,
  useTonConnectUI,
  useTonAddress,
} from "@tonconnect/ui-react";

export default function Home() {
  const wallet = useTonWallet();
  const senderAddress = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();
  const [message, setMessage] = useState("Thanks for the awesome hackathon!");

  const sendTip = async () => {
    if (!wallet) return alert("Please connect your wallet first");

    const tx = {
      validUntil: Math.floor(Date.now() / 1000) + 60,
      messages: [
        {
          address: wallet.account.address,
          amount: "10000000",
          payload: message
            ? {
                type: "text",
                text: message,
              }
            : undefined,
        },
      ],
    };

    try {
      await tonConnectUI.sendTransaction(tx);
      alert("Tip sent!");
    } catch (err) {
      alert("Failed to send tip");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <h1 className="text-3xl font-bold mb-4">TON Tip & Chat DApp</h1>
      <TonConnectButton className="mb-4" />

      {wallet && (
        <>
          <p className="mb-2">Your Wallet: {senderAddress}</p>
          <textarea
            placeholder="Write a message to send with your tip..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 rounded w-full max-w-md mb-4"
          />
          <button
            onClick={sendTip}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Send Tip
          </button>
        </>
      )}
    </div>
  );
}