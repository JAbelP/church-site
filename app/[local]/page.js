import Header from "../component/headerComponent/header";
import MiddleEyeCatch from "../component/mainPageComponent/middleEyeCatch";
import NewMember from "../component/newMemberComponent/newMember";
import Footer from "../component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import LanguageSelector from "../component/flagComponents/flagSelector";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const ebG = EB_Garamond({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

export default function Home() {
  const t = useTranslations("Home");

  const headerTranslations = useTranslations("Header");
  const headerTitles = [
    { Name: headerTranslations("Who Are We"), Link: "/QuienesSomos" },
    { Name: headerTranslations("Leadership"), Link: "/Liderazgo" },
    { Name: headerTranslations("Ministries"), Link: "/Ministerios" },
    { Name: headerTranslations("Events"), Link: "/Eventos" },
    { Name: headerTranslations("Sermons"), Link: "/Sermones" },
    { Name: headerTranslations("Offerings"), Link: "/Ofrenda" },
  ];

  return (
    <main className="bg-white lg:h-fit lg:w-full h-auto w-screen flex flex-col text-black overflow-clip">
      <LanguageSelector />
      <div className="mt-28 mx-auto md:mt-0">
        <NewMember />
      </div>
      <div className="mt-13 md:mt-0">
        <Header headerTitles={headerTitles} />
      </div>
      <div className="flex flex-col mx-auto items-center justify-center gap-y-6 my-6 lg:flex-row lg:gap-x-3">
        <MiddleEyeCatch
          title={t("Leadership")}
          desc={t("Read More About Our Leadership")}
          imageSrc={"/Leadership/TioyTia1.jpg"}
          urlLink={"/Liderazgo"}
        />
        <MiddleEyeCatch
          title={t("Ministries")}
          desc={t("Learn More About Our Ministries")}
          imageSrc={"/Ministries/YouthGroup1.webp"}
          urlLink={"/Ministerios"}
        />
        <MiddleEyeCatch
          title={t("About Us")}
          desc={t("Learn More About Our Church")}
          imageSrc={"/Ministries/worship.webp"}
          urlLink={"/QuienesSomos"}
        />
      </div>
      <div className=" h-60 flex-col lg:mb-10 mb-80 ">
        <div className="h-fit lg:pl-[154px] lg:pr-[108px] text-black lg:text-5xl text-2xl mx-6 font-normal capitalize mb-4 ">
          <div className={ebG.className}>{t("Bible Verse")}</div>
        </div>
        <div className="text-black text-5xl  font-normal uppercase relative text-right pr-16 overflow-hidden">
          <div className={ebG.className}>{t("Bible Verse Cite")}</div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
