
import useTranslate from "../components/ts/translate";
export interface Feast {
    feastID:    number ;
    title:      string ;
    titleTR:    string ;
  }
  let lang = "fr";
  const language = localStorage.getItem("lang");
  if (language) {
    lang = language;
  }
    const  arrayFeasts: Feast[]   = [
        {
            feastID: 0,
            title: "Domenica in Palmis",
            titleTR: useTranslate("inPalmis", lang),
          },
          {
            feastID: 1,
            title: "Domenica in Palmis",
            titleTR: useTranslate("domInPalmis", lang),
          },
          {
            feastID: 2,
            title: "Hebdomada Sancta Feria II",
            titleTR: useTranslate("feriaII", lang),
          },
          {
            feastID: 3,
            title: "Hebdomada Sancta Feria III",
            titleTR: useTranslate("feriaIII", lang),
          },
          {
            feastID: 4,
            title: "Hebdomada Sancta Feria IV",
            titleTR: useTranslate("feriaIV", lang),
          },
          {
            feastID: 5,
            title: "Hebdomada Sancta Feria V",
            titleTR: useTranslate("feriaV", lang),
          },
          {
            feastID: 6,
            title: "Hebdomada Sancta Feria VI",
            titleTR: useTranslate("feriaVI", lang),
          },
          {
            feastID: 7,
            title: "Hebdomada Sancta Feria VII",
            titleTR: useTranslate("feriaVII", lang),
          },
          {
            feastID: 8,
            title: "Resurrectio Domini",
            titleTR: useTranslate("resurrectio", lang),
          },
]
export const getFeasts = () => arrayFeasts ; 
export const getFeast = (feastNum: number) => arrayFeasts [feastNum] ;