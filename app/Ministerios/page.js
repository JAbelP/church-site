import Header from "../component/headerComponent/header";
import NewMember from "../component/newMemberComponent/newMember";
import Footer from "../component/footerComponent/footer";
import EyeCatch from "../component/ministeriosComponents/eyeCatch";
import localFont from "next/font/local";
import Text from "../component/textComponents/text";
import LanguageSelector from "../component/flagComponents/flagSelector";
// Images
import Evangelismo from "../../public/Ministries/evangelismo.jpeg";
import GPS from "../../public/Ministries/GPS.jpg";
import worship from "../../public/Ministries/worship.webp";
import Study from "../../public/Ministries/Study.jpg";
import mission from "../../public/Ministries/Mission.jpg";
import prayer from "../../public/Ministries/Prayer.jpg";
import Therapy from "../../public/Ministries/Pastoral Therapy.jpg";
import Couples from "../../public/Ministries/CoupleTherapy.jpg";
import Men from "../../public/Ministries/Men_Prayer.jpg";
import Women from "../../public/Ministries/Women_Prayer.webp";
import Children from "../../public/Ministries/childPraying.jpg";

const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });

export const metadata = {
  title: "Ministerios",
  description: "Conozca Más Sobre Nuestros Ministerios",
};

const mini = [
  {
    title: "Evangelismo",
    desc: "La Evangelización O Evangelismo",
    imageLocation: Evangelismo,
  },
  {
    title: "CÉLULAS GRUPOS PEQUEÑOS SALUDABLES (GPS)",
    desc: "velar por el cuidado de los miembros de la congregación, procurando integrarlos a la vida total de la iglesia, en un clima de hermandad y amor cristiano.",
    imageLocation: GPS,
  },
  {
    title: "ADORACIÓN Y ALABANZAS",
    desc: "En el acto de adoración enriquecemos nuestra vida espiritual, pues la vida de Dios nos es ofrecida en el Cristo que hace la presencia en el culto. La adoración no es el fin último de la vida cristiana, pero es la función de la iglesia y los creyentes, que nutre y unifica todas las demás funciones del Cuerpo de Cristo.",
    imageLocation: worship,
  },
  {
    title: "EDUCACIÓN CRISTIANA",
    desc: "La Educación cristiana tiene como meta proveer y facilitar aquellos procesos y experiencias necesarias, para que las personas puedan estudiar, examinar y reflexionar sobre los contenidos de su fe cristiana, particularmente en cuanto al amor redentor de Dios revelado en Jesucristo, para que cada persona pueda responder en fe y amor al Señor, para que se comprenda a sí misma y su situación humana, y para que unida a la comunidad cristiana, viva en el Espíritu todas sus relaciones humanas, y cumpla su discipulado en el mundo, perseverando en la esperanza cristiana.",
    imageLocation: Study,
  },
  {
    title: "MISIONES",
    desc: "Nuestro Señor Jesucristo ordenó que su Evangelio fuera predicado hasta lo último de la tierra. La responsabilidad misionera de la iglesia es ineludible. Todos tenemos parte en esa obligación, unos participando directamente como misioneros en distintas funciones, otros aportando de nuestros recursos para que esa labor sea posible. Por tanto, hacemos misión como individuos, en la congregación local, y a través de las instituciones y organizaciones de nuestra iglesia que tienen esta encomienda. Nuestra principal responsabilidad de respaldo y sostén misionero es a través de la Iglesia Cristiana Luz Y Vida MC Inc. y las entidades eclesiásticas que éstas sostienen.",
    imageLocation: mission,
  },
  {
    title: "ORACIÓN",
    desc: "El Ministerio de Oración es esencialmente importante en la existencia y sostenimiento de la vida espiritual de la Iglesia. Este ministerio promulgara constantemente, estimulara e inspirara al cuerpo corporativo de la Iglesia a mantener viva la oración en todo asunto y en todo tiempo tal como el Señor nos enseñó a orar sin cesar.",
    imageLocation: prayer,
  },
  {
    title: "CONSEJERÍA PASTORAL",
    desc: "La consejería es otorgada por el Pastor Principal y será considerada como consejo de parte del Señor siempre y cuando dicho consejo sea bíblico, de carácter sano, este en línea con la visión y misión de la iglesia, y estimule la unión entre hermanos. Toda reunión de consejo será efectuada con mayor confidencia.",
    imageLocation: Therapy,
  },
  {
    title: "MINISTERIO DE PAREJAS",
    desc: "Llevar sanidad a todas las parejas de nuestra iglesia y otras parejas relacionadas, capacitándolas y equipándolas para sus vidas de pareja en Cristo Jesús",
    imageLocation: Couples,
  },
  {
    title: "MINISTERIO DE HOMBRES",
    desc: "El Ministerio de Hombres es la búsqueda activa de hombres para conectarlos con Dios, Su Palabra, y otros hombres, con el propósito de ganar, desarrollar y entrenar en Cristo al hombre de Dios.",
    imageLocation: Men,
  },
  {
    title: "MINISTERIO DE MUJERES",
    desc: "Fomentar el rol de la mujer desde una perspectiva cristiana, fortaleciendo las diferentes áreas de su vida. Poder ir en pos de las mujeres, ya sean solteras, casadas, separadas y/o divorciadas para que tengan un encuentro con Cristo. Y que participemos activamente y seamos unas fieles representantes de Dios en la iglesia, en los hogares y en nuestra comunidad.",
    imageLocation: Women,
  },
  {
    title: "MINISTERIO DE JÓVENES",
    desc: "Capturar a la juventud a través del amor de Jesús de modo que puedan reconocer el papel que juegan dentro de la iglesia y la sociedad, proporcionándoles las herramientas necesarias para poder enfrentar cualquier situación en la vida y salir más que vencedores en el nombre de nuestro Señor Jesucristo, además puedan entender el llamado de Dios en sus vidas y que sean jóvenes que impacten la sociedad donde viven con una vida recta delante de Dios.",
    imageLocation: Children,
  },
  {
    title: "MINISTERIO DE NIÑOS",
    desc: "Tener un ministerio de niños efectivo con un crecimiento de carácter espiritual, trasformador, innovador y creciente, llevando al niño a través de la enseñanza a que ame a Jesús y sea lleno del Espíritu Santo",
    imageLocation: Children,
  },
];

export default function Home() {
  return (
    <main>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="lg:m-auto mt-28">
          <NewMember />
        </div>
        <LanguageSelector />
        <Header />
        <div className={CopperplateBold.className}>
          <div className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
            <Text aText={"Ministerios"} />
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
