<!-- DEBUG-VIEW START 119 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
Suscepimus, Deus,<br />
misericordiam tuam in medio templi tui.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nous avons reçu, Dieu,<br />
votre miséricorde, au milieu de votre temple.</ion-text></ion-col> </ion-row></ion-grid> Secundum nomen tuum, Domine (Deus),<br />
ita et laus tua in fines terrae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Comme votre nom, Seigneur (Dieu),<br />
telle aussi votre louange jusqu’aux confins de la terre.</ion-text></ion-col> </ion-row></ion-grid> Iustitia plena est dextera tua.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Votre droite est remplie de justice.</ion-text></ion-col> </ion-row></ion-grid>Ps. Magnus Dominus, et laudabilis nimis,<br />
in civitate Dei, in monte sancto eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Grand est le Seigneur, et digne de louange infiniment,<br />
dans la cité de Dieu, sur sa montagne sainte.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Esto mihi in Deum protectorem,<br />
et in locum refugii,<br />
ut salvum me facias.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Soyez pour moi mon Dieu protecteur,<br />
et ma place-forte :<br />
qu’ainsi vous me sauviez.</ion-text></ion-col> </ion-row></ion-grid>V./  Deus, in te speravi:<br />
Domine, non confundar in aeternum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dieu, en vous j’ai mis mon espérance :<br />
Seigneur, je ne serai pas confondu à jamais.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Venite ad me,<br />
omnes qui laboratis,<br />
et onerati estis :<br />
et ego reficiam vos.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Venez à moi, vous tous qui peinez<br />
et ployez sous le fardeau,<br />
et moi je vous soulagerai.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Magnus Dominus, et laudabilis nimis,<br />
in civitate Dei, in monte sancto eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Grand est le Seigneur, et digne de louange infiniment,<br />
dans la cité de Dieu, sur sa montagne sainte.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Magnus Dominus, et laudabilis nimis,<br />
in civitate Dei, in monte sancto eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Grand est le Seigneur, et digne de louange infiniment,<br />
dans la cité de Dieu, sur sa montagne sainte.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Offertorium</rubrique><br /><br />
Populum humilem salvum facies, Domine,<br />
et oculos superborum humiliabis :<br />
quoniam quis Deus praeter te, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous sauverez le peuple humble, Seigneur,<br />
et les regards des orgueilleux, vous les abaisserez :<br />
car qui est Dieu, à part vous, Seigneur ?.</ion-text></ion-col> </ion-row></ion-grid>V./  Clamor meus in conspectu eius:<br />
introivit in aures eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mon cri en sa présence<br />
est parvenu à ses oreilles.</ion-text></ion-col> </ion-row></ion-grid>V./  Liberator meus de gentibus iracundis :<br />
ab insurgentibus in me exaltabis me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mon libérateur des nations en furie :<br />
vous m’élèverez au-dessus de ceux qui se dressent contre moi.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Gustate et videte, quoniam suavis est Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Goûtez et voyez combien le Seigneur est doux.</ion-text></ion-col> </ion-row></ion-grid> Beatus vir qui sperat in eo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Heureux l’homme qui met son espérance en lui.</ion-text></ion-col> </ion-row></ion-grid>	
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

<!-- DEBUG-VIEW ENDED 119 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
