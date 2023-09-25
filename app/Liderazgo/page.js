import Image from "next/image";
import Header from "../component/headerComponent/header";
import NewMember from "../component/newMemberComponent/newMember";
import Footer from "../component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
// import SubEyeCatch from "../component/liderazgoComponents/subEyeCatch";
// import MainEyeCatch from "../component/liderazgoComponents/mainEyeCatch";
// import subEyeCatch from "../component/liderazgoComponents/subEyeCatch";
// import TestImage1 from "../../public/Leadership/TestImage.png";
// import TestImage2 from "../../public/Leadership/TestImage2.png";
// import Image1 from "../../public/Leadership/TioyTia.png";

const ebG = EB_Garamond({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={ebG.className}>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="m-auto">
          <NewMember />
        </div>
        <Header />

        {/* <MainEyeCatch
          title={"PASTORES"}
          names={"TOMAS & INGRID RAMIREZ"}
          imageLocation={Image1}
          altText={"Test"}
        />

        <MainEyeCatch
          title={"PASTOR ASOCIADO"}
          names={"ALDO Y BRENDA COLON"}
          imageLocation={TestImage1}
          altText={"Test"}
        />

        <div className=" mt-16">
          <p className=" mb-8 text-center  text-4xl font-medium tracking-widest">
            Decons
          </p>
          <div className="flex flex-row justify-around">
            <SubEyeCatch
              names={"WELLINGTON Y MARCIA DE JESUS"}
              imageLocation={TestImage2}
              altText={"Example"}
            />

            <SubEyeCatch
              names={"JOSE Y ANA PAULA DE LA ROSA"}
              imageLocation={TestImage2}
              altText={"Example"}
            />
          </div>
        </div> */}

        <Footer />
      </div>
    </main>
  );
}
