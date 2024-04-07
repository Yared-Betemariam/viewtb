import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
      desc: "Lead Director at MSH",
      number: "+251 939 929 9283",
    },
  ];
  return (
    <main className="flex flex-1 flex-col">
      <section className="h-40 relative bg-black/45">
        <Image
          src={"/images/contacts.jpg"}
          alt="medical pills"
          fill
          className=" object-cover opacity-80 -z-10 shadow-md"
        />
        <div className="wrapper h-full flex items-center">
          <h1 className="title_1 text-5xl text-sky-50  p-6 w-full rounded-md">
            Contact Us
          </h1>
        </div>
      </section>
      <section className="wrapper py-12 flex flex-col gap-1">
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
      </section>
      <section className="wrapper py-12 flex gap-4">
        <div className="pr-20 flex flex-col gap-2 bgd rounded-xl shadow-xl p-12 text-gray-200">
          <h2 className="title_1">Leave a Message</h2>
          <p className="opacity-80">
            Here are Doctors who are keen on working with us to eliminate TB.
            Contact one of them when ever <em>needed</em>
          </p>
        </div>
        <form className="flex flex-col gap-3 max-w-xl mx-auto w-full p-12 bg-gray-900/10 border-2 border-sky-600/20 rounded-2xl shadow-md">
          <Input placeholder="Your Name" className="text-base" />
          <Input placeholder="Email Adress" className="text-base" />
          <Textarea
            rows={7}
            placeholder="About the Topic"
            className="text-base"
          />
          <Button size={"lg"} className="rounded-full mt-4">
            Send
          </Button>
        </form>
      </section>
    </main>
  );
};
export default ContactsPage;
