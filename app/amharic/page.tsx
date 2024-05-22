import TBA from "@/components/TBA";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "More about TB",
};

const TuberCulosis = () => {
  return (
    <Suspense
      fallback={<section className="flex flex-col flex-1 p-6 m-6"></section>}
    >
      <TBA />
    </Suspense>
  );
};
export default TuberCulosis;
