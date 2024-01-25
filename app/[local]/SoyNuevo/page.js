import EntirePage from "../../component/newMemberComponent/newMemberEntirePage";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Soy Nuevo",
  description: "Únase a nuestra Iglesia",
};

export default function Home() {
  const t = useTranslations("NewMembers");

  return (
    <>
      <EntirePage />
    </>
  );
}
