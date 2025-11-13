export const server = "http://localhost:8000/api/v2";
export const backend_url="http://localhost:8000/"

// Socket server (used by chat/inbox). Prefer env override if provided by Vite.
export const socket_server = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_SOCKET_URL) || "http://localhost:4000";

