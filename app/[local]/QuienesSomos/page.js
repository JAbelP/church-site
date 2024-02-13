import Image from "next/image";
import Header from "../../component/headerComponent/header";
import NewMember from "../../component/newMemberComponent/newMember";
import Footer from "../../component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import Text from "../../component/textComponents/text";
import LanguageSelector from "../../component/flagComponents/flagSelector";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });


export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("QuienesSomosTitle"),
    description: t("QuienesSomosDescription")
  };
}

export default function Home() {
  const t = useTranslations("WhoAreWe");
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
    <main className={`${ebG.className} overflow-x-hidden`}>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="mt-28 mx-auto md:mt-0">
          <NewMember />
        </div>
        <div className="mt-13 md:mt-0">
          <Header headerTitles={headerTitles}/>
        </div>
        <LanguageSelector />
        <div className="flex flex-col text-center items-center mt-5">
          <div className={CopperplateBold.className}>
            <div className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
              {t('whoAreWe')}
            </div>
          </div>
          <h1 className="font-extrabold text-6xl pb-4">
          {t('Mission')}
          </h1>
          <div className="text-3xl pb-8">
          {t('WeAreAChurch')}
          </div>
          <div>
            <h1 className="font-extrabold text-6xl pb-4">
            {t('Vision')}
            </h1>
            <p className="text-3xl pb-8 px-3">
            {t('Evangelize and Disciple through the city')}
              
            </p>
          </div>
          <Image  width={642} height={696} src={"/QuienesSomosSVG/middleEyeCatch.svg"} alt="Beliefs" />
        </div>
        <Footer />
      </div>
    </main>
  );
}
