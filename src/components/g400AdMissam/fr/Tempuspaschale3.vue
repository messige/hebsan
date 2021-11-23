<!-- DEBUG-VIEW START 283 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Iubilate Deo omnis terra, alleluia :<br />
psalmum dicite nomini eius,<br />
date gloriam laudi eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jubilez pour Dieu, toute de la terre, alléluia :<br />
dites un psaume à l’honneur de son nom,<br />
rendez gloire à sa louange !</ion-text></ion-col> </ion-row></ion-grid>Ps. Dicite Deo,<br />
quam terribilia sunt opera tua, Domine,<br />
in multitudine virtutis tuae (mentientur tibi inimici tui)<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dites à Dieu :<br />
Que vos œuvres sont impressionnantes, Seigneur !<br />
dans l’abondance de votre puissance (vos ennemis seront réduits à mentir contre vous).</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Cognoverunt discipuli Dominum Iesum in fractione panis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Les disciples reconnurent le Seigneur Jésus à la fraction du pain.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Oportebat pati Christum<br />
et resurgere a mortuis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary"></ion-text></ion-col> </ion-row></ion-grid> Et ita intrare in gloriam suam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et entrer ainsi dans sa gloire.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Lauda anima mea Dominum:<br />
laudabo Dominum in vita mea :<br />
psallam Deo meo, quamdiu ero.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Loue, mon âme, le Seigneur ;<br />
je louerai le Seigneur durant ma vie :<br />
je psalmodierai pour mon Dieu aussi longtemps que je serai.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Surrexit Dominus,<br />
et apparuit Petro.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur est ressuscité,<br />
il est apparu à Pierre.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Cantate Domino, (et) benedicite nomen eius :<br />
bene nuntiate de die in diem salutare eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Chantez au Seigneur, (et) bénissez son nom :<br />
annoncez bien de jour en jour son salut.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Simon Ioannis, diligis me plus his?<br />
Domine, tu omnia nosti :<br />
tu scis, Domine, quia amo te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Simon, fils de Jean, m'aimes-tu plus que ceux-ci?<br />
Seigneur, tu connais tout:<br />
 tu sais bien, Seigneur, que je t'aime.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 283 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
