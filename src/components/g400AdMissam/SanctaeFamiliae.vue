<!-- DEBUG-VIEW START 148 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
Deus in loco sancto suo :<br />
Deus, qui inhabitare facit unanimes in domo :<br />
ipse dabit virtutem et fortitudinem plebi suae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dieu réside en son lieu saint :<br />
Dieu, qui fait habiter ceux qui sont unanimes dans sa maison :<br />
c'est lui qui donnera courage et force à son peuple.</ion-text></ion-col> </ion-row></ion-grid>Ps. Exsurgat Deus, et dissipentur inimici eius :<br />
et fugiant, qui oderunt eum a facie eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que Dieu se lève, et que ses ennemis soient dispersés ;<br />
et qu’ils fuient devant sa face, ceux qui le haïssent.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Unam petii a Domino,<br />
hanc requiram :<br />
ut inhabitem in domo Domini<br />
omnibus diebus vitae meae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">J’ai demandé une seule chose au Seigneur,<br />
c’est elle que je rechercherai :<br />
habiter dans la maison du Seigneur<br />
tous les jours de ma vie.</ion-text></ion-col> </ion-row></ion-grid>V./  Ut videam voluptatem Domini:<br />
et protegar a templo sancto eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Pour contempler les charmes du Seigneur,<br />
et jouir de sa protection en son saint temple.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Gaudete iusti in Domino :<br />
rectos decet collaudatio.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Soyez en joie, vous les justes, dans le Seigneur :<br />
aux hommes droits il appartient de le chanter en chœur !</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
In te speravi, Domine:<br />
dixi: tu es Deus meus,<br />
in manibus tuis tempora mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">C’est en vous que j’ai mis mon espérance, Seigneur :<br />
j’ai dit : C’est vous qui êtes mon Dieu ;<br />
en vos mains sont mes instants.</ion-text></ion-col> </ion-row></ion-grid>V./  Illumina faciem tuam super servum tuum,<br />
et salvum me fac propter misericordiam tuam:<br />
Domine, non confundar,<br />
quoniam invocavi te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary"></ion-text></ion-col> </ion-row></ion-grid>V./  Quam magna multitudo dulcedinis tuae, Domine,<br />
quam abscondisti timentibus te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Qu’elle est grande, Seigneur, l’abondance de votre douceur,<br />
que vous tenez en réserve pour ceux qui vous craignent.</ion-text></ion-col> </ion-row></ion-grid>V./  Perfecisti autem sperantibus in te<br />
in conspectu filiorum hominum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary"></ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Tolle puerum et matrem eius,<br />
et vade in terram Iuda:<br />
<span class="fc">defuncti sunt</span> enim, qui quaerebant animam pueri.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Prends l’enfant et sa mère,<br />
et va en terre de Juda ;<br />
ils sont morts en effet, ceux qui en voulaient à la vie de l’enfant.</ion-text></ion-col> </ion-row></ion-grid> <b>Tollite</b> <i>(et matrem)</i> eius<br />
et vade in terram Iuda:<br />
defuncti sunt <i>(enim) </i>, qui quaerebant animam pueri.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary"></ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Fili, quid fecisti nobis sic?<br />
Ego et pater tuus dolentes quaerebamus te.<br />
Quid est quod me quaerebatis?<br />
Nesciebatis quia in his quae Patris mei sunt oportet me esse?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mon enfant, pourquoi as-tu agi ainsi envers nous ?<br />
Moi et ton père, tout affligés, nous te cherchions.<br />
Pourquoi me cherchiez-vous ?<br />
Ne saviez-vous pas qu’il me faut être aux affaires de mon Père ?</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Fili, quid fecisti nobis sic?<br />
Ego et pater tuus dolentes quaerebamus te.<br />
Quid est quod me quaerebatis?<br />
Nesciebatis quia in his quae Patris mei sunt oportet me esse?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mon enfant, pourquoi as-tu agi ainsi envers nous ?<br />
Moi et ton père, tout affligés, nous te cherchions.<br />
Pourquoi me cherchiez-vous ?<br />
Ne saviez-vous pas qu’il me faut être aux affaires de mon Père ?</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 148 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
