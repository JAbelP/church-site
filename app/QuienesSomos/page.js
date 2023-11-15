import Image from "next/image";
import Header from "../component/headerComponent/header";
import NewMember from "../component/newMemberComponent/newMember";
import Footer from "../component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import Image1 from "../../public/QuienesSomosSVG/middleEyeCatch.svg";
import localFont from "next/font/local";


const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });

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
        <div className="flex flex-col text-center items-center mt-5">
        <div className={CopperplateBold.className}>
          <p className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
            Ministerios
          </p>
        </div>
          <h1 className="font-extrabold text-6xl pb-4">MISIÓN</h1>
          <p className="text-3xl pb-8">Somos una Iglesia que Ama y Restaura</p>
          <div>
            <h1 className="font-extrabold text-6xl pb-4">VISIÓN</h1>
            <p className="text-3xl pb-8">
              Evangelizar y Discipular a través del Sistema de Grupos Familiares
              la ciudad, mediante la formación de un Ministerio Hispano,
              haciendo de cada cristiano un discípulo.
            </p>
          </div>
          <Image src={Image1} alt="Beliefs" />
        </div>
        <Footer />
      </div>
    </main>
  );
}
