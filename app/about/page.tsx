import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Metadata } from "next";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us",
  description: "How this organization started to exist.",
};

const AboutPage = () => {
  return (
    <main className="flex flex-1 flex-col">
      <section className=" h-40 relative bg-black/45 ">
        <Image
          src={"/images/about.jpg"}
          alt="medical pills"
          fill
          className=" object-cover object-bottom opacity-80 -z-10 shadow-md "
        />
        <div className="wrapper h-full flex items-center">
          <h1 className="title_1 text-5xl text-sky-50 p-6 w-full rounded-md">
            About Us
          </h1>
        </div>
      </section>
      <article className="wrapper py-12">
        <section className="flex flex-col gap-3">
          <h2 className="title_2">What Do We Do?</h2>
          <p className="p_1">
            We aimed to improve awareness on Tuberculosis, provide health
            education to empower people regarding several aspects of TB
            prevention, management and thereby enabling people in accessing the
            right preventing methods, right treatment, in right time, at the
            right place.
          </p>
        </section>
      </article>
    </main>
  );
};
export default AboutPage;
