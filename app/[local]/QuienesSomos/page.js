import Image from "next/image";
import Header from "../../component/headerComponent/header";
import NewMember from "../../component/newMemberComponent/newMember";
import Footer from "../../component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import Image1 from "@/public/QuienesSomosSVG/middleEyeCatch.svg"
import localFont from "next/font/local";
import Text from "../../component/textComponents/text";
import LanguageSelector from "../../component/flagComponents/flagSelector";

const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });

export const metadata = {
  title: 'Quienes Somos',
  description: 'Quienes Somos Nosotros',
}

export default function Home() {
  return (
    <main className={ebG.className}>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="mt-28 mx-auto md:mt-0">
          <NewMember />
        </div>
        <div className="mt-13 md:mt-0">
          <Header />
        </div>
        <LanguageSelector />
        <div className="flex flex-col text-center items-center mt-5">
          <div className={CopperplateBold.className}>
            <div className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
              <Text aText={"Quienes Somos?"} />
            </div>
          </div>
          <h1 className="font-extrabold text-6xl pb-4">
            <Text aText={"MISIÓN"} />
          </h1>
          <div className="text-3xl pb-8">
            <Text aText={"Somos una Iglesia que Ama y Restaura"} />
          </div>
          <div>
            <h1 className="font-extrabold text-6xl pb-4">
              <Text aText={"VISIÓN"} />
            </h1>
            <p className="text-3xl pb-8">
              <Text
                aText={
                  "Evangelizar y Discipular a través del Sistema de Grupos Familiares la ciudad, mediante la formación de un Ministerio Hispano, haciendo de cada cristiano un discípulo."
                }
              />
            </p>
          </div>
          <Image src={Image1} alt="Beliefs" />
        </div>
        <Footer />
      </div>
    </main>
  );
}
