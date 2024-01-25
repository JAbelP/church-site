import Header from "../../component/headerComponent/header";
import NewMember from "../../component/newMemberComponent/newMember";
import Footer from "../../component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import Eventos from "../../component/eventosComponents/eventos";
const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });
// import a from "../../../public/Events/Singing.webp"
import a from "@/public/Events/Singing.webp";
import GPS from "@/public/Events/GPS.jpg";
import Study from "@/public/Ministries/Study.jpg";
import Pray from "@/public/Ministries/Prayer.jpg";
import Adoracion from "@/public/Ministries/Prayer.jpg";
import Text from "../../component/textComponents/text";
import LanguageSelector from "../../component/flagComponents/flagSelector";
import { useTranslations } from "next-intl";
export const metadata = {
  title: "Eventos",
  description: "Únete a nuestros eventos",
};

export default function Home() {
  const t = useTranslations("Events");
  const Events = [
    {
      eventName: t("event1"),
      eventTime: t("eventTime1"),
      eventLocation: t("eventLocation1"),
      imageLocation: Adoracion,
    },
    {
      eventName: t("event2"),
      eventTime: t("eventTime2"),
      imageLocation: GPS,
    },
    {
      eventName: t("event3"),
      eventTime: t("eventTime3"),
      imageLocation: Study,
    },
    {
      eventName: t("event4"),
      eventTime: t("eventTime4"),
      imageLocation: Pray,
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
    <main className="bg-white h-fit w-full flex flex-col text-black">
      <div className="m-auto">
        <NewMember />
      </div>
      <Header headerTitles={headerTitles}/>
      <div>
        <div className={CopperplateBold.className}>
          <div className="text-center text-black text-7xl  tracking-widest mb-16">
            {t("Events")}
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          {Events.map((item, index) => (
            <Eventos
              eventName={item.eventName}
              eventLocation={item.eventLocation}
              eventTime={item.eventTime}
              eventImage={item.imageLocation}
              key={index} // Don't forget to add the key prop
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
