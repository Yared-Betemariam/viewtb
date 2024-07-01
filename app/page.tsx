/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col gap-8 pb-8">
      <section className="md:h-[26rem] border-b border-gray-900/10 sm:h-[30rem] h-[26rem] relative bg-black/30">
        <Image
          src={"/images/hero.jpg"}
          alt="medical pills"
          fill
          className=" object-cover object-center opacity-60"
        />
        <div className="h-full flex items-center">
          <div className="bg-blue-50/90 z-10 text-sky-900 w-full md:max-w-[34rem] flex gap-5 sm:gap-3 flex-col p-8 sm:p-12 px-8 sm:px-10 text-center sm:text-start pt-12 rounded-xl mx-10">
            <h1 className="text-3xl sm:text-4xl leading-8 font-bold">
              {/* Teaching and raising up TB awareness among younger generations */}
              ለታዳጊ ወጣቶች እና ተማሪዎች የቲቢ ግንዛቤ መፍጠር
            </h1>
            <p className="opacity-80 text-base leading-6">
              {/* Tuberculosis(TB) is the world's leading infectious killer. Every
              day, TB claims the lives of about 4500 people and sickens 30,000
              more. */}
              ቲቢ በዓለም ላይ ግንባር ቀደም ተላላፊ ገዳይ በሽታ ነው። በየቀኑ፣ ቲቢ ወደ 4500 የሚጠጉ ሰዎችን
              ህይወት ይቀጥፋል, በተጨማሪ ወደ 30,000 የሚጠጉ ሰዎችን ለሕመም ይዳርጋል።
            </p>
            <div className="flex items-center space-x-4 flex-col sm:flex-row">
              <Link href={"/amharic"}>
                <Button
                  size={"lg"}
                  className="rounded-lg mr-auto mt-4 text-base py-6 px-8 drop-shadow-md"
                >
                  {/* Learn More */}
                  ተጨማሪ
                </Button>
              </Link>
              <a href="#whatistb">
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  className="rounded-lg mr-auto mt-4 text-base py-6 px-8 drop-shadow-md"
                >
                  {/* What is TB? */}
                  ቲቢ ምንድን ነው?
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <article className="wrapper flex gap-20">
        <section className="flex flex-col gap-3" id="whatistb">
          <h2 className="title_2">
            {/* What is Tuberculosis (TB) */}
            ቲቢ ምንድን ነው?
          </h2>
          <p className="p_1">
            {/* Tuberculosis is an infectious disease caused by the bacterium called
            Mycobacterium tuberculosis and rarely by Mycobacterium bovis. These
            bacteria live inside human cells, mainly in the lungs. TB has many
            symptoms like cough, chest pain, shortness of breath, fever,
            sweating, weight loss etc. After infection, some people develop TB
            quite quickly, while in others the bacteria remain inactive for many
            years. This difference is because of the difference in immunity
            between individuals. */}
            ቲቢ በኢትዮጵያ ውስጥ በጣም ከሚተላለፉ እና ገዳይ በሽታዎች አንዱ ነው። መንስኤም አልፎ አልፎ እንደሚነገረው
            ብርድ ወይም ንፋስ ሳይሆን ረቂቅ የሆነ ባክቴሪያ ነው፡፡ ቲቢ በበሽታው በተጠቁ የቤት እንስሳት ወተት ሳይፈላ
            ቢጠጣ ከእንስሳት ወደ ሰው ሊተላለፍ እንደሚችልም ተረጋግጧል፡፡
          </p>
        </section>
      </article>
      <article className="wrapper py-2 flex gap-20">
        <section className="flex flex-col gap-3">
          <h2 className="title_2">የቲቢ ስርጭት</h2>
          <p className="p_1">
            {/* TB bacteria can enter the lungs in airborne droplets. It spread when
            infected people with the active form of the illness cough, sneeze or
            talks. The bacteria are carried in the air in tiny droplets of
            liquid. Transmission occurs when people who are uninfected inhale
            (breath in) the droplets. These happen rapidly in places where many
            people are living in crowded conditions such as crowded public
            transportation, crowded living conditions.  */}
            ቲቢ በአብዛኛው የሚተላለፈው በትንፋሽ አማካኝነት ነው፡፡ አንድ በቲቢ የተያዘ ሕመምተኛ በሚስልበት፣
            በሚያስነጥስበት፣ ወይም በሚናገርበት ወዘተ... ወቅት የቲቢ በሽታ አምጪ ባክቴሪያን ወደ አየር ስለሚበተኑና
            ባክቴሪያዎቹን በአቅራቢያው ያሉ ሰዎች ወደ ውስጥ አየር በሚተነፍሱበት ጊዜ በቀላሉ ወደ ሳንባ ውስጥ ገብተው
            ለማጥቃት ዕድል ያገኛሉ፡፡
          </p>
          {/* <p className="p_1">
            The other transmission way is by consuming undercooked meat and
            unpasteurized milk. This type of transmission mainly occurs for the
            TB transmitted from infected animals.
            ሌላው የመተላለፊያ መንገድ ያልበሰለ ስጋ እና ያልተፈጨ ወተትን በመመገብ ነው። የዚህ ዓይነቱ ስርጭት
            በዋነኝነት የሚከሰተው በበሽታው ከተያዙ እንስሳት በሚተላለፈው ቲቢ ነው።
          </p>
          <p className="p_1">
            Tuberculosis can be Drug Resistant type because of in adequate TB
            treatment which could be due to missed medications, taking
            suboptimal doses, or living or contact with individuals infected by
            the resistant bacteria.
            ቲዩበርክሎዝ መድሀኒት የሚቋቋም አይነት ሊሆን ይችላል ምክንያቱም በቂ የቲቢ ህክምና ባለበት ምክኒያት ያመለጡ
            መድሃኒቶች፣ ከተሻለ መጠን በላይ በመውሰድ ወይም በተከላካይ ባክቴሪያ ከተያዙ ሰዎች ጋር መኖር ወይም
            ግንኙነት ሊሆን ይችላል።
          </p> */}
        </section>
      </article>
      <article className="wrapper py-6 flex gap-20">
        <section className="flex flex-col gap-3">
          <h2 className="title_2">የቲቢ ምልክቶች</h2>
          <p className="p_1">የቲቢ በሽታ በሚከተሉት ምልክቶች ያሳያል-</p>
          <ul className=" list-disc list-inside space-y-1">
            {/* <li>
              A cough that lasts more than 2- 3 weeks dry or cough with sputum
              sometimes with blood,
            </li>
            <li>Having a high temperature or night sweats, </li>
            <li>Loss of appetite,</li>
            <li>Feeling tired or exhausted,</li>
            <li>Weight loss, and</li>
            <li>Feeling generally unwell.</li> */}
            <li>
              ከ 2-3 ሳምንታት በላይ የሚቆይ ደረቅ ሳል ወይም ኣክታ ያለው ሳል (አንዳንድ ጊዜ በደም ሊኖረው
              ይችላል)
            </li>
            <li>ከፍተኛ ሙቀት ወይም የሌሊት ላብ መኖር፣ </li>
            <li>የምግብ ፍላጎት ማጣት፣</li>
            <li>የድካም ስሜት መኖር፣</li>
            <li>ክብደት መቀነስ እና</li>
            <li>በአጠቃላይ የጤነኝነት</li>
          </ul>
        </section>
      </article>
      {/* <article className="wrapper py-6">
        <section className="flex flex-col gap-3">
          <h2 className="title_2">Prevention and control of TB</h2>
          <p className="p_1">
            There are drugs and vaccines that are important to treat and prevent
            this disease.
          </p>
          <section>
            <h3 className="title_3">Vaccine</h3>
            <p className="p_1">
              The only vaccine available for TB is the BCG vaccine, which is
              derived from animal TB bacteria and protects up to 70–80%of people
              who receive it. This vaccine is given during early child or infant
              stage. The effectiveness of the vaccine decreases with in old age.{" "}
            </p>
          </section>
          <p className="p_1">
            TB can be prevented with the following measures.
          </p>
          <ul className=" list-disc list-inside">
            <li>Avoid overcrowding,</li>
            <li>Living in well-ventilated environment, </li>
            <li>Wearing masks,</li>
            <li>
              Avoid eating undercooked meat and avoid drinking unpasteurized or
              not boiled milk,
            </li>
            <li>
              Taking all TB medication prescribed by medical professionals for
              TB treatment,
            </li>
            <li>Early consultation and testing while feeling symptoms, and</li>
            <li>
              Early testing and treatment of TB for those with HIV infection{" "}
            </li>
          </ul>
        </section>
      </article> */}
      <article className="wrapper py-6 flex flex-col lg:flex-row gap-20">
        <div className="flex flex-col gap-2">
          <h2 className="title_2">የቲቢ በሽታ መከላከል እና መቆጣጠር</h2>
          <p className="p_1">
            ይህንን በሽታ ለመከላከል እና ለማከም የተለያዩ ክትባት እና መድሃኒቶች አሉ።
          </p>
          <div className="flex flex-col gap-3">
            <h3 className="title_3">ክትባት</h3>
            <p className="p_1">
              ለቲቢ ያለው ብቸኛው ክትባት የቢሲጂ ክትባት ነው። ይህ ክትባት እስከ 70-80% ሰዎችን ከበሽታው
              ይጠብቃል። ይህ ክትባት ለጨቅላ ሕጻናት ይሰጣል። እድሜ እየጨመረ ጊዜ የክትባቱ ውጤታማነት ይቀንሳል።
              {""}
            </p>
          </div>
          <p className="p_1">ቲቢን በሚከተሉት መንገዶች መከላከል እንችላለን፦</p>
          <ul className=" list-disc list-inside space-y-1">
            <li>ከመጠን በላይ መጨናነቅን ማሶገድ፣</li>
            <li>ጥሩ የአየር እንቅስቃሴ ባለው አካባቢ መኖር፣ </li>
            <li>ጭንብል መልበስ፣</li>
            <li>ያልፈላ ወተት ከመጠጣት መቆጠብ፣</li>
            <li>በህክምና ባለሙያዎች የታዘዙትን ሁሉንም የቲቢ መድሃኒቶች መውሰድ,</li>
            <li>ኤችአይቪ ኢንፌክሽን ላለባቸው ሰዎች የቲቢ ቅድመ ምርመራ እና ህክምና መስጠት</li>
          </ul>
        </div>
        <Image
          src={"/pos.png"}
          alt="Image"
          width={1074}
          height={745}
          className="w-[32rem] lg:w-[29rem] xl:w-[32rem] image my-auto mx-auto"
        />
      </article>
      <article className="wrapper py-6 flex flex-col-reverse md:flex-row gap-12">
        <Image
          src={"/2.jpg"}
          alt="Image"
          width={763}
          height={730}
          className="w-72 image my-auto mx-auto"
        />
        <div className="flex flex-col gap-5 ">
          <h2 className="title_2">የቲቢ ምርመራና ሕክም</h2>
          <p className="p_1">
            ከቲቢ ጋር የተዛመዱ ምልክቶች የሚታይበት ሰው አክታውን በፍጥነት ለምርመራ መስጠት አለበት። የቲቢ ባክቴሪያ
            በአክታው ወይም በናሙና በምርመራ ከተገኘ የተመረመረው ሰው የተረጋገጠበት ሰው በቲቢ በሽታ መያዙ ይረጋገጣል።
            ይህንን ለማወቅ በሰዓታት ውስጥ የቲቢ በሽታ መኖሩን የሚያረጋግጥ ፈጣን የመመርመሪኣ ማሽን ኣለ። ይህ ማሽን
            ጊን ኤክስፐርት ማሽን ይባላል (Gene Xpert Machine)። የቲቢ በሽታ በመጀመሪያዎቹ ሁለት ሳምንታት
            ውስጥ ከታመመ ወደ ጤነኛ ሰው በከፍተኛ ሁኔታ ይተላለፋል። ከቲቢ በሽታ ሙሉ በሙሉ ፈውስ ለማግኘት ብዙ
            መድሃኒቶች ለረጅም ጊዜ መወሰድ አለባቸው። መድሃኒት ያልተለማመደ ቲቢ ሕክምና እስከ ስድስት ወር ድረስ
            ይወስዳል።
          </p>
        </div>
      </article>
    </main>
  );
}
