import Header from "../component/headerComponent/header";
import NewMember from "../component/newMemberComponent/newMember";
import Footer from "../component/footerComponent/footer";
import EyeCatch from "../component/ministeriosComponents/eyeCatch";
import localFont from "next/font/local";

const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });
const mini = [
  {
    title: "Evangelismo",
    desc: "La evangelización o evangelismo, es la misión y función principal de la iglesia. Consiste en llevar las Buenas Nuevas de Jesucristo, a quienes por no conocerlas, están perdiendo su oportunidad de vivir la vida abundante y ser salvos. La dinámica para evangelizar brota de la experiencia de haber sido reconciliados con Dios. Por eso,básicamente el evangelizar es tarea de todos los cristianos, todo el tiempo y en todo lo que hacen. Cristo envió a todos los creyentes por el mundo a hacer discípulos.",
  },
  {
    title: "Evangelismo",
    desc: "Este Ministerio tiene como meta fundamental velar por el cuidado de los miembros de la congregación, procurando integrarlos a la vida total de la iglesia, en un clima de hermandad y amor cristiano.",
  },
  {
    title: "ADORACIÓN Y ALABANZAS",
    desc: "Este Ministerio tiene como meta fundamental velar por el cuidado de los miembros de la congregación, procurando integrarlos a la vida total de la iglesia, en un clima de hermandad y amor cristiano.",
  },
  {
    title: "EDUCACIÓN CRISTIANA",
    desc: "La Educación cristiana tiene como meta proveer y facilitar aquellos procesos y experiencias necesarias, para que las personas puedan estudiar, examinar y reflexionar sobre los contenidos de su fe cristiana, particularmente en cuanto al amor redentor de Dios revelado en Jesucristo, para que cada persona pueda responder en fe y amor al Señor, para que se comprenda a sí misma y su situación humana, y para que unida a la comunidad cristiana, viva en el Espíritu todas sus relaciones humanas, y cumpla su discipulado en el mundo, perseverando en la esperanza cristiana.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="m-auto">
          <NewMember />
        </div>
        <Header />{" "}
        <div className={CopperplateBold.className}>
          <p className="text-center text-black text-7xl  tracking-widest mb-16">
            Ministerios
          </p>
        </div>
        <div className="flex flex-col items-center">
          {mini.map((item, index) => (
            <EyeCatch title={item.title} desc={item.desc} key={index} />
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
