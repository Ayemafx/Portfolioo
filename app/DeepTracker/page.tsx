import type { Metadata } from "next";
import DeepTrackerCaseStudy from "@/components/deeptracker/DeepTrackerCaseStudy";

export const metadata: Metadata = {
  title: "DeepTracker Case Study · Ayema Faisal",
  description:
    "Case study for DeepTracker, a multi-chain crypto portfolio and position tracker. Project management and product design, delivered in one month.",
};

export default function DeepTrackerPage() {
  return <DeepTrackerCaseStudy />;
}
