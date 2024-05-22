/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col pb-6">
      <section className=" md:h-[27rem] sm:h-[30rem] h-[33rem] relative bg-black/30 ">
        <Image
          src={"/images/hero.jpg"}
          alt="medical pills"
          fill
          className=" object-cover opacity-50 shadow-md "
        />
        <div className="wrapper h-full flex items-center">
          <div className="bg-sky-50/65 z-10 rounded-xl text-sky-900 shadow-xl md:max-w-xl flex gap-1 sm:gap-2 flex-col p-8 sm:p-12 px-8 sm:px-10 text-center sm:text-start sm:mx-4">
            <h1 className="text-2xl sm:text-3xl leading-8 font-bold">
              {/* Teaching and raising up TB awareness among younger generations */}
              ለታዳጊ ወጣቶች እና ተማሪዎች የቲቢ ግንዛቤ መፍጠር
            </h1>
            <p className="opacity-80 text-base leading-6">
              {/* Tuberculosis(TB) is the world's leading infectious killer. Every
              day, TB claims the lives of about 4500 people and sickens 30,000
              more. */}
              ቲቢ በዓለም ላይ ግንባር ቀደም ተላላፊ ገዳይ ነው። በየቀኑ፣ ቲቢ ወደ 4500 የሚጠጉ ሰዎችን ህይወት
              ይቀጥፋል እና 30,000 ተጨማሪ ሰዎችን ያማል።
            </p>
            <div className="flex items-center space-x-4 flex-col sm:flex-row">
              <Link href={"/tuberculosis"}>
                <Button
                  size={"lg"}
                  className="rounded-full mr-auto mt-4 text-base py-6 px-8"
                >
                  {/* Learn More */}
                  ተጨማሪ እወቅ
                </Button>
              </Link>
              <a href="#whatistb">
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  className="rounded-full mr-auto mt-4 text-base py-6 px-8"
                >
                  {/* What is TB? */}
                  ቲቢ ምንድን ነው?
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <article className="wrapper py-12">
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
            ቲቢ በማይኮባክቲሪየም ቲዩበርክሎዝስ በተባለው ባክቴሪያ እና አልፎ አልፎ በማይኮባክቲሪየም ቦቪስ የሚመጣ
            ተላላፊ በሽታ ነው። እነዚህ ባክቴሪያዎች በሰዎች ሴሎች ውስጥ ይኖራሉ, በተለይም በሳንባዎች ውስጥ. ቲቢ
            እንደ ሳል፣ የደረት ሕመም፣ የትንፋሽ ማጠር፣ ትኩሳት፣ ላብ፣ ክብደት መቀነስ ወዘተ ያሉ ምልክቶች
            አሉት።ከበሽታው በኋላ አንዳንድ ሰዎች የቲቢ በሽታ በፍጥነት ይያዛሉ፣ ሌሎች ደግሞ ባክቴሪያዎቹ ለብዙ አመታት
            ንቁ አይደሉም። ይህ ልዩነት በግለሰቦች መካከል ባለው የበሽታ መከላከያ ልዩነት ምክንያት ነው.
          </p>
        </section>
      </article>
      <article className="wrapper py-2">
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
            የቲቢ ባክቴሪያዎች በአየር ወለድ ጠብታዎች ውስጥ ወደ ሳንባዎች ሊገቡ ይችላሉ. በበሽታው የተያዙ ሰዎች
            በሚስሉበት፣ በሚያስሉበት ወይም በሚናገሩበት ጊዜ ይተላለፋል። ባክቴሪያዎቹ በአየር ውስጥ በትንንሽ ፈሳሽ
            ጠብታዎች ውስጥ ይወሰዳሉ. መተላለፍ የሚከሰተው ያልተበከሉ ሰዎች ነጠብጣቦችን ወደ ውስጥ ሲተነፍሱ
            (ሲተነፍሱ) ነው። እነዚህ በፍጥነት የሚከሰቱት ብዙ ሰዎች በተጨናነቀ ሁኔታ ውስጥ በሚኖሩባቸው ቦታዎች
            ለምሳሌ በተጨናነቀ የሕዝብ መጓጓዣ፣ በተጨናነቀ የኑሮ ሁኔታ ውስጥ ነው።
          </p>
          <p className="p_1">
            {/* The other transmission way is by consuming undercooked meat and
            unpasteurized milk. This type of transmission mainly occurs for the
            TB transmitted from infected animals. */}
            ሌላው የመተላለፊያ መንገድ ያልበሰለ ስጋ እና ያልተፈጨ ወተትን በመመገብ ነው። የዚህ ዓይነቱ ስርጭት
            በዋነኝነት የሚከሰተው በበሽታው ከተያዙ እንስሳት በሚተላለፈው ቲቢ ነው።
          </p>
          <p className="p_1">
            {/* Tuberculosis can be Drug Resistant type because of in adequate TB
            treatment which could be due to missed medications, taking
            suboptimal doses, or living or contact with individuals infected by
            the resistant bacteria. */}
            ቲዩበርክሎዝ መድሀኒት የሚቋቋም አይነት ሊሆን ይችላል ምክንያቱም በቂ የቲቢ ህክምና ባለበት ምክኒያት ያመለጡ
            መድሃኒቶች፣ ከተሻለ መጠን በላይ በመውሰድ ወይም በተከላካይ ባክቴሪያ ከተያዙ ሰዎች ጋር መኖር ወይም
            ግንኙነት ሊሆን ይችላል።
          </p>
        </section>
      </article>
      <article className="wrapper py-6">
        <section className="flex flex-col gap-3">
          <h2 className="title_2">የቲቢ ምልክቶች</h2>
          <p className="p_1">የቲቢ በሽታ በሚከተሉት ምልክቶች ይታያል-</p>
          <ul className=" list-disc list-inside">
            {/* <li>
              A cough that lasts more than 2- 3 weeks dry or cough with sputum
              sometimes with blood,
            </li>
            <li>Having a high temperature or night sweats, </li>
            <li>Loss of appetite,</li>
            <li>Feeling tired or exhausted,</li>
            <li>Weight loss, and</li>
            <li>Feeling generally unwell.</li> */}
            <li>ከ 2-3 ሳምንታት በላይ የሚቆይ ሳል ደረቅ ወይም በአክታ ማሳል አንዳንድ ጊዜ በደም</li>
            <li>ከፍተኛ ሙቀት ወይም የሌሊት ላብ መኖር፣ </li>
            <li>የምግብ ፍላጎት ማጣት፣</li>
            <li>የድካም ወይም የድካም ስሜት፣</li>
            <li>ክብደት መቀነስ እና</li>
            <li>በአጠቃላይ መጥፎ ስሜት።</li>
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
      <article className="wrapper py-6">
        <div className="flex flex-col gap-3">
          <h2 className="title_2">የቲቢ በሽታ መከላከል እና መቆጣጠር</h2>
          <p className="p_1">
            ለማከም እና ለመከላከል አስፈላጊ የሆኑ መድሃኒቶች እና ክትባቶች አሉ ይህ በሽታ.
          </p>
          <div>
            <h3 className="title_3">ክትባት</h3>
            <p className="p_1">
              ለቲቢ ያለው ብቸኛው ክትባት የቢሲጂ ክትባት ነው፣ እሱም ነው። ከእንስሳት ቲቢ ባክቴሪያ የተገኘ እና
              እስከ 70-80% ሰዎችን ይጠብቃል። ማን ይቀበላሉ. ይህ ክትባት በጨቅላ ሕጻናት ወይም በጨቅላ ሕፃናት
              ውስጥ ይሰጣል ደረጃ. በእርጅና ጊዜ የክትባቱ ውጤታማነት ይቀንሳል።{""}
            </p>
          </div>
          <p className="p_1">በሚከተሉት እርምጃዎች ቲቢን መከላከል ይቻላል.</p>
          <ul className=" list-disc list-inside">
            <li>ከመጠን በላይ መጨናነቅን ያስወግዱ፣</li>
            <li>ጥሩ አየር በሌለው አካባቢ መኖር፣ </li>
            <li>ጭንብል መልበስ፣</li>
            <li>
              በደንብ ያልበሰለ ስጋን ከመብላት ይቆጠቡ እና ያለ pasteurized ወይም ከመጠጣት ይቆጠቡ የተቀቀለ
              ወተት አይደለም ፣
            </li>
            <li>በህክምና ባለሙያዎች የታዘዙትን ሁሉንም የቲቢ መድሃኒቶች መውሰድ የቲቢ ሕክምና,</li>
            <li>የመጀመሪያ ምክክር እና ምልክቶች እየተሰማዎት እያለ መሞከር እና</li>
            <li>ኤችአይቪ ኢንፌክሽን ላለባቸው የቲቢ ቅድመ ምርመራ እና ህክምና{""}</li>
          </ul>
        </div>
      </article>
      <article className="wrapper py-6">
        <div className="flex flex-col gap-3">
          <h2 className="title_2">የቲቢ ሕክምና</h2>
          <p className="p_1">
            ከቲቢ ጋር የተዛመዱ ምልክቶች የሚታዩበት ሰው አክታውን ማከም አለበት። ለቲቢ ባክቴሪያ መኖር የተረጋገጠ
            ናሙና። ሰው ከሆነ ለቲቢ አዎንታዊ ነው, ከዚያም ታካሚዎች በሚገቡበት ጊዜ ተለይተው መቀመጥ አለባቸው በጣም
            ተላላፊው ደረጃ (ብዙውን ጊዜ የመጀመሪያዎቹ ሁለት ሳምንታት ነው). ህክምናው ሁሉንም ለማረጋገጥ ብዙ
            መድሃኒቶችን መጠቀምን ያካትታል ባክቴሪያዎች ይገደላሉ. ሕክምናው ስድስት ወር አካባቢም ያስፈልገዋል።{""}
          </p>
        </div>
      </article>
    </main>
  );
}
