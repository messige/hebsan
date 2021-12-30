<!-- DEBUG-VIEW START 329 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Laetetur cor quaerentium Dominum :<br />
quaerite Dominum, et confirmamini :<br />
quaerite faciem eius semper.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que le cœur de ceux qui cherchent le Seigneur se réjouisse :<br />
cherchez le Seigneur, et soyez forts :<br />
cherchez sans cesse son visage.</ion-text></ion-col> </ion-row></ion-grid>Ps. Confitemini Domino,<br />
et invocate nomen eius :<br />
annuntiate inter gentes opera eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Acclamez le Seigneur,<br />
et invoquez son nom :<br />
annoncez ses œuvres parmi les nations.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Unam petii a Domino,<br />
hanc requiram :<br />
ut inhabitem in domo Domini.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">J’ai demandé une seule chose au Seigneur,<br />
c’est elle que je rechercherai :<br />
habiter dans la maison du Seigneur.</ion-text></ion-col> </ion-row></ion-grid>V./  Ut videam voluptatem Domini:<br />
et protegar a templo sancto eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Pour contempler les délices du Seigneur<br />
et vivre à l’abri de son temple.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Clamaverunt iusti,<br />
et Dominus exaudivit eos:<br />
et ex omnibus tribulationibus eorum<br />
liberavit eos.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Les justes ont lancé leur appel,<br />
et le Seigneur les a exaucés :<br />
et de toutes leurs détresses,<br />
il les a délivrés.</ion-text></ion-col> </ion-row></ion-grid>V./  Iuxta est Dominus his,<br />
qui tribulato sunt corde :<br />
et humiles spiritu salvabit.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur est aux côtés<br />
de ceux qui ont le cœur en détresse :<br />
et il sauvera les humbles d’esprit.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Lauda Ierusalem Dominum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Loue, Jérusalem, le Seigneur.</ion-text></ion-col> </ion-row></ion-grid> Lauda Deum tuum Sion.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Loue ton Dieu, Sion.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Domine, vivifica me secundum eloquium tuum :<br />
ut sciam testimonia tua.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, vivifiez-moi selon votre parole :<br />
que je connaisse vos révélations.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Laetabimur in salutari tuo :<br />
et in nomine Domini Dei nostri magnificabimur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nous nous réjouirons en votre salut :<br />
et dans le nom du Seigneur notre Dieu, nous serons glorifiés.</ion-text></ion-col> </ion-row></ion-grid>	
<br />
</template>
<script>
  export default {
    props: {
      annoABC: {
        type: String,    
      }
    }
  }
</script>	

<!-- DEBUG-VIEW ENDED 329 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
