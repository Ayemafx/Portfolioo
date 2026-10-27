"use client";

import { useEffect, useState } from "react";

/* Small live status under the hero text: what Ayema is designing and her local UK time. */
const NowPill = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mb-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-white/[0.1] bg-[#10132E]/80 px-4 py-2 text-xs md:text-sm text-white-100 backdrop-blur">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>
      <span>
        Currently designing <span className="text-purple">an e-commerce product</span>
      </span>
      {time && (
        <span className="text-white-200/70 tabular-nums">· {time} in the UK</span>
      )}
    </div>
  );
};

export default NowPill;
