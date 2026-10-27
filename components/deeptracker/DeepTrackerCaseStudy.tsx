"use client";

import { useEffect, useRef } from "react";
import "./deeptracker.css";
import { deepTrackerMarkup } from "./markup";

type Box = [number, number, number, number, string] | ["pin", number, number, number];

/* Wireframes are drawn from the real screens' pixel coordinates, so they line up under the slider. */
const side = (o: Box[], H: number, nav: number[], active: number, sub?: [number, number]) => {
  o.push([0, 0, 268, H, "side"], [20, 32, 228, 62, "dark"], [20, 103, 243, 188, "out"], [39, 120, 126, 134, "ln"], [39, 150, 180, 170, "blk"]);
  nav.forEach((y, i) => {
    o.push([31, y - 9, 49, y + 9, "blk"], [61, y - 6, 61 + (70 + ((i * 37) % 60)), y + 6, i === active ? "acc" : "ln"]);
    if (i === active) o.push([20, y - 18, 247, y + 18, "accs"]);
  });
  if (sub) o.push([20, sub[0], 247, sub[1], "out"]);
  o.push([31, H - 55, 49, H - 37, "blk"], [61, H - 52, 160, H - 40, "ln"]);
};
const top = (o: Box[]) => {
  o.push([268, 68, 1440, 70, "blk"], [283, 15, 522, 52, "out"], [1043, 15, 1230, 52, "out"], [1239, 15, 1277, 52, "out"], [1287, 15, 1424, 52, "out"], [1295, 20, 1322, 47, "blk"], [1330, 25, 1400, 36, "ln"]);
};

function positionTracker(H = 1085) {
  const o: Box[] = [];
  side(o, H, [223, 275, 327, 379, 431, 483, 535], 1);
  top(o);
  o.push([296, 104, 498, 118, "ln"], [296, 140, 512, 172, "dark"], [1240, 117, 1411, 154, "acc"]);
  o.push([290, 209, 479, 246, "out"], [495, 209, 735, 246, "out"], [751, 209, 986, 246, "out"]);
  o.push([290, 283, 391, 298, "acc"], [442, 283, 563, 298, "ln"], [614, 283, 748, 298, "ln"], [268, 311, 1440, 313, "blk"], [287, 308, 400, 313, "acc"]);
  [[290, 558], [567, 836], [845, 1143], [1153, 1421]].forEach(([a, b]) => {
    o.push([a, 341, b, 551, "out"], [a + 15, 360, a + 175, 382, "dark"], [a + 15, 392, a + 115, 410, "ln"], [a + 15, 433, b - 15, 435, "blk"], [a + 15, 456, a + 85, 468, "ln"], [a + 15, 479, a + 125, 499, "blk"], [a + 158, 456, a + 225, 468, "ln"], [a + 158, 479, a + 255, 499, "blk"]);
  });
  o.push([290, 576, 1421, 952, "out"], [313, 600, 1398, 637, "out"]);
  [324, 496, 673, 836, 1008, 1298].forEach((x) => o.push([x, 612, x + 70, 625, "ln"]));
  [654, 727, 800, 873].forEach((y) => {
    o.push([313, y, 1398, y + 56, "lite"], [321, y + 8, 360, y + 47, "circ"], [370, y + 13, 428, y + 27, "ln"], [370, y + 33, 394, y + 42, "ln"]);
    [496, 669, 842, 1015].forEach((x) => o.push([x, y + 22, x + 72, y + 34, "ln"]));
    o.push([1250, y + 9, 1340, y + 47, "pill"], [1358, y + 16, 1365, y + 40, "blk"]);
  });
  o.push([1370, 992, 1419, 1041, "out"]);
  return o;
}

const builders: Record<string, () => { W: number; H: number; o: Box[] }> = {
  pt: () => {
    const o = positionTracker();
    o.push(["pin", 290, 197, 1], ["pin", 290, 330, 2], ["pin", 1240, 642, 3], ["pin", 1360, 980, 4]);
    return { W: 1440, H: 1085, o };
  },
  tu: () => {
    const o: Box[] = [];
    const H = 1177;
    side(o, H, [223, 275, 327, 375, 422, 475, 527, 579, 631], 4, [357, 440]);
    top(o);
    o.push([290, 104, 620, 118, "ln"], [290, 140, 634, 172, "dark"], [290, 203, 1419, 555, "out"], [306, 230, 614, 252, "dark"]);
    [[306, 846], [863, 1403]].forEach(([a, b]) =>
      [269, 349, 429].forEach((y) =>
        o.push([a, y, b, y + 63, "lite"], [a + 10, y + 10, a + 54, y + 54, "blk"], [a + 65, y + 14, a + 140, y + 30, "ln"], [a + 65, y + 38, a + 105, y + 47, "ln"], [a + 221, y + 10, a + 370, y + 53, "blk"], [b - 62, y + 14, b - 10, y + 29, "ln"], [b - 48, y + 34, b - 10, y + 48, "ln"])
      )
    );
    o.push([306, 509, 331, 533, "out"], [337, 509, 361, 533, "out"]);
    o.push([290, 580, 1419, 1116, "out"], [313, 604, 600, 641, "out"], [330, 614, 400, 632, "circ"], [414, 616, 550, 630, "ln"], [616, 613, 646, 633, "acc"], [652, 616, 752, 630, "ln"], [313, 666, 1403, 703, "out"]);
    [332, 516, 746, 971, 1226].forEach((x) => o.push([x, 678, x + 90, 691, "ln"]));
    [731, 852, 973].forEach((y) =>
      o.push([316, y, 1400, y + 109, "lite"], [332, y + 33, 371, y + 72, "circ"], [381, y + 40, 430, y + 54, "ln"], [381, y + 60, 404, y + 69, "ln"], [557, y + 37, 597, y + 50, "ln"], [546, y + 57, 607, y + 70, "acc"], [777, y + 46, 817, y + 59, "ln"], [1017, y + 46, 1086, y + 59, "ln"], [1229, y + 46, 1289, y + 59, "ln"], [1305, y + 50, 1378, y + 54, "acc"])
    );
    o.push(["pin", 290, 192, 1], ["pin", 606, 600, 2], ["pin", 1380, 720, 3]);
    return { W: 1440, H, o };
  },
  wd: () => {
    const o = positionTracker();
    o.push([0, 0, 1440, 1085, "dim"], [379, 318, 1061, 767, "modal"]);
    o.push([401, 350, 589, 371, "dark"], [1004, 341, 1039, 376, "circ"], [401, 403, 433, 417, "ln"], [401, 428, 456, 456, "dark"], [944, 403, 1038, 417, "ln"], [937, 428, 1038, 456, "dark"]);
    o.push([401, 476, 1039, 568, "lite"], [418, 486, 514, 497, "ln"], [418, 510, 489, 536, "dark"], [418, 546, 478, 557, "ln"], [918, 491, 1021, 527, "pill"], [976, 539, 1022, 550, "ln"]);
    o.push([401, 589, 458, 601, "ln"], [618, 589, 688, 601, "ln"], [835, 589, 865, 601, "ln"], [401, 609, 604, 641, "out"], [618, 609, 821, 641, "out"], [835, 609, 1038, 641, "out"]);
    o.push([403, 660, 423, 680, "out"], [435, 663, 780, 677, "ln"], [401, 705, 563, 743, "out"], [574, 705, 1038, 743, "dark"]);
    o.push(["pin", 1020, 478, 1], ["pin", 388, 596, 2], ["pin", 388, 656, 3]);
    return { W: 1440, H: 1085, o };
  },
};

export default function DeepTrackerCaseStudy() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const cleanups: (() => void)[] = [];

    // wireframe / final sliders
    el.querySelectorAll<HTMLElement>(".ba").forEach((ba) => {
      const build = builders[ba.dataset.wf || ""];
      const layer = ba.querySelector<HTMLElement>(".wfl");
      const range = ba.querySelector<HTMLInputElement>("input");
      if (!build || !layer || !range) return;
      const { W, H, o } = build();
      layer.innerHTML = o
        .map((b) => {
          if (b[0] === "pin") return `<i class="pin" style="left:${(b[1] / W) * 100}%;top:${(b[2] / H) * 100}%">${b[3]}</i>`;
          const [x1, y1, x2, y2, c] = b as [number, number, number, number, string];
          return `<i class="${c}" style="left:${(x1 / W) * 100}%;top:${(y1 / H) * 100}%;width:${((x2 - x1) / W) * 100}%;height:${((y2 - y1) / H) * 100}%"></i>`;
        })
        .join("");
      const set = () => ba.style.setProperty("--p", range.value + "%");
      range.addEventListener("input", set);
      set();
      cleanups.push(() => range.removeEventListener("input", set));
    });

    // lightbox
    const lb = el.querySelector<HTMLElement>("#lb");
    const img = el.querySelector<HTMLImageElement>("#lbImg");
    const cap = el.querySelector<HTMLElement>("#lbCap");
    const closeBtn = el.querySelector<HTMLButtonElement>("#lbClose");
    let last: HTMLElement | null = null;
    const close = () => {
      if (!lb) return;
      lb.hidden = true;
      last?.focus();
    };
    el.querySelectorAll<HTMLButtonElement>(".shot button").forEach((b) => {
      const open = () => {
        const i = b.querySelector("img");
        if (!lb || !img || !cap || !i) return;
        last = b;
        img.src = i.src;
        img.alt = i.alt;
        cap.textContent = b.dataset.cap || "";
        lb.hidden = false;
        closeBtn?.focus();
      };
      b.addEventListener("click", open);
      cleanups.push(() => b.removeEventListener("click", open));
    });
    const onBackdrop = (e: MouseEvent) => {
      if (e.target === lb) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lb && !lb.hidden) close();
    };
    closeBtn?.addEventListener("click", close);
    lb?.addEventListener("click", onBackdrop);
    document.addEventListener("keydown", onKey);
    cleanups.push(() => {
      closeBtn?.removeEventListener("click", close);
      lb?.removeEventListener("click", onBackdrop);
      document.removeEventListener("keydown", onKey);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="dt-cs" ref={root}>
      <a className="back" href="/#projects">← All projects</a>
      <div dangerouslySetInnerHTML={{ __html: deepTrackerMarkup }} />
    </div>
  );
}
