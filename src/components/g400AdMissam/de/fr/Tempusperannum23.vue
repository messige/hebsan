<!-- DEBUG-VIEW START 315 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Iustus es Domine, et rectum iudicium tuum:<br />
fac cum servo tuo secundum misericordiam tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous êtes juste, Seigneur : et votre jugement est droit :<br />
agissez avec votre serviteur selon votre miséricorde.</ion-text></ion-col> </ion-row></ion-grid>Ps. Beati immaculati in via :<br />
qui ambulant in lege Domini.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Heureux ceux qui sont irréprochables dans leur voie<br />et qui marchent selon la loi du Seigneur.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Beata gens cuius est Dominus Deus eorum :<br />
populus quem elegit Dominus in hereditatem sibi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Heureuse la nation dont le Seigneur est le Dieu :<br />
le peuple que le Seigneur s’est choisi pour héritage.</ion-text></ion-col> </ion-row></ion-grid>V./  Verbo Domini caeli <span class="fc">firmati sunt</span><br />
et spiritu oris eius omnis virtus eorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">C’est par le verbe de Dieu que les cieux ont été affermis,<br />
et par le souffle de sa bouche, toute leur puissance.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Domine, refugium <span class="fc">factus es</span> nobis<br />
a generatione et progenie.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, vous vous êtes fait pour nous un refuge :<br />
de génération en génération.</ion-text></ion-col> </ion-row></ion-grid>V./  Priusquam montes fierent,<br />
aut formaretur terra et orbis :<br />
a saeculo, et usque in saeculum tu es, Deus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Avant que les montagnes existassent,<br />que la terre et le monde fussent formés,<br />de toute éternité vous êtes, Dieu.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Domine exaudi orationem meam<br />
et clamor meus ad te (per)veniat.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, exaucez ma prière,<br />
et que mon cri (par)vienne jusqu’à vous.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Oravi Deum meum ego Daniel, dicens :<br />
exaudi, Domine, preces servi tui :<br />
illumina faciem tuam super sanctuarium tuum :<br />
et propitius intende populum istum,<br />
super quem <span class="fc">invocatum est</span> nomen tuum, Deus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">J'ai prié mon Dieu, moi Daniel, en disant :<br />
Exaucez, Seigneur, les prières de votre serviteur :<br />
illuminez votre face sur votre sanctuaire :<br />
et dans votre bienveillance, entendez ce peuple<br />
sur lequel votre nom a été invoqué, ô mon Dieu.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Vovete, et reddite Domino Deo vestro,<br />
omnes qui in circuitu eius affertis munera<br />
terribili, et ei qui aufert spiritum principum :<br />
terribili apud omnes reges terrae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Faites des vœux et acquittez-les au Seigneur votre Dieu :<br />
vous tous qui à l’entour de lui apportez des présents,<br />
à lui qui est redoutable et qui coupe le souffle des puissants :<br />
à lui qui est redoutable face à tous les rois de la terre.</ion-text></ion-col> </ion-row></ion-grid>	
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

<!-- DEBUG-VIEW ENDED 315 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
