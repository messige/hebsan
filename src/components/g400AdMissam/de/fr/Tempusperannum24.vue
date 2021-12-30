<!-- DEBUG-VIEW START 317 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Da pacem, Domine, sustinentibus te,<br />
ut prophetae tui fideles inveniantur:<br />
exaudi preces servi tui,<br />
et plebis tuae Israel.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Donnez la paix, Seigneur, à ceux qui vous attendent,<br />
que vos prophètes soient trouvés fidèles ;<br />
exaucez les prières de votre serviteur,<br />
et de votre peuple, Israël.</ion-text></ion-col> </ion-row></ion-grid>Ps. <span class="fc">Laetatus sum</span> in his quae dicta sunt mihi :<br />
in domum Domini ibimus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je me suis réjoui de ces paroles qui m’ont été dites :<br />
Nous irons dans la maison du Seigneur.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
<span class="fc">Laetatus sum</span> in his quae dicta sunt mihi :<br />
in domum Domini ibimus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je me suis réjoui de ces paroles qui m’ont été dites :<br />
Nous irons dans la maison du Seigneur.</ion-text></ion-col> </ion-row></ion-grid>V./  Fiat pax in virtute tua :<br />
et abundantia in turribus tuis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que la paix règne sur tes remparts:<br />
et l’abondance en tes tours.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Timebunt gentes nomen tuum, Domine :<br />
et omnes reges terrae gloriam tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Les nations craindront votre nom, Seigneur :<br />
et tous les rois de la terre, votre gloire.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'B'"><rubrique>Offertorium</rubrique><br /><br />
Sanctificavit Moyses altare Domino,<br />
offerens super illud holocausta,<br />
et immolans victimas :<br />
fecit sacrificium vespertinum<br />
in odorem suavitatis Domino Deo,<br />
in conspectu filiorum Israel.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Moïse consacra un autel au Seigneur,<br />
y offrant des holocaustes<br />
et y immolant des victimes :<br />
il fit le sacrifice du soir<br />
avec un parfum suave, en l'honneur du Seigneur Dieu,<br />
en présence les fils d'Israël.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Offertorium</rubrique><br /><br />
<span class="fc">Precatus est</span> Moyses in conspectu Domini Dei sui,<br />
et dixit :<br />
quare, Domine, irasceris in populo tuo?<br />
Parce irae animae tuae :<br />
memento Abraham, Isaac et Iacob,<br />
quibus iurasti dare terram fluentem lac et mel.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Moïse adressa une supplication en présence du Seigneur son Dieu,<br />
et dit :<br />
Pourquoi, Seigneur, vous irriter contre votre peuple ?<br />
Apaisez votre colère :<br />
souvenez-vous d’Abraham, d’Isaac et de Jacob,<br />
à qui vous avez juré de donner une terre ruisselant de lait et de miel.</ion-text></ion-col> </ion-row></ion-grid> Et placatus <span class="fc">factus est</span> Dominus de malignitate,<br />
quam dixit facere populo suo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et le Seigneur se laissa fléchir, renonçant au châtiment<br />dont il avait menacé son peuple.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Tollite hostias et introite in atria eius :<br />
adorate Dominum in aula sancta eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Prenez des offrandes, et entrez dans ses parvis :<br />
adorez le Seigneur dans son enceinte sacrée.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Qui vult venire post me,<br />
abneget semetipsum<br />
et tollat crucem suam,<br />
et sequatur me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Qui veut venir à ma suite,<br />
qu’il renonce à lui-même,<br />
et qu’il prenne sa croix,<br />
et qu’il me suive.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Dico vobis: Gaudium est angelis Dei<br />
super uno peccatore paenitentiam agente.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je vous le dis, il y a de la joie chez les Anges de Dieu<br />
pour un seul pécheur qui fait pénitence.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 317 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
