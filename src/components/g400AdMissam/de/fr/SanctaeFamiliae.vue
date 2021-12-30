<!-- DEBUG-VIEW START 353 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Deus in loco sancto suo :<br />
Deus, qui inhabitare facit unanimes in domo :<br />
ipse dabit virtutem et fortitudinem plebi suae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dieu réside dans son lieu saint,<br />Dieu qui fait habiter dans sa maison ceux qu’anime un même esprit ;<br />lui-même donnera force et puissance à son peuple.</ion-text></ion-col> </ion-row></ion-grid>Ps. Exsurgat Deus, et dissipentur inimici eius :<br />
et fugiant, qui oderunt eum a facie eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que Dieu se lève, et que ses ennemis soient dispersés ;<br />
et qu’ils fuient devant sa face, ceux qui le haïssent.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Unam petii a Domino,<br />
hanc requiram :<br />
ut inhabitem in domo Domini.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">J’ai demandé une seule chose au Seigneur,<br />
c’est elle que je rechercherai :<br />
habiter dans la maison du Seigneur.</ion-text></ion-col> </ion-row></ion-grid>V./  Ut videam voluptatem Domini:<br />
et protegar a templo sancto eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Pour contempler les délices du Seigneur<br />
et vivre à l’abri de son temple.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Gaudete iusti in Domino :<br />
rectos decet collaudatio.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Réjouissez-vous, vous les justes, dans le Seigneur :<br />
aux hommes droits il appartient de le chanter en chœur !</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
In te speravi, Domine:<br />
dixi: tu es Deus meus,<br />
in manibus tuis tempora mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">C’est en vous que j’ai mis mon espérance, Seigneur :<br />
j’ai dit : C’est vous qui êtes mon Dieu ;<br />
mes jours sont entre vos mains.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Tolle puerum et matrem eius,<br />
et vade in terram Iuda:<br />
<span class="fc">defuncti sunt</span> enim, qui quaerebant animam pueri.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Prends l’enfant et sa mère,<br />
et va en terre de Juda ;<br />
ils sont morts en effet, ceux qui en voulaient à la vie de l’enfant.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
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

<!-- DEBUG-VIEW ENDED 353 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
