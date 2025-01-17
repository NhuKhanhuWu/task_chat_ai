/** @format */

import { useEffect, useState } from "react";

function SystemMessage({ message }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (message) {
      setHidden(false); // Show message

      const timer = setTimeout(() => {
        setHidden(true); // Hide after 5 seconds
      }, 5000);

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [message]);

  if (hidden || !message) return null; // Don't render if hidden

  const style = {
    transform: "translate(-50%, 1.5rem)",
  };

  return (
    <div
      style={style}
      className={`${
        message?.type === "error" ? "bg-red-300" : "bg-green-300"
      } fixed top-0 left-1/2 py-3 px-6 text-xl rounded-2xl flex items-center gap-5`}>
      <p>{message?.message}</p>
      <span
        className="material-symbols-outlined h-fit cursor-pointer"
        onClick={() => setHidden(true)}>
        close
      </span>
    </div>
  );
}

export default SystemMessage;
