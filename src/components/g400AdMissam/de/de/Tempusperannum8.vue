<!-- DEBUG-VIEW START 18 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
<span class="fc">Factus est</span> Dominus protector meus,<br />
et eduxit me in latitudinem :<br />
salvum me fecit, quoniam voluit me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr wurde mir zum Schutz,<br />
und er führte mich hinaus in die Weite;<br />
er befreite mich, denn er hatte an mir Wohlgefallen.</ion-text></ion-col> </ion-row></ion-grid>Ps. Diligam te Domine, fortitudo mea (virtus mea):<br />
Dominus firmamentum meum,<br />
et refugium meum(,et liberator meus).<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich will dich lieben, Herr, meine Stärke (meine Kraft)!<br />
Der Herr ist meine Feste<br />
und meine Zuflucht (und mein Befreier).</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Ad Dominum, dum tribularer, clamavi,<br />
et exaudivit me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Zum Herrn rief ich in meiner Not<br />
und er hat mich erhört.</ion-text></ion-col> </ion-row></ion-grid>V./  Domine, libera animam meam a labiis iniquis,<br />
et a lingua dolosa.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, rette mein Leben vor ungerechten Lippen,<br />
und vor der falschen Zunge!</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Domine Deus meus in te speravi :<br />
libera me ab omnibus persequentibus me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, mein Gott, auf dich habe ich gehofft;<br />
befreie mich vor all meinen Verfolgern.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Domine convertere,<br />
et eripe animam meam :<br />
salvum me fac propter misericordiam tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, wende dich mir zu<br />
und errette mein Leben,<br />
mache mich heil um deiner Barmherzigkeit willen.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Primum quaerite regnum Dei,<br />
et omnia adicientur vobis,<br />
dicit Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Sucht zuerst das Reich Gottes,<br />
und alles andere wird euch hinzugegeben werden,<br />
spricht der Herr.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Cantabo Domino,<br />
qui bona tribuit mihi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Singen will ich dem Herrn,<br />
der mir Gutes getan hat.</ion-text></ion-col> </ion-row></ion-grid> Et psallam nomini Domini altissimi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und singen will ich deinem Namen, Allerhöchster.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 18 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
