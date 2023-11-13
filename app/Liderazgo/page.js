import Image from "next/image";
import Header from "../component/headerComponent/header";
import NewMember from "../component/newMemberComponent/newMember";
import Footer from "../component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import MainEyeCatch from "../component/ministeriosComponents/mainEyeCatchLiderazgo";
import SubEyeCatch from "../component/ministeriosComponents/subEyeCatch";
import Image1 from "../../public/Leadership/TioyTia.jpg";
import Image2 from "../../public/Leadership/Colon.jpg";
import Image3 from "../../public/Leadership/Wellington.jpg";
import Image4 from "../../public/Leadership/DeRosa.jpg";

const ebG = EB_Garamond({ subsets: ["latin"] });

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

        
          <p className="text-5xl font-medium tracking-widest mx-auto">PASTORES</p>
        
        <SubEyeCatch
          title={"PASTORES"}
          names={"TOMAS Y INGRID RAMIREZ"}
          imageLocation={Image1}
          altText={"Pastores: TOMAS Y INGRID RAMIREZ"}
          type={2}
        />
          <p className="text-5xl font-medium tracking-widest mx-auto">
            PASTOR ASOCIADO
          </p>
        
        <SubEyeCatch
          title={"PASTOR ASOCIADO"}
          names={"ALDO Y BRENDA COLON"}
          imageLocation={Image2}
          altText={"Pastor Asociado: ALDO Y BRENDA COLON"}
          type={2}
        />

        <div className=" mt-16">
          <p className=" mb-8 text-center  text-4xl font-medium tracking-widest">
            Decons
          </p>
          <div className="flex md:flex-row md:justify-evenly flex-col gap-y-16">
            <SubEyeCatch
              names={"WELLINGTON Y MARCIA DE JESUS"}
              imageLocation={Image3}
              altText={"Decon "}
              type={2}
            />

            <SubEyeCatch
              names={"JOSE Y ANA PAULA DE LA ROSA"}
              imageLocation={Image4}
              altText={"Example"}
              type={2}
            />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
