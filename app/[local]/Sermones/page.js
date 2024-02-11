import Header from "../../component/headerComponent/header";
import NewMember from "../../component/newMemberComponent/newMember";
import Footer from "../../component/footerComponent/footer";
import localFont from "next/font/local";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import LanguageSelector from "../../component/flagComponents/flagSelector";

const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });

// export const metadata = {
//   title: 'Sermones',
//   description: 'Escuche Sermones Pasados',
// }
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("SermonesTitle"),
    description: t("SermonesDescription"),
  };
}

export default function Home() {
  const t = useTranslations("Sermons");
  const headerTranslations = useTranslations("Header");
  const headerTitles = [
    { Name: headerTranslations("Who Are We"), Link: "/QuienesSomos" },
    { Name: headerTranslations("Leadership"), Link: "/Liderazgo" },
    { Name: headerTranslations("Ministries"), Link: "/Ministerios" },
    { Name: headerTranslations("Events"), Link: "/Eventos" },
    { Name: headerTranslations("Sermons"), Link: "/Sermones" },
    // { Name: headerTranslations("Offerings"), Link: "/Ofrenda" },
  ];

  const sermonsList = [
    {
      Title: "El andar del creyente",
      Speaker: "Pastor Tomas Ramirez",
      Date: "Jan 23, 2024",
      Description:
        "Seguimos con la hermosa enseñanza de nuestro padre amado Jesucristo porque maravilloso son sus caminos",
      ImageURL: "ImageURL",
    },
    {
      Title: "La Bendición Espiritual del creyente de Cristo ",
      Speaker: "Hermano Julian Musa",
      Date: "Jan 23, 2024",
      Description:
        "De corazon deseo que Dios te permita llenar tu vida con esta palabra, no dejes de escuchar este maravilloso mensaje.",
    },
    {
      Title: "De donde vendrá mi ayuda",
      Speaker: "Julian Musa",
      Title: "Dependiendo de Dios",
      Speaker: "Pastor Aldo Colon",
      Date: "Dec 12, 2023",
      Description: "Dios quiere hablar y bendecir tu vida.",
    },
    {
      Title: "Una nueva vestimenta",
      Speaker: "Pastor Aldo Colon",
      Date: "Nov 23, 2023",
      Description:
        "Dios les permita seguir avanzando y seguir confiando en su camino, Este mensaje nos enseña la importancia de la vestimenta de Dios.",
    },
    {
      Title: "Iglesia Y Pastores",
      Speaker: "Pastor Tomas Ramirez",
      Date: "Nov 21, 2023",
      Description:
        "Dios quiere llegar a tu vida con este mensaje. No dejes de conocer la verdad y todo lo referente a su camino.",
    },
    {
      Title: "¿De quien eres esclavo?",
      Speaker: "Pastor Tomas M. Ramirez",
      Date: "Nov 18, 2023",
      Description:
        "Dios le permita seguir avanzando en todos sus proyectos, hoy Dios me ha permitido llevar un hermoso mensaje para todos mis hermanos en Cristo",
    },
    {
      Title: "La Iglesia",
      Speaker: "Tomas M. Ramirez",
      Date: "Oct 12, 2023",
      Description:
        "Deseo de Corazón que Dios este hablando a tu vida y bendiciéndote con este maravilloso mensaje.",
    },
    {
      Title: "La Iglesia Parte 2",
      Speaker: "Tomas M. Ramirez",
      Date: "Oct 12, 2023",
      Description:
        "Dios es maravillo y se esta glorificando de gran manera para que puedas conocer su camino.",
    },
    {
      Title: "momentos malos",
      Speaker: "Joshua de la Rosa",
      Date: "Oct 12, 2023",
      Description:
        "Esta poderosa palabra nos hace entender que Dios puede usar a nuestros jóvenes para grandes cosas.",
    },
    {
      Title: "Fijando los ojos en Cristo",
      Speaker: "Aldo Colon",
      Date: "Oct 12, 2023",
      Description:
        "Deseamos que Dios hable a tu corazón en este momento y te permita cumplir su palabra en tu vida.",
    },
    {
      Title: "Yo lo Hare",
      Speaker: "Tomas Ramirez",
      Date: "Sep 7, 2023",
      Description:
        "Deseo de corazón que esta palabra de Dios pueda bendecir tu vida y la de todos tus familiares de gran manera y permita que conozcas nuestro señor Jesucristo. Dios te bendiga y guarde",
    },
    {
      Title: "Viviendo según el llamado",
      Speaker: "Aldo Colon",
      Date: "Sep 1, 2023",
      Description: "",
    },
    {
      Title: "¡EL MUNDO NO ME PUEDE OFRECER NADA!",
      Speaker: "MISAEL RAMIREZ",
      Date: "Jul 2, 2023",
      Description: "",
    },
    {
      Title: "REMOVIENDO LAS CENIZAS, PARA QUE EL FUEGO NO SE APAGUE",
      Speaker: "MISAEL RAMIREZ",
      Date: "May 4, 2023",
      Description: "",
    },
  ];

  return (
    <main>
    <LanguageSelector/>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="lg:m-auto mt-28">
          <NewMember />
        </div>
        <Header headerTitles={headerTitles} />
        <div className={CopperplateBold.className}>
          <p className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
            {t("Sermons")}
          </p>
        </div>
        <div className="flex flex-col gap-y-6 mx-auto">
          {sermonsList.map((sermon) => (
            <div className="flex flex-row gap-x-3" key={sermon.Title}>
              <div>Image should go here</div>
              <div className="flex flex-col w-9/12">
                <p>{sermon.Title}</p>
                <p>{sermon.Speaker}</p>
                <p>{sermon.Date}</p>
                <p>{sermon.Description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">under construction</div>
        <Footer />
      </div>
    </main>
  );
}
