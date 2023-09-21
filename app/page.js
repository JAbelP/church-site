import Image from "next/image";
import Header from "./component/headerComponent/header";
import MiddleEyeCatch from "./component/mainPageComponent/middleEyeCatch";
import NewMember from "./component/newMemberComponent/newMember";
import Footer from "./component/footerComponent copy/footer";
import { EB_Garamond } from "next/font/google";

const ebG = EB_Garamond({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white h-fit w-full flex flex-col">
      <div className="m-auto">
        <NewMember />
      </div>
      <Header />
      <div className="my-8 flex flex-row justify-center">
        <MiddleEyeCatch title={"swag"} desc={"Example Example"} />
        <MiddleEyeCatch title={"swag"} desc={"Example Example"} />
        <MiddleEyeCatch title={"swag"} desc={"Example Example"} />
      </div>
      <div className=" h-60 flex-col lg:mb-10 mb-80 ">
        <div className="h-60 pl-[154px] pr-[108px] text-black text-5xl font-normal capitalize ">
          <p className={ebG.className}>
            Él te ha declarado, oh hombre, lo que es bueno. ¿Y qué es lo que
            demanda el Señor de ti, sino solo practicar la justicia, amar la
            misericordia, y andar humildemente con tu Dios?
          </p>
        </div>
        <div className="text-black text-5xl  font-normal uppercase ">
          <p className={ebG.className}>- miqueas 6:8</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
