import useCalendarService       from "../components/ts/calendar-service";
export interface Menu {
  label: string;
  explanation: string;
  href: string;
  id: number;
}
const today               = new Date ( ) ;                //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
const { calendarSelect }  = useCalendarService ( today ) ;
const selectFeast         = calendarSelect.thisFeast ;
const selectDateFormat    = calendarSelect.thisDateFormat ;
const menuItems: Menu[]   = [
  { label: 'Messe du ' + selectDateFormat + " " + selectFeast ,
    explanation: '' ,
    href: '/nextFeast' ,
    id: 0 } ,
  { label: 'Un autre dimanche ou jour de fête',
    explanation: '',
    href: '/abcFeasts' ,
    id: 1 } ,
  { label: 'Semaine Sainte',
    explanation: '',
    href: '/sancta' ,
    id: 2 } ,
  { label: 'A propos de l\'application Hebsan',
    explanation: 'About Hebsan',
    href: '/about' ,
    id: 3 } ,
] ;

export const getMenuItems = () => menuItems;

export const getMenuItem = (id: number) => menuItems.find(m => m.id === id);