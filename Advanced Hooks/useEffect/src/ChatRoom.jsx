import { useEffect } from "react";

export function ChatRoom({ url, displayName }) {
  const logConnection = useEffectEvent((value) => {
    console.log(value, displayName);
  });

  useEffect(() => {
    const room = connectToRoom(url);

    room.onConnected(() => {
      logConnection(`Connected ${url}`);
    });

    return () => room.disconnect();
  }, [url]);
}

function connectToRoom(url) {
  return {
    onConnected: (callback) => {
      // Simulate connection
      setTimeout(() => callback(), 1000);
    },
    disconnect: () => {
      console.log(`Disconnected from ${url}`);
    },
  };
}
