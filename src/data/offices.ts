export interface Office {
  officeID:   number ;
  officeName: string ;
  linkTo:     string ;
  officeHref: string ;
  linkToTR:   string ;
  linkParams: number ;
  feasts:     Array<number> ;
}
const officeItems: Office[]   = [
  { officeID:   -1 ,
    officeName: 'No Office name' ,
    linkTo:     '' ,
    officeHref: '', 
    linkToTR:   '' ,
    linkParams: 0 ,    
    feasts:     [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] } ,
 {  officeID:   1 ,
    officeName: 'Ad Laudes' ,
    linkTo:     'HoraMajor' ,
    officeHref: '/HoraMajor', 
    linkToTR:   'HoraMajorTR' ,
    linkParams: 1 ,      // 0:In Palmis Sabb , 1:in Palmis, 2:feria II, 3:III, 4:IV, 5:V, 6:VI, 7:Sabb., 8:Resur
    feasts:     [ 0, 1, 1, 1, 1, 1, 1, 1, 1 ] } ,
  { officeID:   3 ,
    officeName: 'Ad Tertiam',
    linkTo:     'HoraMinor' ,
    officeHref: '/HoraMinor', 
    linkToTR:   'HoraMinorTR' ,
    linkParams: 3 ,
    feasts:     [ 0, 1, 1, 1, 1, 1, 1, 1, 0 ] } ,
  { officeID:   6 ,
    officeName: 'Ad Sextam',
    linkTo:     'HoraMinor' ,
    officeHref: '/HoraMinor', 
    linkToTR:   'HoraMinorTR' ,
    linkParams: 6 ,
    feasts:     [ 0, 1, 1, 1, 1, 1, 1, 1, 0 ] } ,
  { officeID:   9 ,
    officeName: 'Ad Nonam',
    linkTo:     'HoraMinor' ,
    officeHref: '/HoraMinor',
    linkToTR:   'HoraMinorTR' , 
    linkParams: 9 ,
    feasts:     [ 0, 1, 1, 1, 1, 1, 1, 1, 0 ] } ,
  { officeID:   2 ,
    officeName: 'Ad Vesperas',
    linkTo:     'HoraMajor' ,
    officeHref: '/HoraMajor',
    linkToTR:   'HoraMajorTR' , 
    linkParams: 2 ,
    feasts:     [ 1, 1, 1, 1, 1, 0, 0, 0, 1 ] } ,
  { officeID:   0 ,
    officeName: 'Ad Completorium',
    linkTo:     'Completorium' ,
    officeHref: '/Completorium',
    linkToTR:   'CompletoriumTR' , 
    linkParams: 0 ,
    feasts:     [ 1, 1, 1, 1, 1, 1, 1, 0, 1 ] } ,
] ;
function getThisOffice ( officeNum: number ) {
  const thisOffice = officeItems.find(m => m.officeID === officeNum );
  if ( thisOffice ) {
      return  thisOffice }
  else return officeItems [0]
}
export const getOffices = () => officeItems ;
export const getOffice = (officeNum: number) => getThisOffice (officeNum);

