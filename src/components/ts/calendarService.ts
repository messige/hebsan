import format from "date-fns/format";
import getYear from "date-fns/getYear";
import addDays from "date-fns/addDays";
import getDay from "date-fns/getDay";
import addWeeks from "date-fns/addWeeks";
import nextSunday from "date-fns/nextSunday";
import compareDesc from "date-fns/compareDesc";
import useTranslate from "./translateService";

export default function (thisDay: Date) {
  let lang = "fr";
  const language = localStorage.getItem("lang");
  if (language) {
    lang = language;
  }
  //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
  thisDay = addDays(thisDay, -1); // we keep the feast until the next day.
  // Anyway problem with date() when on the day of the feast
  const civilYear = getYear(thisDay);
  const toDay = new Date();
  const lastDate = addDays(toDay, 1102); // 3 years + 1 week after today
  let annoMod = civilYear % 3;
  const annoArray = ["C", "A", "B"];
  const annoABC = annoArray[annoMod];
  annoMod = (civilYear + 1) % 3;
  const annoABCPlus1 = annoArray[annoMod]; // liturgical anno from Advent
  let i = 0;
  let j = 0;
  let feastIndex = "";
  let indexPerAnnum = 0;
  let originalString = "";
  let incrementDate = new Date(civilYear, 0, 1);
  let arrayFeasts = [];
  const calendarArray = [
    {
      calendarFeast: "",
      calendarDate: new Date(civilYear - 1, 11, 31),
      calendarABC: "",
    },
  ];
  const calendarFrom = [
    {
      thisFeast: "",
      thisFeastIndex: "",
      thisDateWeekDay: "",
      thisDateFormat: "",
      thisAnnoABC: "",
      thisAnnoABCDisplay: "",
    },
  ];
  class CalendarItem {
    calendarFeast: string;
    calendarDate: Date;
    calendarABC: string;
    constructor(
      calendarFeast: string,
      calendarDate: Date,
      calendarABC: string
    ) {
      this.calendarFeast = calendarFeast;
      this.calendarDate = calendarDate;
      this.calendarABC = calendarABC;
    }
  }
  const pushItem = function (obj: {
    calendarFeast: string;
    calendarDate: Date;
    calendarABC: string;
  }) {
    calendarArray.push(obj);
  };
  const dateWeekDay = function (obj: {
    calendarFeast: string;
    calendarDate: Date;
    calendarABC: string;
  }) {
    const daysTR = [
      useTranslate("sunday", lang),
      useTranslate("monday", lang),
      useTranslate("tuesday", lang),
      useTranslate("wednesday", lang),
      useTranslate("thursday", lang),
      useTranslate("friday", lang),
      useTranslate("saturday", lang),
    ];
    return (
      daysTR[obj.calendarDate.getDay()] 
    );
  };
  const dateFormat = function (obj: {
    calendarFeast: string;
    calendarDate: Date;
    calendarABC: string;
  }) {
    return (
      format(obj.calendarDate, "dd/MM/yyyy")
    );
  };
  const removeSpaces = function (myString: string): string {
    const existSpace = myString.includes(" "); 
    // The includes() method determines whether a string contains the specified characters.
    // Returns true if the string contains the characters, and false if not.
    if (existSpace) {
      // the string has space(s)
      return removeSpaces(myString.replace(" ", "")); // function invokes itself
    } else {
      return myString;
    }
  };
  // Easter: source: http://www.irt.org/articles/js052/
  const century = Math.floor(civilYear / 100);
  const N = civilYear - 19 * Math.floor(civilYear / 19);
  const K = Math.floor((century - 17) / 25);
  let I =
    century -
    Math.floor(century / 4) -
    Math.floor((century - K) / 3) +
    19 * N +
    15;
  I = I - 30 * Math.floor(I / 30);
  I =
    I -
    Math.floor(I / 28) *
      (1 -
        Math.floor(I / 28) *
          Math.floor(29 / (I + 1)) *
          Math.floor((21 - N) / 11));
  let J =
    civilYear +
    Math.floor(civilYear / 4) +
    I +
    2 -
    century +
    Math.floor(century / 4);
  J = J - 7 * Math.floor(J / 7);
  const L = I - J;
  const month = 3 + Math.floor((L + 40) / 44);
  const day = L + 28 - 31 * Math.floor(month / 4);
  const easter = new Date(civilYear, month - 1, day);
  const beforeAsh = addDays(easter, -49);
  const christmas = new Date(civilYear, 11, 25);
  const weeks = getDay(christmas) == 0 ? 6 : 5; // if Christmas is a Sunday, we need to go back one week further
  let xRex = addWeeks(christmas, -weeks);
  xRex = nextSunday(xRex);
  // 1 if first date < second ; 0 if dates are equal ; else -1
  let calendarObj = new CalendarItem(
    "",
    new Date(civilYear - 1, 11, 31),
    annoABC
  ); // intialize the calendar with a first record
  pushItem(calendarObj);
  if (getDay(new Date(civilYear, 0, 1)) == 0) {
    // if 1st January is a Sunday, feast is Dei genitricis Maria
    calendarObj = new CalendarItem(
      "Dei genitricis Maria",
      new Date(civilYear, 0, 1),
      annoABC
    );
    pushItem(calendarObj);
  }
  const epiphany = nextSunday(new Date(civilYear, 0, 1)); // Epiphany is celebrated Sunday between Jan 2 & 8
  calendarObj = new CalendarItem("Epiphania Domini", epiphany, annoABC);
  pushItem(calendarObj);
  const baptism = addWeeks(epiphany, 1);
  calendarObj = new CalendarItem("Baptismate Domini", baptism, annoABC);
  pushItem(calendarObj);
  i = 2;
  do {
    incrementDate = addWeeks(baptism, i - 1);
    calendarObj = new CalendarItem(
      "Tempus Per Annum " + i,
      incrementDate,
      annoABC
    );
    pushItem(calendarObj);
    i++;
  } while (compareDesc(incrementDate, beforeAsh) > 0);
  indexPerAnnum = i + 4;
  i = 1;
  do {
    incrementDate = addWeeks(beforeAsh, i);
    calendarObj = new CalendarItem(
      "Tempus Quadragesimae " + i,
      incrementDate,
      annoABC
    );
    pushItem(calendarObj);
    i++;
  } while (compareDesc(incrementDate, addWeeks(easter, -2)) > 0);
  calendarObj = new CalendarItem(
    "Dominica In Palmis",
    addWeeks(easter, -1),
    annoABC
  );
  pushItem(calendarObj);
  calendarObj = new CalendarItem(
    "Ad Vigiliam Paschalem   ",
    addDays(easter, -1),
    annoABC
  );
  pushItem(calendarObj);
  calendarObj = new CalendarItem("Resurrectio Domini", easter, annoABC);
  pushItem(calendarObj);
  for (i = 1; i < 6; i++) {
    incrementDate = addWeeks(easter, i);
    calendarObj = new CalendarItem(
      "Tempus Paschale " + (i + 1),
      incrementDate,
      annoABC
    );
    pushItem(calendarObj);
  }
  incrementDate = addWeeks(easter, i);
  calendarObj = new CalendarItem(
    "Ascensio Domini",
    addDays(easter, 39),
    annoABC
  );
  pushItem(calendarObj);
  arrayFeasts = [
    "Tempus Paschale 7",
    "In Festo Pentecostes",
    "Sanctissimae Trinitatis",
    "Corporis Et Sanguinis Christi",
  ];
  for (i = 0; i < 4; i++) {
    incrementDate = addWeeks(easter, 6 + i);
    calendarObj = new CalendarItem(arrayFeasts[i], incrementDate, annoABC);
    pushItem(calendarObj);
  }
  i = 0;
  do {
    incrementDate = addWeeks(easter, i + 10);
    calendarObj = new CalendarItem(
      "Tempus Per Annum " + indexPerAnnum,
      incrementDate,
      annoABC
    );
    pushItem(calendarObj);
    i++;
    indexPerAnnum++;
  } while (compareDesc(incrementDate, addWeeks(xRex, -1)) > 0);
  calendarObj = new CalendarItem("Christus rex", xRex, annoABC);
  pushItem(calendarObj);
  for (i = 1; i < 5; i++) {
    incrementDate = addWeeks(xRex, i);
    calendarObj = new CalendarItem(
      "Tempus Adventus " + i,
      incrementDate,
      annoABCPlus1
    );
    pushItem(calendarObj);
  }
  calendarObj = new CalendarItem(
    "In Nativitate Domini",
    christmas,
    annoABCPlus1
  );
  pushItem(calendarObj);
  if (getDay(christmas) > 0) {
    calendarObj = new CalendarItem(
      "Sanctae Familiae",
      nextSunday(christmas),
      annoABCPlus1
    );
    pushItem(calendarObj);
  }
  const assumptio = new Date(civilYear, 7, 15);
  const sanctorum = new Date(civilYear, 10, 1);
  if (getDay(assumptio) == 0 || getDay(sanctorum) == 0) {
    for (const thisItem of calendarArray) {
      if (compareDesc(thisItem.calendarDate, assumptio) == 0) {
        thisItem.calendarFeast = "Beatae Mariae Virginis Assumptio";
      }
      if (compareDesc(thisItem.calendarDate, sanctorum) == 0) {
        thisItem.calendarFeast = "Omnium Sanctorum";
      }
    }
  }
  if (getDay(assumptio) > 0) {
    calendarObj = new CalendarItem(
      "Beatae Mariae Virginis Assumptio",
      assumptio,
      annoABC
    );
    pushItem(calendarObj);
  }
  if (getDay(sanctorum) > 0) {
    calendarObj = new CalendarItem("Omnium Sanctorum", sanctorum, annoABC);
    pushItem(calendarObj);
  }
  const praesentatio = new Date(civilYear, 1, 2); // fêtes de précepte
  const iosephSponsus = new Date(civilYear, 2, 19);
  const petriPauli = new Date(civilYear, 5, 29);
  const bmConceptio = new Date(civilYear, 11, 8);
  if (
    getDay(praesentatio) == 0 ||
    getDay(iosephSponsus) == 0 ||
    getDay(petriPauli) == 0 ||
    getDay(bmConceptio) == 0
  ) {
    for (const thisItem2 of calendarArray) {
      if (compareDesc(thisItem2.calendarDate, praesentatio) == 0) {
        thisItem2.calendarFeast = "Praesentatio Domini";
      }
      if (compareDesc(thisItem2.calendarDate, iosephSponsus) == 0) {
        thisItem2.calendarFeast = "Ioseph Sponsus";
      }
      if (compareDesc(thisItem2.calendarDate, petriPauli) == 0) {
        thisItem2.calendarFeast = "Petri Et Pauli";
      }
      if (compareDesc(thisItem2.calendarDate, bmConceptio) == 0) {
        thisItem2.calendarFeast = "Beatae Mariae Virginis Conceptio";
      }
    }
  }
  const calendarArraySorted = calendarArray.sort( // see https://www.cloudhadoop.com/typescript-sort-object-array/
    (first, second) => 0 - (first.calendarDate > second.calendarDate ? -1 : 1)
  );
  let k = 0;
  let AnnoABCPrev = annoABC + "1"; // anything but not blank
  let AnnoABCDisplay = "";
  for (j = 1; j < calendarArraySorted.length; j++) {
    /*             Compare the two dates and return -1 if the first date is after the second,. 
            Examples: compareDesc returns 0 if the given dates are equal, 
            compareDesc returns 1 if the first date is before the second */
    if (compareDesc(thisDay, calendarArraySorted[j].calendarDate) > -1) {
      if (compareDesc(calendarArraySorted[j].calendarDate, lastDate) > 0) {
        originalString = calendarArraySorted[j].calendarFeast;
        feastIndex = removeSpaces(originalString);
        if (calendarArraySorted[j].calendarABC == AnnoABCPrev) {
          AnnoABCDisplay = "";
        } else {
          AnnoABCDisplay = " - Anno " + calendarArraySorted[j].calendarABC;
          AnnoABCPrev = calendarArraySorted[j].calendarABC;
        }
        calendarFrom[k] = {
          thisFeast: calendarArraySorted[j].calendarFeast,
          thisFeastIndex: feastIndex,
          thisDateWeekDay: dateWeekDay(calendarArraySorted[j]),
          thisDateFormat: dateFormat(calendarArraySorted[j]),
          thisAnnoABC: calendarArraySorted[j].calendarABC,
          thisAnnoABCDisplay: AnnoABCDisplay,
        };
        k++;
      }
    }
  }
  return { calendarFrom};
}
