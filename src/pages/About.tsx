import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-4">About TON Tip DApp</h1>
      <p className="max-w-xl text-center">
        This dApp was built for the IdeaTON2 Hackathon. It allows users to connect
        their TON wallet and send small tips with messages on the TON blockchain.
      </p>
    </div>
  );
}
