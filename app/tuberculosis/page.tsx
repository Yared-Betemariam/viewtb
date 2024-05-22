import TB from "@/components/TB";
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
      <TB />
    </Suspense>
  );
};
export default TuberCulosis;
