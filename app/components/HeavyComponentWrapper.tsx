"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const HeavyComponentWrapper = () => {
  const [showHeavy, setShowHeavy] = useState(false);
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setShowHeavy((prev) => !prev)}
      >
        Show Heavy Component
      </button>
      {showHeavy && <HeavyComponent />}
    </div>
  );
};

export default HeavyComponentWrapper;
