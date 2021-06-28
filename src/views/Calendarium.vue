<template>
  <ion-grid>
    <template v-for="(thisFeast, index) in calendarSelect" :key="index">
      <ion-row>
        <ion-col  size-lg="4" size-md="3" size-sm="4">
          {{thisFeast.thisDateFormat}}
        </ion-col>  
        <ion-col  size-lg="5" size-md="9" size-sm="8">
          <router-link :to="{ name: 'PiecesForAFeast', 
                        params: { feastIndex: thisFeast.thisFeastIndex , 
                                  feast: thisFeast.thisFeast , 
                                  feastDate: thisFeast.thisDateFormat , 
                                  feastAnnoABC: thisFeast.thisAnnoABC }}">
                        {{thisFeast.thisFeast}} <strong>{{thisFeast.thisAnnoABCDisplay}}</strong>
          </router-link>
        </ion-col>
      </ion-row>
    </template>
  </ion-grid> 
</template>

<script lang="ts"> 
  import { IonGrid , IonRow , IonCol } from '@ionic/vue';
  import { defineComponent }  from 'vue';
  import format       from "date-fns/format" ;
  import getYear      from 'date-fns/getYear' ;
  import getMonth     from 'date-fns/getMonth' ;
  import getDate      from 'date-fns/getDate' ;
  import addDays      from 'date-fns/addDays' ;
  import getDay       from 'date-fns/getDay' ;
  import addWeeks     from 'date-fns/addWeeks' ;
  import nextSunday   from 'date-fns/nextSunday' ;  
  import compareDesc  from 'date-fns/compareDesc' ;
  export default defineComponent ( {
    name: 'Tab2',
    components: { IonGrid , IonRow ,IonCol } ,
    props: {    startyear:  { type: Number , default: getYear ( new Date ( ) ) } , 
                startmonth: { type: Number , default: getMonth ( new Date ( ) ) } , 
                startday:   { type: Number , default: getDate ( new Date ( ) ) } } ,
    setup ( props ) {
      var SundayAndFeast = function ( startyear: number , startmonth: number , startday: number ) { 

      let originalString = "" ;                                                        //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
      let today         = new Date ( startyear , startmonth , startday ) ;
      today             = addDays  (  today , -1 ) ;     // we keep the feast until the next day. Anyway problem with date() when on the day of the feast
      let civilYear     = getYear ( today ) ;
      let annoMod	    = civilYear % 3 ;
      let annoArray	    = [ "C","A" , "B" ] ;
      let annoABC	    = annoArray [ annoMod ] ;
      annoMod		    = ( civilYear + 1 ) % 3 ;
      let annoABCPlus1	= annoArray [ annoMod ] ;       // liturgical anno from Advent
      let i             = 0 ;
      let j             = 0 ;
      let feastIndex    = "" ;
      let indexPerAnnum = 0 ;
      let thisFeast     = "" ;
      let currentDate   = new Date (civilYear , 0 , 1 ) ; 
      let arrayFeasts   = [] ;
      let calendarArray = [ { calendarFeast:"" , calendarDate: new Date ( civilYear -1 , 11, 31  ) , calendarABC: "" } ] ;
      let calendarSelect = [ { thisFeast:"" , thisFeastIndex: "" , thisDateFormat: "" , thisAnnoABC: "" , thisAnnoABCDisplay:"" } ] ;
      class CalendarItem {
        calendarFeast:  string ;
        calendarDate:   Date ;
        calendarABC:    string ;
        constructor ( calendarFeast:  string , calendarDate: Date , calendarABC: string ) {
          this.calendarFeast = calendarFeast ;
          this.calendarDate = calendarDate ;
          this.calendarABC = calendarABC } }
      var pushItem = function ( obj: {calendarFeast:  string , calendarDate: Date , calendarABC: string } ) { 
          calendarArray.push (obj) }
      var dateFormat = function ( obj: {calendarFeast:  string , calendarDate: Date , calendarABC: string } ) { 
        let daysFR         = [ "Dimanche", "Lundi\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "Mardi\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "Mercredi", "Jeudi\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "Vendredi", "Samedi\u00A0\u00A0\u00A0\u00A0" ] ;
        return  daysFR [ obj.calendarDate.getDay () ] + " " + format ( obj.calendarDate , 'dd/MM/yyyy' )  } 
      var removeSpaces = function ( myString:  string ): string {     
       var existSpace = myString.includes( " " ) ;  // The includes() method determines whether a string contains the specified characters.
                                                      // Returns true if the string contains the characters, and false if not.
        if ( existSpace ) {         // the string has space(s)
           return ( removeSpaces ( myString.replace ( ' ' , '' ) ) ) ;     // function invokes itself
        } else {     
            return ( myString ) ;
        } 
      }; 
      // Easter: source: http://www.irt.org/articles/js052/
      let century     = Math.floor ( civilYear/100 ) ;
      let N           = civilYear - 19 * Math.floor ( civilYear/19 ) ;
      let K           = Math.floor ( ( century - 17 ) / 25 ) ;
      let I           = century - Math.floor ( century/4 ) - Math.floor ( ( century - K ) / 3 ) + 19 * N + 15;
      I               = I - 30 * Math.floor ( ( I/30 ) ) ;
      I               = I - Math.floor ( I/28 ) * ( 1 - Math.floor ( I/28 ) * Math.floor ( 29 / ( I + 1 ) ) * Math.floor ( ( 21 - N ) / 11 ) ) ;
      let J           = civilYear + Math.floor ( civilYear/4 ) + I + 2 - century + Math.floor ( century/4 ) ;
      J               = J - 7 * Math.floor ( J/7 ) ;
      let L           = I - J;
      let month       = 3 + Math.floor ( ( L + 40 ) / 44 ) ;
      let day         = L + 28 - 31 * Math.floor ( month/4 ) ;
      let easter      = new Date     ( civilYear, month - 1, day ) ;
      let beforeAsh   = addDays  ( easter , -49 ) ;
      let christmas   =  new Date ( civilYear, 11, 25 ) ;
      let weeks       = getDay    ( christmas ) == 0 ? 6 : 5 ; // if Christmas is a Sunday, we need to go back one week further
      let xRex        = addWeeks  ( christmas, - weeks ) ;
      xRex            = nextSunday ( xRex ) ;
        // 1 if first date < second ; 0 if dates are equal ; else -1
      let calendarObj = new CalendarItem ( "" , new Date ( civilYear -1 , 11, 31  ) , annoABC  ) ; // intialize the calendar with a first record
      //pushItem ( calendarObj ) ;       
      if ( getDay ( new Date ( civilYear , 0, 1  )  )  == 0 ) {    // if 1st January is a Sunday, fea  st is Dei genitricis Maria 
          calendarObj  = new CalendarItem ( "Dei genitricis Maria" , new Date ( civilYear , 0, 1  ) , annoABC ) ;
          pushItem  ( calendarObj ) } 
      let epiphany  = nextSunday ( new Date ( civilYear , 0 , 1 ) ); // Epiphany is celebrated Sunday between Jan 2 & 8
      calendarObj   = new CalendarItem ( "Epiphania Domini" , epiphany , annoABC ) ;
      pushItem      ( calendarObj ) ;
      let baptism   = addWeeks ( epiphany, 1 ) ;
      calendarObj   = new CalendarItem ( "Baptismate Domini" , baptism , annoABC ) ;
      pushItem      ( calendarObj ) ;
      i = 2 ;
      do {
        currentDate   = addWeeks ( baptism, i -1 ) ;
        calendarObj   = new CalendarItem ( "Tempus per annum " + i , currentDate , annoABC ) ;
        pushItem      ( calendarObj ) ;
        i++
      } while ( compareDesc ( currentDate , beforeAsh ) > 0 ) ;
      indexPerAnnum 	= i + 4 ;
      i = 1 ; 
      do {
        currentDate   = addWeeks ( beforeAsh , i ) ;
        calendarObj   = new CalendarItem ( "Tempus quadragesimae " + i , currentDate , annoABC ) ;
        pushItem      ( calendarObj ) ;
        i++ 
      } while ( compareDesc ( currentDate , addWeeks ( easter , -2 ) ) > 0 ) ;
      calendarObj   = new CalendarItem ( "Dominica in palmis" , addWeeks ( easter , -1 ) , annoABC ) ;
      calendarObj   = new CalendarItem ( "Ad Vigiliam Paschalem   " , addDays ( easter , -1 ) , annoABC ) ;      
      pushItem      ( calendarObj ) ; 
      calendarObj   = new CalendarItem ( "Resurrectio Domini" , easter , annoABC ) ;
      pushItem      ( calendarObj ) ;               
      for ( i = 1 ; i < 6 ; i++ ) { 
        currentDate   = addWeeks ( easter, i ) ;
        calendarObj   = new CalendarItem ( "Tempus paschale " + (i+1) , currentDate , annoABC ) ;
        pushItem      ( calendarObj ) }
      currentDate     = addWeeks ( easter, i ) ;
      calendarObj     = new CalendarItem ( "Ascensio Domini" , addDays ( easter , 39 ) , annoABC ) ;
      pushItem        ( calendarObj ) ;  
      arrayFeasts = [ "Tempus paschale 7" , "Pentecostes" , "Sanctissimae Trinitatis" , "Corporis et sanguinis Christi" ] ;
      for ( i = 0 ; i < 4 ; i++ ) { 
        currentDate   = addWeeks ( easter, 6 + i ) ;
        calendarObj   = new CalendarItem ( arrayFeasts [i] , currentDate , annoABC ) ;
        pushItem      ( calendarObj ) }
      i = 0 ;
      do {  currentDate = addWeeks ( easter, i + 10 ) ;
        calendarObj   = new CalendarItem ( "Tempus per annum " + indexPerAnnum , currentDate , annoABC ) ;
        pushItem      ( calendarObj ) ;               
        i++
        indexPerAnnum ++ ;
      } while ( compareDesc ( currentDate , addWeeks ( xRex, -1 ) ) > 0 ) ;
      calendarObj   = new CalendarItem ( "Christus rex" , xRex , annoABC ) ;
      pushItem      ( calendarObj ) ;
      for ( i = 1 ; i < 5 ; i++ ) { 
        currentDate = addWeeks ( xRex, i ) ;
        calendarObj   = new CalendarItem ( "Tempus adventus " + i , currentDate , annoABCPlus1 ) ;
        pushItem      ( calendarObj ) } 
      calendarObj   = new CalendarItem ( "In Nativitate Domini" , christmas , annoABCPlus1 ) ;
      pushItem      ( calendarObj ) ; 
      if ( getDay ( christmas )  == 0 ) {
        thisFeast       = "Dei genitricis Maria" ; }
      else { thisFeast  = "Sanctae Familiae" }  
      calendarObj   = new CalendarItem ( thisFeast , nextSunday ( christmas ) , annoABCPlus1 ) ;
      pushItem      ( calendarObj ) ;
      let assumptio = new Date ( civilYear, 7, 15 ) ;
      let sanctorum = new Date ( civilYear, 10, 1 ) ; 
      if ( getDay ( assumptio ) == 0  || getDay ( sanctorum ) == 0) {
        for ( var thisItem of calendarArray ) {
          if ( compareDesc ( thisItem.calendarDate , assumptio ) == 0 ) { thisItem.calendarFeast = "Beatae Mariae Virginis Assumptio" }
          if ( compareDesc ( thisItem.calendarDate , sanctorum ) == 0 ) { thisItem.calendarFeast = "Omnium sanctorum" }
        }
      } 
      if ( getDay ( assumptio ) > 0 ) {
        calendarObj   = new CalendarItem ( "Beatae Mariae Virginis Assumptio" , assumptio , annoABC ) ;
        pushItem      ( calendarObj ) }
      if ( getDay ( sanctorum ) > 0 ) {
        calendarObj   = new CalendarItem ( "Omnium sanctorum" , sanctorum , annoABC ) ;
        pushItem      ( calendarObj ) }
      let presentatio   = new Date ( civilYear , 1, 2 ) ;           // fêtes de précepte
      let iosephSponsus = new Date ( civilYear , 2, 19 ) ;
      let petriPauli    = new Date ( civilYear , 5, 29 ) ;
      let bmConceptio   = new Date ( civilYear , 11, 8 ) ;
      if ( getDay ( presentatio ) == 0 || getDay ( iosephSponsus ) == 0 || getDay ( petriPauli ) == 0 || getDay ( bmConceptio ) == 0) {
        for ( thisItem of calendarArray ) {
          if ( compareDesc ( thisItem.calendarDate , presentatio ) == 0 )    { thisItem.calendarFeast = "Presentatio Domini" }
          if ( compareDesc ( thisItem.calendarDate , iosephSponsus ) == 0 )  { thisItem.calendarFeast = "Ioseph sponsus" }
          if ( compareDesc ( thisItem.calendarDate , petriPauli ) == 0 )     { thisItem.calendarFeast = "Petri et Pauli" }
          if ( compareDesc ( thisItem.calendarDate , bmConceptio ) == 0 )    { thisItem.calendarFeast = "Beatae Mariae Virginis Conceptio" }
        }    
      }             
      let calendarArraySorted =           // see https://www.cloudhadoop.com/typescript-sort-object-array/
          calendarArray.sort((first, second) => 0 - (first.calendarDate > second.calendarDate ? -1 : 1)  ) ;      
          let k   = 0 ;
          let AnnoABCPrev     = "" ;
          let AnnoABCDisplay  = "" ;
          for (j = 1 ; j < calendarArraySorted.length ; j++ ) { 
            if ( compareDesc ( today ,calendarArraySorted[j].calendarDate ) > -1 )  {
              originalString = calendarArraySorted[j].calendarFeast ;
              feastIndex  = removeSpaces ( originalString ) ;
              if ( calendarArraySorted[j].calendarABC == AnnoABCPrev ) {
                AnnoABCDisplay  = "" ;
              } else {
                AnnoABCDisplay  = " - Anno " + calendarArraySorted[j].calendarABC ;
                AnnoABCPrev     = calendarArraySorted[j+1].calendarABC ; }
                calendarSelect [k] =  { thisFeast:calendarArraySorted[j].calendarFeast ,
                                        thisFeastIndex: feastIndex , 
                                        thisDateFormat: dateFormat ( calendarArraySorted[j] ) , 
                                        thisAnnoABC: calendarArraySorted[j].calendarABC ,
                                        thisAnnoABCDisplay :  AnnoABCDisplay }  
                k ++ ;
            }
          }
          return calendarSelect
      }
      var calendarSelect =  SundayAndFeast ( props.startyear, props.startmonth , props.startday ) ;
      return {  calendarSelect }
    } 
  } )
</script>
   
<style>
@import '../components/css/officii.css';
</style>