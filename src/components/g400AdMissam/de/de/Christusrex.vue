<!-- DEBUG-VIEW START 342 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Dignus est Agnus qui <span class="fc">occisus est</span>,<br />
accipere virtutem, et divinitatem,<br />
et sapientiam, et fortitudinem, et honorem.<br />
Ipsi gloria et imperium in saecula saeculorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Würdig ist das Lamm, das geschlachtet ist,<br />
Macht zu empfangen, Reichtum<br />
und Weisheit, Kraft und Ehre.<br />
Ihm sei die Herrlichkeit und die Herrschaft in Ewigkeit.</ion-text></ion-col> </ion-row></ion-grid>Ps. Deus, iudicium tuum regi da :<br />
et iustitiam tuam filio regis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gott, gib dein Gericht dem König,<br />
dem Königssohn gib dein gerechtes Walten.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Dominabitur a mari usque ad mare,<br />
et a flumine usque ad terminos orbis terrarum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Er wird herrschen von Meer zu Meer,<br />
vom Strom bis an die Enden der Erde.</ion-text></ion-col> </ion-row></ion-grid>V./  Et adorabunt eum omnes reges terrae :<br />
omnes gentes servient ei.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und anbeten werden ihn alle Könige der Erde,<br />
alle Völker werden ihm dienen.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Potestas eius, potestas aeterna,<br />
quae non auferetur:<br />
et regnum eius, quod non corrumpetur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seine Herrschaft ist eine ewige Herrschaft,<br />
die unvergänglich ist.<br />
Und sein Reich ist eines, das nicht untergeht.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Postula a me dicit Dominus<br />
et dabo tibi gentes hereditatem tuam,<br />
et possessionem tuam terminos terrae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Fordere von mir<br />
und ich gebe dir die Völker zum Erbe,<br />
die Enden der Erde zu deinem Eigentum.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Amen dico vobis :<br />
quod uni ex minimis meis fecistis,<br />
mihi fecistis :<br />
venite benedicti Patris mei,<br />
possidete praeparatum vobis regnum<br />
ab initio saeculi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wahrlich, ich sage euch:<br />
Was ihr einem meiner Geringsten [Brüder] getan habt,<br />
das habt ihr mir getan!<br />
Kommt her, ihr Gesegneten meines Vaters,<br />
nehmt das Reich in Besitz, das euch bereitet ist<br />
seit Anfang der Welt!</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Sedebit Dominus rex in aeternum :<br />
Dominus benedicet populo suo in pace.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr thront als König in Ewigkeit.<br />
Der Herr segne sein Volk mit Frieden.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 342 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
