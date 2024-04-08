"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { screeningTest } from "@/actions/screeningTest";

const Test = () => {
  const [text, setText] = useState<string>();
  const [res, setRes] = useState<string>();
  const makeatest = () => {
    const result = screeningTest(text as string);
    setRes(result);
  };
  return (
    <main className="flex flex-1 flex-col">
      <article className="wrapper my-12 flex gap-12 flex-col md:flex-row">
        <section className="flex-1 py-6 flex flex-col gap-3">
          <h2 className="title_1">Take A Screening Test</h2>
          <p className="p_1">
            Write down any kind of symptom you are experiancing to get a result
            on what you should do.
          </p>
          <div className="flex flex-col gap-6">
            <Textarea
              placeholder="I cough very ofter"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="text-base border-2 border-sky-700/40 border-b-[3px] rounded-none"
            />
            <Button
              disabled={text === undefined || text.length <= 0}
              onClick={makeatest}
              size={"lg"}
              className="mr-auto"
            >
              Get Analysis
            </Button>
          </div>
        </section>
        <section className="bg-sky-200/15 border md:w-[40%] flex flex-col gap-3 border-gray-900/40 px-12 py-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold">You Test Resutls</h3>
          {res ? (
            <span>{res}</span>
          ) : (
            <span className="opacity-80">No Screening test done.</span>
          )}
        </section>
      </article>
    </main>
  );
};
export default Test;
