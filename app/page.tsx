/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <section className=" md:h-[27rem] sm:h-[30rem] h-[33rem] relative bg-black/30 ">
        <Image
          src={"/images/hero.jpg"}
          alt="medical pills"
          fill
          className=" object-cover opacity-50 shadow-md "
        />
        <div className="wrapper h-full flex items-center">
          <div className="bg-sky-50/85 z-10 rounded-xl text-sky-900 shadow-xl md:max-w-xl flex gap-1 sm:gap-2 flex-col p-8 sm:p-12 px-8 sm:px-10 text-center sm:text-start sm:mx-4">
            <h1 className="text-2xl sm:text-3xl leading-8 font-bold">
              Teaching and raising up TB awareness among younger generations
            </h1>
            <p className="opacity-80 text-base leading-6">
              Tuberculosis(TB) is the world's leading infectious killer. Every
              day, TB claims the lives of about 4500 people and sickens 30,000
              more.
            </p>
            <div className="flex items-center space-x-4 flex-col sm:flex-row">
              <Link href={"/tuberculosis"}>
                <Button
                  size={"lg"}
                  className="rounded-full mr-auto mt-4 text-base py-6 px-8"
                >
                  Learn More
                </Button>
              </Link>
              <a href="#whatistb">
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  className="rounded-full mr-auto mt-4 text-base py-6 px-8"
                >
                  What is TB?
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <article className="wrapper py-12">
        <section className="flex flex-col gap-3" id="whatistb">
          <h2 className="title_2"> What is Tuberculosis (TB)</h2>
          <p className="p_1">
            Tuberculosis is an infectious disease caused by the bacterium called
            Mycobacterium tuberculosis and rarely by Mycobacterium bovis. These
            bacteria live inside human cells, mainly in the lungs. TB has many
            symptoms like cough, chest pain, shortness of breath, fever,
            sweating, weight loss etc. After infection, some people develop TB
            quite quickly, while in others the bacteria remain inactive for many
            years. This difference is because of the difference in immunity
            between individuals.
          </p>
        </section>
      </article>
      <article className="wrapper py-12">
        <section className="flex flex-col gap-3">
          <h2 className="title_2"> TB transmission</h2>
          <p className="p_1">
            TB bacteria can enter the lungs in airborne droplets. It spread when
            infected people with the active form of the illness cough, sneeze or
            talks. The bacteria are carried in the air in tiny droplets of
            liquid. Transmission occurs when people who are uninfected inhale
            (breath in) the droplets. These happen rapidly in places where many
            people are living in crowded conditions such as crowded public
            transportation, crowded living conditions.
          </p>
          <p className="p_1">
            The other transmission way is by consuming undercooked meat and
            unpasteurized milk. This type of transmission mainly occurs for the
            TB transmitted from infected animals.
          </p>
          <p className="p_1">
            Tuberculosis can be Drug Resistant type because of in adequate TB
            treatment which could be due to missed medications, taking
            suboptimal doses, or living or contact with individuals infected by
            the resistant bacteria.
          </p>
        </section>
      </article>
      <article className="wrapper py-12">
        <section className="flex flex-col gap-3">
          <h2 className="title_2">Prevention and control of TB</h2>
          <p className="p_1">
            There are drugs and vaccines that are important to treat and prevent
            this disease
          </p>
          <section>
            <h3 className="title_3">Treatment of TB</h3>
            <p className="p_2">
              A person, who shows symptoms relating to TB, should his/her sputum
              sample tested for the presence of TB bacteria. If a person is
              positive for TB, then patients should be isolated while they are
              in the most infectious stage (which is at two weeks). The
              treatment involves using several drugs to ensure that all the
              bacteria are killed. The treatment also need about six months.{" "}
            </p>
          </section>
          <section>
            <h3 className="title_3">Vaccine</h3>
            <p className="p_2">
              The only vaccine available for TB is the BCG vaccine, which is
              derived from animal TB bacteria and protects up to 70–80%of people
              who receive it. This vaccine is given during early child or infant
              stage. The effectiveness of the vaccine decreases with in old age.{" "}
            </p>
          </section>

          <p className="p_1">
            TB is relating to reduced immunity of the body, living with HIV and
            treating HIV infected people help to reduce the incidence of TB.{" "}
          </p>

          <p className="p_1">
            Avoid overcrowding; TB is a disease transmitted by inhales the
            bacteria when infected person cough and sneeze therefore, good
            ventilation is important to prevent this disease. Avoid eating
            undercooked meat and avoid drinking unpasteurized or not boiled
            milk. This is important to prevent TB transmission from animal to
            human.
          </p>
        </section>
      </article>
    </main>
  );
}
