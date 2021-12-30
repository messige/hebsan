<!-- DEBUG-VIEW START 335 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Ne derelinquas me, Domine, Deus meus,<br />
ne discedas a me :<br />
intende in adiutorium meum,<br />
Domine virtus salutis meae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ne m’abandonnez pas, Seigneur, mon Dieu,<br />
ne vous éloignez pas de moi :<br />
hâtez-vous à mon secours,<br />
Seigneur, force de mon salut.</ion-text></ion-col> </ion-row></ion-grid>Ps. Domine, ne in furore tuo arguas me :<br />
neque in ira tua corripias me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, ne me reprenez pas dans votre fureur;<br />
et ne me punissez pas dans votre colère.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Suscepimus, Deus,<br />
misericordiam tuam in medio templi tui.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nous avons reçu, Dieu,<br />
votre miséricorde, au milieu de votre temple.</ion-text></ion-col> </ion-row></ion-grid> Secundum nomen tuum, Domine (Deus),<br />
ita et laus tua in fines terrae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Comme votre nom, Seigneur (Dieu),<br />
telle aussi votre louange jusqu’aux confins de la terre.</ion-text></ion-col> </ion-row></ion-grid>V./  Sicut audivimus,<br />
ita et vidimus in civitate Dei nostri<br />
in monte sancto eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Selon que nous l’avons entendu,<br />
ainsi l’avons-nous aussi vu dans la cité de notre Dieu,<br />
sur sa montagne sainte.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'B'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Verbo Domini caeli <span class="fc">firmati sunt</span><br />
et spiritu oris eius omnis virtus eorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">C’est par le verbe de Dieu que les cieux ont été affermis,<br />
et par le souffle de sa bouche, toute leur puissance.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
O quam bonus et suavis est, Domine,<br />
Spiritus tuus in nobis!<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Qu'il est bon et doux en nous, Seigneur,<br />
votre Esprit !<br /></ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Offertorium</rubrique><br /><br />
Benedic anima mea Domino,<br />
et noli oblivisci omnes retributiones eius :<br />
et renovabitur, sicut aquilae, iuventus tua.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Bénis, mon âme, Seigneur :<br />
et n’oublie pas toutes ses récompenses :<br />
et ta jeunesse sera renouvelée comme celle de l’aigle.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Notas mihi fecisti vias vitae:<br />
adimplebis me laetitia cum vultu tuo, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous m’avez fait connaître les voies de la vie :<br />
vous me comblerez de joie avec votre visage, Seigneur.</ion-text></ion-col> </ion-row></ion-grid>	
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

<!-- DEBUG-VIEW ENDED 335 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
