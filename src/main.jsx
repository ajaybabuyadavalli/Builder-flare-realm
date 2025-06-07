import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Error handling for debugging
window.addEventListener("error", (e) => {
  console.error("Global error:", e.error);
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled promise rejection:", e.reason);
});

try {
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
} catch (error) {
  console.error("Failed to render app:", error);
  // Fallback to simple content
  document.getElementById("root").innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
      <h1>Influbazzar</h1>
      <p>Loading error occurred. Please check the console for details.</p>
      <p>Error: ${error.message}</p>
    </div>
  `;
}
