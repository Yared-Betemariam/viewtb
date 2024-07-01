"use client";

import { screeningTest } from "@/actions/screeningTest";
import { useState } from "react";
import TestForm from "./TestForm";

const Test = () => {
  const [text, setText] = useState<string>();
  const [res, setRes] = useState<string>();
  const makeatest = (data: string) => {
    const result = screeningTest(data);
    setRes(result);
  };
  return (
    <main className="flex flex-1 flex-col">
      <article className="wrapper my-12 flex gap-12 flex-col md:flex-row">
        <section className="flex-1 py-6 flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h2 className="title_1">የቲቢ የመጀመሪያ ልየታ ምርመራ</h2>
            <p className="p_2">ከሚከተሉት ምልክቶች የሚሰማዎትን ይምረጡ</p>
            <TestForm onSubmit={makeatest} />
          </div>
        </section>
        <section className="bg-sky-200/15 border md:w-[40%] flex flex-col gap-3 border-gray-900/40 px-12 py-8 rounded-lg shadow-md text-base">
          <h3 className="text-xl font-bold">የምርመራ ውጤትዎ</h3>
          {res ? (
            <span>{res}</span>
          ) : (
            <span className="opacity-80">ምንም የማጣሪያ ሙከራ አልተሰራም።.</span>
          )}
        </section>
      </article>
    </main>
  );
};
export default Test;
