<!-- DEBUG-VIEW START 247 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Venite, adoremus Deum<br />
et procidamus ante Dominum :<br />
ploremus ante eum, qui fecit nos :<br />
quia ipse est Dominus Deus noster.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Venez, adorons Dieu,<br />
et prosternons-nous devant le Seigneur :<br />
pleurons devant lui, qui nous a créés :<br />
car c’est lui le Seigneur notre Dieu.</ion-text></ion-col> </ion-row></ion-grid>Ps. Venite, exsultemus Domino :<br />
iubilemus Deo salutari nostro.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Venez, tressaillons d’allégresse pour le Seigneur :<br />
jubilons pour Dieu notre sauveur.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Graduale</rubrique><br /><br />
Dispersit, dedit pauperibus;<br />
iustitia eius manet in saeculum saeculi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Il a fait largesse, il a donné aux pauvres :<br />
sa justice demeure pour les siècles des siècles.</ion-text></ion-col> </ion-row></ion-grid>V./  Potens in terra erit semen eius,<br />
generatio rectorum benedicetur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Sa postérité sera puissante sur la terre :<br />
la génération des justes sera bénie.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Tollite hostias et introite in atria eius :<br />
adorate Dominum in aula sancta eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Prenez des offrandes, et entrez dans ses parvis :<br />
adorez le Seigneur dans son enceinte sacrée.</ion-text></ion-col> </ion-row></ion-grid>V./  Revelavit Dominus condensa,<br />
et in templo eius omnes dicent gloriam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur a découvert les lieux sombres,<br />
et en son temple, tous diront sa gloire.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Laudate Dominum, omnes gentes.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Louez le Seigneur, toutes les nations.</ion-text></ion-col> </ion-row></ion-grid> Et collaudate eum, omnes populi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et louez-le ensemble, tous les peuples.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Perfice gressus meos in semitis tuis,<br />
ut non moveantur vestigia mea :<br />
inclina aurem tuam,<br />
et exaudi verba mea :<br />
mirifica misericordias tuas,<br />
qui salvos facis sperantes in te, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Affermissez mes pas dans vos sentiers :<br />
que mes pieds ne chancellent pas :<br />
prêtez-moi l’oreille,<br />
et exaucez mes paroles :<br />
faites resplendir vos miséricordes,<br />
vous qui sauvez ceux qui espèrent en vous, Seigneur.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Introibo ad altare Dei,<br />ad Deum
qui laetificat iuventutem meam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je m’approcherai de l’autel de Dieu,<br 
 /> de Dieu<br />
qui réjouit ma jeunesse.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Multitudo languentium,<br />
et qui vexabantur a spiritibus immundis,<br />
veniebant ad eum :<br />
quia virtus de illo exibat,<br />
et sanabat omnes.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Une foule de malades,<br />
et ceux qui étaient tourmentés par des esprits impurs<br />
venaient à lui :<br />
car une force sortait de lui,<br />
et il les guérissait tous.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Introibo ad altare Dei,<br />ad Deum
qui laetificat iuventutem meam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je m’approcherai de l’autel de Dieu,<br 
 /> de Dieu<br />
qui réjouit ma jeunesse.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 247 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
