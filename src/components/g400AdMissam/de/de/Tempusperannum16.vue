<!-- DEBUG-VIEW START 300 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Ecce Deus adiuvat me,<br />
et Dominus susceptor est animae meae :<br />
averte mala inimicis meis,<br />
in veritate tua disperde illos,<br />
protector meus Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seht, Gott hilft mir,<br />
der Herr ist der Beistand meiner Seele.<br />
Abwenden möge er das Böse auf meine Feinde.<br />
In deiner Wahrheit vernichte sie,<br />
Herr, mein Beschützer.</ion-text></ion-col> </ion-row></ion-grid>Ps. Deus in nomine tuo salvum me fac,<br />
et in virtute tua iudica me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gott, in deinem Namen mache mich heil,<br />
und und in deiner Macht richte mich.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Domine Dominus noster,<br />
quam admirabile est nomen tuum in universa terra.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, unser Herrscher,<br />
wie wunderbar ist dein Name auf der ganzen Erde!</ion-text></ion-col> </ion-row></ion-grid>V./  Quoniam <span class="fc">elevata est</span> magnificentia tua super caelos.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Denn erhaben ist deine Pracht hoch über die Himmel.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Si ambulem in medio umbrae mortis,<br />
non timebo mala :<br />
quoniam tu mecum es, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wenn ich auch wandelte inmitten des Schattens des Todes,<br />
ich werde nichts Böses fürchten,<br />
denn du bist bei mir, Herr.</ion-text></ion-col> </ion-row></ion-grid>V./  Virga tua et baculus tuus,<br />
ipsa me consolata sunt.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dein Stab und dein Stock,<br />
die trösten mich.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Eripe me de inimicis meis, Deus meus :<br />
et ab insurgentibus in me<br /><details>
<summary>libera me.</summary>
<p>libera me, Domine.<br />libera me, Deus meus.</p></details><ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Entreiß mich meinen Feinden, mein Gott!<br />
Vor denen, die sich wider mich erheben,<br />
befreie mich, (Herr), (mein Gott).</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Iustitiae Domini rectae, laetificantes corda,<br />
et dulciora super mel et favum :<br />
nam et servus tuus custodiet ea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Die Befehle des Herrn sind richtig, sie erfreuen das Herz.<br />
Sie sind süßer als Honig, als Honig aus Waben.<br />
Auch dein Knecht wird sie bewahren.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Acceptabis sacrificium iustitiae,<br />
oblationes et holocausta,<br />
super altare tuum, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Entgegen nehmen wirst du das Opfer der Gerechtigkeit,<br />
Brandopfer und Ganzopfer,<br />
auf deinem Altar, Herr.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Optimam partem elegit sibi Maria,<br />
quae non auferetur ab ea in aeternum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Maria hat den besten Teil für sich erwählt;<br />
der soll nicht von ihr genommen werden in Ewigkeit!</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 300 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
