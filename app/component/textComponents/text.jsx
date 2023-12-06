"use client";
import { useLanguageContext } from "../flagComponents/LanguageContext";

function Text({ aText }) {
  const { translate } = useLanguageContext();
  return <p>{translate(aText)}</p>;
}

export default Text;
