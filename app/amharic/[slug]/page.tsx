import data from "../../../data/tb.json";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DetailPage = ({
  params: { slug },
  searchParams: { search },
}: {
  params: {
    slug: string;
  };
  searchParams: {
    search: string | undefined;
  };
}) => {
  const item = data.find((item) => item.id == Number(slug));
  const redLink = () => {
    let link: string = "/amharic";
    if (search) {
      link += `?search=${search}`;
    }
    return link;
  };
  return (
    <main className="flex-1 flex flex-col">
      <section className="wrapper flex flex-col py-16 relative gap-4">
        <Link href={redLink()} className=" absolute top-6 left-6">
          <div className="flex items-center space-x-1 mr-auto text-gray-900/80 text-base font-semibold group">
            <BiArrowBack
              size={16}
              className="ml-1 mr-0 group-hover:mr-1 group-hover:ml-0  transition-all duration-200"
            />
            <span className="font-semibold group-hover:opacity-80 transition">
              ተመለስ
            </span>
          </div>
        </Link>
        <h1 className="text-3xl font-bold">{item?.title}</h1>
        <section className="flex flex-col gap-3">
          {item?.content.map((c, i) => {
            console.log(typeof c);
            if (typeof c == "string") {
              return <p key={i}>{c}</p>;
            }
            if (typeof c == "object") {
              return (
                <ul key={i} className=" list-disc list-inside">
                  {c.map((d, i2) => (
                    <li key={i2}>{d}</li>
                  ))}
                </ul>
              );
            }
          })}
        </section>
      </section>
    </main>
  );
};
export default DetailPage;
