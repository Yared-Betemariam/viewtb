import TB from "@/components/TB";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "More about TB",
};

const TuberCulosis = () => {
  return (
    <Suspense
      fallback={
        <section className="flex flex-col flex-1 p-6 m-6">
          <h1 className="text-3xl">Loading...</h1>
          <p className="opacity-70">Getting Things Ready.</p>
        </section>
      }
    >
      <TB />
    </Suspense>
  );
};
export default TuberCulosis;
