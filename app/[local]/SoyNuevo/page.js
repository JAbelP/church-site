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
      <EntirePage
        aboutYouHeader={t("About You")}
        nameText={t("Name")}
        ageText={t("Age")}
        genderText={t("Gender")}
        Male={t("Male")}
        Female={t("Female")}
        phoneText={t("Phone")}
        emailText={t("Email")}
        Evangalism={t("Evangalism")}
        Facebook={t("Facebook")}
        Convert={t("Convert")}
        selectGender = {t('Select Gender')}
        contactInformation = {t('Contact Information')}
        additionalInformation = {t('Additional Information')}
        howDidYouHear = {t('How Did You Hear')}
        selectAnOption = {t('Select An Option')}
        iWouldLikeTo = {t('I Would Like To')}
        joinTheChurch = {t('Join The Church')}
        talkToSomeone = {t('Talk To Someone')}
        doYouHaveaPetition = {t('Do You Have a Petition?')}
        friend = {t('Friend')}
        submitText={t('Submit')}
        bibleVerse = {t('Bible Verse')}
        bibleVerseCite = {t('Bible Verse Cite')}
      />
    </>
  );
}
