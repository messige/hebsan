import useCalendarService       from "../components/ts/calendarService";
type itemObj =  {     
label: string;
explanation: string;
href: string;
menuItemID: number; }

export interface MenuItem {
      Item:     Array<itemObj> ;

  }[]; []
const today               = new Date ( ) ;                //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
const { calendarSelect }  = useCalendarService ( today ) ;
const selectFeast         = calendarSelect.thisFeast ;
const selectDateFormat    = calendarSelect.thisDateFormat ;
const menuItems: MenuItem[] = [
   [ { label: 'Messe du ' + selectDateFormat ,
          explanation: selectFeast ,
          href: '/nextFeast' ,
          menuItemID: 0 } ,
        { label: 'Un autre dimanche ou jour de fête',
          explanation: 'Calendrier pour les trois prochaines années',
          href: '/abcFeasts' ,
          menuItemID: 1 } ,
        { label: 'Semaine Sainte',
          explanation: 'Les Grandes et les Petites Heures de la Semaine Sainte',
          href: '/sancta' ,
          menuItemID: 2 } ,
        { label: 'A propos de l\'application Hebsan',
          explanation: 'About Hebsan',
          href: '/about' ,
          menuItemID: 3 } ]  ,
     [ { label: 'DE - Messe du ' + selectDateFormat ,
          explanation: selectFeast ,
          href: '/nextFeast' ,
          menuItemID: 0 } ,
        { label: 'DE - Un autre dimanche ou jour de fête',
          explanation: 'Calendrier pour les trois prochaines années',
          href: '/abcFeasts' ,
          menuItemID: 1 } ,
        { label: 'DE - Semaine Sainte',
          explanation: 'Les Grandes et les Petites Heures de la Semaine Sainte',
          href: '/sancta' ,
          menuItemID: 2 } ,
        { label: 'DE - A propos de l\'application Hebsan',
          explanation: 'About Hebsan',
          href: '/about' ,
          menuItemID: 3 } ] ] ;

export const getMenuItems = menuItems [langIndex];
