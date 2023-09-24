import Header from "../component/headerComponent/header";
import NewMember from "../component/newMemberComponent/newMember";
import Footer from "../component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import Eventos from "../component/eventosComponents/eventos";
const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });

const Events = [
  {
    eventName: "Culto De Adoracion",
    eventTime: "Domingo 1:30 Pm",
    eventLocation: "2318 Cilantro Dr. Orlando FL 32837",
  },
  {
    eventName:
      "PEQUEÑOS GRUPOS SALUDABLES (GPS) EN LOS HOGARES ORLANDO EN PORTUGUES",
    eventTime: "Miércoles 19 Julio 7:30 PM",
  },
  { eventName: "ESTUDIOS BIBLICOS", eventTime: "Viernes 7:30 PM" },
  {
    eventName: "RETIRO DE ORACIÓN",
    eventTime: "Sábado 29 Julio 9:00 AM - 1:00 PM",
  },
];

export default function Home() {
  return (
    <main className="bg-white h-fit w-full flex flex-col text-black">
      <div className="m-auto">
        <NewMember />
      </div>
      <Header />
      <div>
        <div className={CopperplateBold.className}>
          <p className="text-center text-black text-7xl  tracking-widest mb-16">
            Eventos
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          {Events.map((item, index) => (
            <Eventos
              eventName={item.eventName}
              eventLocation={item.eventLocation}
              eventTime={item.eventTime}
              key={index} // Don't forget to add the key prop
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
