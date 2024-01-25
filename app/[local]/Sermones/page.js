import Header from "../../component/headerComponent/header";
import NewMember from "../../component/newMemberComponent/newMember";
import Footer from "../../component/footerComponent/footer";
import localFont from "next/font/local";
import { useTranslations } from "next-intl";

const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });

export const metadata = {
  title: 'Sermones',
  description: 'Escuche Sermones Pasados',
}

export default function Home() {
  const t = useTranslations("Sermons");

  return (
    <main>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="lg:m-auto mt-28">
          <NewMember />
        </div>
          <Header />
        <div className={CopperplateBold.className}>
          <p className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
            {t('Sermons')}
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