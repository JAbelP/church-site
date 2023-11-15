"use client";
import { useLanguageContext } from "../flagComponents/LanguageContext";

function Text({ aText }) {
  const { translate } = useLanguageContext();
  return <div className={cName}>{translate(aText)}</div>;
}

export default Text;
