<!-- DEBUG-VIEW START 341 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Dignus est Agnus qui <span class="fc">occisus est</span>,<br />
accipere virtutem, et divinitatem,<br />
et sapientiam, et fortitudinem, et honorem.<br />
Ipsi gloria et imperium in saecula saeculorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Il est digne, l'Agneau qui a été immolé,<br />
de recevoir la puissance, et la divinité,<br />
et la sagesse, et la force, et l'honneur.<br />
A lui, gloire et souveraineté pour les siècles des siècles.</ion-text></ion-col> </ion-row></ion-grid>Ps. Deus, iudicium tuum regi da :<br />
et iustitiam tuam filio regis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dieu, donnez au Roi votre jugement :<br />
et votre justice au Fils du Roi.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Dominabitur a mari usque ad mare,<br />
et a flumine usque ad terminos orbis terrarum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Il dominera d’un océan à l’autre :<br />
et du fleuve, jusqu’aux confins de la terre entière.</ion-text></ion-col> </ion-row></ion-grid>V./  Et adorabunt eum omnes reges terrae :<br />
omnes gentes servient ei.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et tous les rois de la terre l’adoreront :<br />
toutes les nations le serviront.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Potestas eius, potestas aeterna,<br />
quae non auferetur:<br />
et regnum eius, quod non corrumpetur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Sa puissance est puissance éterrnelle,<br />
qui ne sera pas abolie :<br />
et son royaume, royaume qui ne sera pas détruit.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Postula a me dicit Dominus<br />
et dabo tibi gentes hereditatem tuam,<br />
et possessionem tuam terminos terrae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Demande-moi, dit le Seigneur,<br />
et je te donnerai les nations pour héritage,<br />
et pour domaine les confins de la terre.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Amen dico vobis :<br />
quod uni ex minimis meis fecistis,<br />
mihi fecistis :<br />
venite benedicti Patris mei,<br />
possidete praeparatum vobis regnum<br />
ab initio saeculi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">En vérité, je vous le dis :<br />
ce que vous avez fait à l’un des plus petits des miens,<br />
c’est à moi que vous l’avez fait :<br />
 venez, les bénis de mon Père,<br />
prenez possession du Royaume préparé pour vous<br />
depuis le commencement du monde.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Sedebit Dominus rex in aeternum :<br />
Dominus benedicet populo suo in pace.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Il siègera, le Seigneur, Roi pour toujours:<br />
le Seigneur bénira son peuple dans la paix.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 341 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
