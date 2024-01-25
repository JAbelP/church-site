import Header from "../component/headerComponent/header";
import MiddleEyeCatch from "../component/mainPageComponent/middleEyeCatch";
import NewMember from "../component/newMemberComponent/newMember";
import Footer from "../component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import LanguageSelector from "../component/flagComponents/flagSelector";
import Text from "../component/textComponents/text";
import { useTranslations } from "next-intl";

const ebG = EB_Garamond({ subsets: ["latin"] });

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="bg-white lg:h-fit lg:w-full h-auto w-screen flex flex-col text-black overflow-clip">
      <h1>{t("title")}</h1>
      <LanguageSelector />
      <div className="mt-28 mx-auto md:mt-0">
        <NewMember />
      </div>
      <div className="mt-13 md:mt-0">
        <Header />
      </div>
      <div className="  mt-12 mb-10 md:my-8 flex flex-col md:flex-row md:justify-center gap-y-7">
        <MiddleEyeCatch title={t("Leadership")} desc={"Example Example"} />
        <MiddleEyeCatch title={t("Ministries")} desc={"Example Example"} />
        <MiddleEyeCatch title={t("About Us")} desc={"Example Example"} />
      </div>
      <div className=" h-60 flex-col lg:mb-10 mb-80 ">
        <div className="h-fit lg:pl-[154px] lg:pr-[108px] text-black lg:text-5xl text-2xl mx-6 font-normal capitalize mb-4 ">
          <div className={ebG.className}>{t("Bible Verse")}</div>
        </div>
        <div className="text-black text-5xl  font-normal uppercase relative text-right pr-16 overflow-hidden">
          <div className={ebG.className}>
            {t("Bible Verse Cite")}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
