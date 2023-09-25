import Image from "next/image";
import Header from "../component/headerComponent/header";
import NewMember from "../component/newMemberComponent/newMember";
import Footer from "../component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import Image1 from "../../public/QuienesSomosSVG/middleEyeCatch.svg";

const ebG = EB_Garamond({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={ebG.className}>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="m-auto">
          <NewMember />
        </div>
        <Header />
        <h1 className="font-extrabold text-2xl">MISIÓN</h1>
        <p className="text-xl">Somos una Iglesia que Ama y Restaura</p>
        <div>
        <h1 className="font-extrabold text-2xl">
          VISIÓN
        </h1>
          <p className="text-xl">
            Evangelizar y Discipular a través del Sistema de Grupos Familiares
            la ciudad, mediante la formación de un Ministerio Hispano, haciendo
            de cada cristiano un discípulo.
          </p>
        </div>
        <Image src={Image1} alt="Beliefs" />

        <Footer />
      </div>
    </main>
  );
}
