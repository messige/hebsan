<!-- DEBUG-VIEW START 292 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Viri Galilaei,<br />
quid admiramini aspicientes in caelum?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ihr Männer von Galilaea,<br />
was wundert ihr euch und schaut ihr auf zum Himmel?</ion-text></ion-col> </ion-row></ion-grid> Quemadmodum vidistis eum ascendentem in caelum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">So, wie ihr ihn in den Himmel aufsteigen gesehen habt.</ion-text></ion-col> </ion-row></ion-grid> Ita veniet.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">so wird er wiederkommen.</ion-text></ion-col> </ion-row></ion-grid>Ps. Omnes gentes plaudite manibus :<br />
iubilate Deo in voce exsultationis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ihr Völker alle, klatscht in die Hände!<br />
Jubelt zu Gott mit der Stimme des Frohlockens!</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Ascendit Deus in iubilatione,<br />
(et) Dominus in voce tubae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gott steigt auf unter Jubel,<br />
(und) der Herr beim Schall der Posaune.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Dominus in Sina in sancto,<br />
ascendens in altum,<br />
captivam duxit captivitatem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr ist auf dem Sinai im Heiligtum.<br />
Er ist zur Höhe aufgestiegen,<br />
hat die Gefangenschaft gefangen weggeführt.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Viri Galilaei,<br />
quid admiramini aspicientes in caelum?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ihr Männer von Galilaea,<br />
was wundert ihr euch und schaut ihr auf zum Himmel?</ion-text></ion-col> </ion-row></ion-grid> Hic Iesus qui assumptus est a vobis in caelum,<br />
sic veniet.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dieser Jesus, der vor euch in den Himmel aufgenommen wurde,<br />
so wird er wiederkommen.</ion-text></ion-col> </ion-row></ion-grid> Quemadmodum vidistis eum ascendentem in caelum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">So, wie ihr ihn in den Himmel aufsteigen gesehen habt.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Ascendit Deus in iubilatione,<br />
(et) Dominus in voce tubae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gott steigt auf unter Jubel,<br />
(und) der Herr beim Schall der Posaune.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
<span class="fc">Data est</span> mihi omnis potestas in caelo et in terra, alleluia :<br />
euntes, docete omnes gentes,<br />
baptizantes eos in nomine Patris, et Filii, et Spiritus Sancti.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gegeben ist mir alle Macht, im Himmel und auf Erden, Halleluja.<br />
Geht, lehrt alle Völker,<br />
tauft sie im Namen des Vaters und des Sohnes und des Heiligen Geistes.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Signa eos qui in me credunt,<br />
haec sequentur:<br />
daemonia eicient:<br />
super aegros manus imponent,<br />
et bene habebunt.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Diese Zeichen aber werden, die an mich glauben,<br />
begleiten:<br />
Dämonen werden sie austreiben,<br />
Kranken werden sie die Hände auflegen,<br />
und diese werden sich wohl befinden.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Psallite Domino,<br />
qui ascendit super caelos caelorum ad Orientem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Singt dem Herrn,<br />
der aufstieg über die Himmel der Himmel, dem Aufgang entgegen.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 292 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
