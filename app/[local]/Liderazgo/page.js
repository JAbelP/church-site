import Header from "../../component/headerComponent/header";
import NewMember from "../../component/newMemberComponent/newMember";
import Footer from "../../component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import SubEyeCatch from "../../component/ministeriosComponents/subEyeCatch";
import localFont from "next/font/local";
import LanguageSelector from "../../component/flagComponents/flagSelector";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });

// export const metadata = {
//   title: "Liderazgo",
//   description: "Conozca el liderazgo",
// };

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("LeadershipTitle"),
    description: t("LeadershipDescription"),
  };
}


export default function Home() {
  const t = useTranslations("Leadeship");
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
        <LanguageSelector />
        <div className="mt-13 md:mt-0">
          <Header headerTitles={headerTitles}/>
        </div>

        <div className={CopperplateBold.className}>
          <div className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
            {t('Leadership')}
          </div>
        </div>

        <div className="text-5xl font-medium tracking-widest mx-auto uppercase">
          {t('Pastors')}
        </div>
        <div className="flex flex-col">
          <div>
            <SubEyeCatch
              names={"TOMAS & INGRID RAMIREZ"}
              imageLocation={"/Leadership/TioyTia1.jpg"}
              altText={"Pastores: TOMAS Y INGRID RAMIREZ"}
            />
          </div>
          <div className="text-4xl font-medium tracking-widest uppercase text-center justify-center mx-auto">
            {t('Associate Pastores')}
          </div>
          <div>
            <SubEyeCatch
              names={"ALDO & BRENDA COLON"}
              imageLocation={"/Leadership/Colon.jpg"}
              altText={"PASTOR ASOCIADO: ALDO Y BRENDA COLON"}
            />
          </div>
        </div>

        <div className=" mt-16">
          <div className=" mb-8 text-center  text-4xl font-medium tracking-widest">
            {t('Decons')}
          </div>
          <div className="flex md:flex-row md:justify-evenly flex-col gap-y-16">
            <SubEyeCatch
              names={"WELLINGTON & MARCIA DE JESUS"}
              imageLocation={"/Leadership/Wellington.jpg"}
              altText={"Decon: WELLINGTON Y MARCIA DE JESUS"}
            />

            <SubEyeCatch
              names={"JOSE & ANA PAULA DE LA ROSA"}
              imageLocation={"/Leadership/DeRosa.jpg"}
              altText={"Decon: JOSE & ANA PAULA DE LA ROSA"}
            />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
