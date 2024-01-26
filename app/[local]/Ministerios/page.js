import Header from "../../component/headerComponent/header";
import NewMember from "../../component/newMemberComponent/newMember";
import Footer from "../../component/footerComponent/footer";
import EyeCatch from "../../component/ministeriosComponents/eyeCatch";
import localFont from "next/font/local";
import Text from "../../component/textComponents/text";
import LanguageSelector from "../../component/flagComponents/flagSelector";
// Images
import Evangelismo from "@/public/Ministries/evangelismo.webp";
import GPS from "@/public/Ministries/GPS.jpg";
import worship from "@/public/Ministries/worship.webp";
import Study from "@/public/Ministries/Study.jpg";
import mission from "@/public/Ministries/Mission.jpg";
import prayer from "@/public/Ministries/Prayer.jpg";
import Therapy from "@/public/Ministries/Pastoral Therapy.jpg";
import Couples from "@/public/Ministries/CoupleTherapy.jpg";
import Men from "@/public/Ministries/Men_Prayer.jpg";
import Women from "@/public/Ministries/Women_Prayer.webp";
import Children from "@/public/Ministries/childPraying.jpg";
import YouthGroup from "@/public/Ministries/YouthGroup1.webp";
import { useTranslations } from "next-intl";
const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });

export const metadata = {
  title: "Ministerios",
  description: "Conozca Más Sobre Nuestros Ministerios",
};

export default function Home() {
  const t = useTranslations("Minstries");

  const mini = [
    {
      title: t("Evenglism"),
      desc: t("Evangelization Desc"),
      imageLocation: Evangelismo,
    },
    {
      // [TODO] Fix this discription
      title: t("Small Health Groups"),
      desc: t("Evangelization Desc"),
      imageLocation: GPS,
    },
    {
      title: t("WORSHIP AND PRAISE"),
      desc: t("Worship and Praise Desc"),
      imageLocation: worship,
    },
    {
      title: t("CHRISTIAN EDUCATION"),
      desc: t("Christian Education Desc"),
      imageLocation: Study,
    },
    {
      title: t("MISSIONS"),
      desc: t("Missions Desc"),
      imageLocation: mission,
    },
    {
      title: t("PRAYER"),
      desc: t("Prayer Desc"),
      imageLocation: prayer,
    },
    {
      title: t("PASTORAL COUNSELING"),
      desc: t("Pastoral Counseling Desc"),
      imageLocation: Therapy,
    },
    {
      title: t("COUPLES MINISTRY"),
      desc: t("Couples Ministry Desc"),
      imageLocation: Couples,
    },
    {
      title: t("MEN'S MINISTRY"),
      desc: t("Men's Ministry Desc"),
      imageLocation: Men,
    },
    {
      title: t("WOMEN'S MINISTRY"),
      desc: t("Women's Ministry Desc"),
      imageLocation: Women,
    },
    {
      title: t("TEENS'S MINISTRY"),
      desc: t("Teen's Ministry Desc"),
      imageLocation: YouthGroup,
    },
    {
      title: t("CHILDREN'S MINISTRY"),
      desc: t("Children's Ministry Desc"),
      imageLocation: Children,
    },
  ];
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
    <main>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="lg:m-auto mt-28">
          <NewMember />
        </div>
        <LanguageSelector />
        <Header headerTitles={headerTitles}/>
        <div className={CopperplateBold.className}>
          <div className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
           {t('Minstries')}
          </div>
        </div>
        <div className="flex flex-col items-center">
          {mini.map((item, index) => (
            <EyeCatch
              title={item.title}
              desc={item.desc}
              key={index}
              imageLocation={item.imageLocation}
            />
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
