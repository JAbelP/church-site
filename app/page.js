import Image from "next/image";
import Header from "./component/headerComponent/header";
import MiddleEyeCatch from "./component/mainPageComponent/middleEyeCatch";
import NewMember from "./component/newMemberComponent/newMember";
import Footer from "./component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";

const ebG = EB_Garamond({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white lg:h-fit lg:w-full h-auto w-screen flex flex-col text-black overflow-clip">
      <div className="mt-28 mx-auto md:mt-0">
        <NewMember />
      </div>
      <div className="mt-13 md:mt-0">
        <Header />
      </div>
      <div className="  mt-12 mb-10 md:my-8 flex flex-col md:flex-row md:justify-center gap-y-7">
        <MiddleEyeCatch title={"swag"} desc={"Example Example"} />
        <MiddleEyeCatch title={"swag"} desc={"Example Example"} />
        <MiddleEyeCatch title={"swag"} desc={"Example Example"} />
      </div>
      <div className=" h-60 flex-col lg:mb-10 mb-80 ">
        <div className="h-fit lg:pl-[154px] lg:pr-[108px] text-black lg:text-5xl text-2xl mx-6 font-normal capitalize mb-4 ">
          <p className={ebG.className}>
            Él te ha declarado, oh hombre, lo que es bueno. ¿Y qué es lo que
            demanda el Señor de ti, sino solo practicar la justicia, amar la
            misericordia, y andar humildemente con tu Dios?
          </p>
        </div>
        <div className="text-black text-5xl  font-normal uppercase relative text-right pr-16 overflow-hidden">
          <p className={ebG.className}>- miqueas 6:8</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
