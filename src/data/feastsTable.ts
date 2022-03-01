
import useTranslate from "../components/ts/translateService";
export interface InterfaceFeast {
    feastID:    number ;
    titleLA:      string ;
    titleTR:    string ;
  }
  let lang = "fr";
  const language = localStorage.getItem("lang");
  if (language) {
    lang = language;
  }
    const  arrayFeasts: InterfaceFeast[]   = [
        {
            feastID: 0,
            titleLA: "Domenica in Palmis",
            titleTR: useTranslate("inPalmis", lang),
          },
          {
            feastID: 1,
            titleLA: "Domenica in Palmis",
            titleTR: useTranslate("domInPalmis", lang),
          },
          {
            feastID: 2,
            titleLA: "Hebdomada Sancta Feria II",
            titleTR: useTranslate("feriaII", lang),
          },
          {
            feastID: 3,
            titleLA: "Hebdomada Sancta Feria III",
            titleTR: useTranslate("feriaIII", lang),
          },
          {
            feastID: 4,
            titleLA: "Hebdomada Sancta Feria IV",
            titleTR: useTranslate("feriaIV", lang),
          },
          {
            feastID: 5,
            titleLA: "Hebdomada Sancta Feria V",
            titleTR: useTranslate("feriaV", lang),
          },
          {
            feastID: 6,
            titleLA: "Hebdomada Sancta Feria VI",
            titleTR: useTranslate("feriaVI", lang),
          },
          {
            feastID: 7,
            titleLA: "Hebdomada Sancta Feria VII",
            titleTR: useTranslate("feriaVII", lang),
          },
          {
            feastID: 8,
            titleLA: "Resurrectio Domini",
            titleTR: useTranslate("resurrectio", lang),
          },
]
export const getFeasts = () => arrayFeasts ; 
export const getFeast = (feastNum: number) => arrayFeasts [feastNum] ;