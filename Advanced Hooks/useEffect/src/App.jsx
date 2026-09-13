import { useEffect } from "react";
import { ChatRoom } from "./ChatRoom";

export function App() {
  return (
    <div>
      <h1>Chat Rooms</h1>
      <ChatRoom url="https://example.com/room1" displayName="Room 1" />
      <ChatRoom url="https://example.com/room2" displayName="Room 2" />
      <ChatRoom url="https://example.com/room3" displayName="Room 3" />
    </div>
  );
}
