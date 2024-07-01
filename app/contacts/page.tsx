import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Health Proffessionals Those who will assist you in anyting related with TB.",
};

const ContactsPage = () => {
  const healthProffesionls = [
    {
      name: "Dr. Emawaysish Tesema",
      desc: "DR TB Senior Advisor",
      number: "+251 939 929 9283",
    },
  ];
  return (
    <main className="flex flex-1 flex-col py-8">
      {/* <section className="relative ">
         <Image
          src={"/images/contacts.jpg"}
          alt="medical pills"
          fill
          className=" object-cover opacity-80 -z-10 shadow-md"
        />
        <div className="wrapper h-full flex items-center">
          <h1 className="title_1 text-5xl text-gary-900  p-6 w-full rounded-md">
            Contact Us
          </h1>
        </div>
      </section> */}
      {/* <section className="wrapper py-12 flex flex-col gap-1">
        <h2 className="title_1">Different Doctors on this Field</h2>
        <p>
          Here are Doctors who are keen on working with us to eliminate TB.
          Contact one of them when ever <em>needed</em>
        </p>
        <div className="grid grid-cols-2 my-2">
          {healthProffesionls.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-5 p-3 rounded-md shadow-md bg-black/5"
            >
              <Image
                src={"/images/placeholder.png"}
                alt={p.name}
                width={750}
                height={750}
                className=" w-24 rounded-md"
              />
              <div className="flex flex-col">
                <strong className="m-0">{p.name}</strong>
                <span className="opacity-70 text-base">{p.desc}</span>
                <div className="flex space-x-1 opacity-85 items-center">
                  <FaPhone className="text-base" />
                  <span>{p.number}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <section className="wrapper flex mb-8 gap-6 md:gap-12 flex-col md:flex-row">
        <div className="flex flex-col gap-3 p-6 md:w-[60%] flex-1">
          <h2 className="title_1 text-4xl text-gray-900/80">Contact us</h2>
          <p className="opacity-80">ቲቢን በተመለከተ ምንም ኣይነት ጥያቄ ካለቹ መደወል አትርሱ።</p>
          <div className="flex items-center gap-4 mt-6">
            <Phone
              size={60}
              className="text-gray-700 fill-gray-700 bg-black/5 p-4 rounded-full aspect-square ring-2"
            />
            <div className="flex flex-col">
              <span className="text-sm opacity-80">ስልክ</span>
              <p>+251 299 299 299</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default ContactsPage;
