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
      de: "Messe des ",
    },
    {
      fr: "Textes latins et traductions des pièces du Propre",
      de: "Die lateinischen Texte und Übersetzungen der Gesänge des Propriums",
    },
    {
      fr: "Calendrier des dimanches et jours de fête pour les 3 prochaines années",
      de: "Kalender der Sonn- und Festtage der 3 kommenden Jahre",
    },
    {
      fr: "Semaine Sainte",
      de: "Karwoche",
    },
    {
      fr: "Les Grandes et les Petites Heures : partitions et traductions",
      de: "Die großen und die kleinen Stundengebete: Notentexte und Übersetzungen",
    },
    {
      fr: "A propos de l'application Hebsan",
      de: "Die Applikation Hebsan betreffend",
    },
    {
      fr: "Notes explicatives et politique de confidentialité",
      de: "Erläuterungen und Datenschutzrichtlinie",
    },
    {
      fr: "Tons communs",
      de: "Allgemeine Töne",
    },
    {
      fr: "Dimanche des Rameaux - la veille",
      de: "Palmsonntag - am Vortag",
    },
    {
      fr: "Dimanche des Rameaux",
      de: "Palmsonntag",
    },
    {
      fr: "Lundi Saint",
      de: "Montag der Karwoche",
    },
    {
      fr: "Mardi Saint",
      de: "Dienstag der Karwoche",
    },
    {
      fr: "Mercredi Saint",
      de: "Mittwoch der Karwoche",
    },
    {
      fr: "Jeudi Saint",
      de: "Gründonnerstag",
    },
    {
      fr: "Vendredi Saint",
      de: "Karfreitag",
    },
    {
      fr: "Samedi Saint",
      de: "Karsamstag",
    },
    {
      fr: "Dimanche de Pâques",
      de: "Ostersonntag",
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
