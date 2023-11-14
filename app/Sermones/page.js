import Header from "../component/headerComponent/header";
import NewMember from "../component/newMemberComponent/newMember";
import Footer from "../component/footerComponent/footer";
import localFont from "next/font/local";


const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });


export default function Home() {
  return (
    <main>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="lg:m-auto mt-28">
          <NewMember />
        </div>
          <Header />
        <div className={CopperplateBold.className}>
          <p className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
            Sermones
          </p>

        </div>
        <div className="flex flex-col items-center">
          under construction

        </div>
        <Footer />
      </div>
    </main>
  );
}