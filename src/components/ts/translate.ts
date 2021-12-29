export default function (term: string, lang: string) {
  //function translate(term: string, lang: string) {
  const translatioEntries = [
    "massOf",
    "calendar",
    "calendarExpla",
    "sancta",
    "sanctaExpla",
    "about",
    "aboutExpla",
    "tonCom",
    "inPalmis",
    "domInPalmis",
    "feriaII",
    "feriaIII",
    "feriaIV",
    "feriaV",
    "feriaVI",
    "feriaVII",
    "resurrectio",
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];
  const translation = [
    {
      fr: "Messe du ",
      de: "DE -Messe du",
    },
    {
      fr: "Textes latins et traductions des messes des dimanches et jours de fête",
      de: "DE - Textes latins et traductions des messes des dimanches et jours de fête",
    },
    {
      fr: "Calendrier pour les 3 prochaines années",
      de: "DE - Calendrier pour les 3 prochaines années",
    },
    {
      fr: "Semaine Sainte",
      de: "DE - Semaine Sainte",
    },
    {
      fr: "Les Grandes et les Petites Heures de la Semaine Sainte",
      de: "DE - Les Grandes et les Petites Heures de la Semaine Sainte",
    },
    {
      fr: "A propos de l'application Hebsan",
      de: "DE - A propos de l'application Hebsan",
    },
    {
      fr: "Notes explicatives et politique de confidentialité",
      de: "DE - Notes explicatives et politique de confidentialité",
    },
    {
      fr: "Tons communs",
      de: "DE - Tons communs",
    },
    {
      fr: "Dimanche des Rameaux - la veille",
      de: "DE - Dimanche des Rameaux - la veille",
    },
    {
      fr: "Dimanche des Rameaux",
      de: "DE - Dimanche des Rameaux",
    },
    {
      fr: "Lundi Saint",
      de: "DE - Lundi Saint",
    },
    {
      fr: "Mardi Saint",
      de: "DE - Mardi Saint",
    },
    {
      fr: "Mercredi Saint",
      de: "DE - Mercredi Saint",
    },
    {
      fr: "Jeudi Saint",
      de: "DE - Jeudi Saint",
    },
    {
      fr: "Vendredi Saint",
      de: "DE - Vendredi Saint",
    },
    {
      fr: "Samedi Saint",
      de: "DE - Samedi Saint",
    },
    {
      fr: "Dimanche de Pâques",
      de: "DE - Dimanche de Pâques",
    },
    {
      fr: "Dimanche",
      de: "Sonntag",
    },
    {
      fr: "Lundi",
      de: "Montag",
    },
    {
      fr: "Mardi",
      de: "Dienstag",
    },
    {
      fr: "Mercredi",
      de: "Mittwoch",
    },
    {
      fr: "Jeudi",
      de: "Donnerstag",
    },
    {
      fr: "Vendredi",
      de: "Freitag",
    },
    {
      fr: "Samedi",
      de: "Samstag",
    },  
  ];
  const indexOfTerm = translatioEntries.indexOf(term);
  let returnValue = "";
  if (indexOfTerm === -1)
    // The indexOf() method returns -1 if the value is not found.
    returnValue = "No translation found for " + term;
  else if (lang === "de") returnValue = translation[indexOfTerm].de;
  else returnValue = translation[indexOfTerm].fr;
  return returnValue;
}
