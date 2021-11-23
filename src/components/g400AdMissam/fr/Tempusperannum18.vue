<!-- DEBUG-VIEW START 317 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<template v-if="annoABC == 'A'"><rubrique>Introitus</rubrique><br /><br />
Sitientes venite ad aquas, dicit Dominus :<br />
et qui non habetis pretium, venite,<br />
et bibite cum laetitia.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous qui avez soif, venez auprès des eaux, dit le Seigneur,<br />
et vous qui n’avez pas d’argent, venez,<br />
et buvez avec allégresse.</ion-text></ion-col> </ion-row></ion-grid>Ps. Attendite popule meus legem meam :<br />
inclinate aurem vestram in verba oris mei.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Soyez attentifs, mon peuple, à ma loi :<br />
prêtez l’oreille aux paroles de ma bouche.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'A'"><rubrique>Graduale</rubrique><br /><br />
Oculi omnium in te sperant, Domine :<br />
et tu das illis escam in tempore opportuno.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Les yeux de tous mettent en vous leur espérance, Seigneur :<br />
et vous, vous leur donnez leur nourriture au temps opportun.</ion-text></ion-col> </ion-row></ion-grid>V./  Aperis tu manum tuam:<br />
et imples omne animal benedictione.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous ouvrez vous-même la main :<br />
et vous comblez tout vivant de bénédiction.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Introitus</rubrique><br /><br />
Deus in adiutorium meum intende:<br />
Domine ad adiuvandum me festina.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dieu, venez à mon aide :<br />Seigneur,
hâtez-vous de me secourir.</ion-text></ion-col> </ion-row></ion-grid> Confundantur et revereantur<br />
inimici mei qui quaerunt animam meam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Qu’ils soient confondus et honteux,<br />
mes ennemis qui en veulent à ma vie.</ion-text></ion-col> </ion-row></ion-grid>Ps. Avertantur retrorsum et erubescant,<br />
qui volunt mihi mala.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Qu’ils soient renvoyés sur leurs pas, et qu’ils soient rouges de honte,<br />
ceux qui me veulent du mal.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'A'"><rubrique>Graduale</rubrique><br /><br />
Oculi omnium in te sperant, Domine :<br />
et tu das illis escam in tempore opportuno.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Les yeux de tous mettent en vous leur espérance, Seigneur :<br />
et vous, vous leur donnez leur nourriture au temps opportun.</ion-text></ion-col> </ion-row></ion-grid>V./  Aperis tu manum tuam:<br />
et imples omne animal benedictione.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous ouvrez vous-même la main :<br />
et vous comblez tout vivant de bénédiction.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Benedicam Dominum in omni tempore.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je bénirai le Seigneur en tout temps.</ion-text></ion-col> </ion-row></ion-grid> Semper laus eius in ore meo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Toujours sa louange sera dans ma bouche.</ion-text></ion-col> </ion-row></ion-grid>V./  In Domino laudabitur anima mea;<br />
audiant mansueti et laetentur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">C’est dans le Seigneur que sera glorifiée mon âme :<br />
que les humbles m’entendent et qu’ils se réjouissent.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Offertorium</rubrique><br /><br />
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
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Domine Deus salutis meae,<br />
in die clamavi, et nocte coram te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur Dieu de mon salut :<br />
le jour et la nuit j’ai crié devant vous.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'B'"><rubrique>Offertorium</rubrique><br /><br />
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
	
<template v-if="annoABC == 'C'"><rubrique>Offertorium</rubrique><br /><br />
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
	
<rubrique>Communio</rubrique><br /><br />
Panem de caelo dedisti nobis, Domine,<br />
habentem omne delectamentum,<br />
et omnem saporem suavitatis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous nous avez donné, Seigneur, un pain venu du ciel<br />
ayant toutes les délices<br />
et toute saveur de douceur.</ion-text></ion-col> </ion-row></ion-grid>	
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
