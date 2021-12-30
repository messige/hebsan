<!-- DEBUG-VIEW START 280 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Exaudi, Domine, vocem meam,<br />
qua clamavi ad te, alleluia :<br />
tibi dixit cor meum,<br />
quaesivi vultum tuum,<br />
vultum tuum Domine requiram :<br />
ne avertas faciem tuam a me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Erhöre, Herr, meine Stimme,<br />
mit der ich zu dir rufe, Halleluja.<br />
Mein Herz sagt zu dir:<br />
Dein Angesicht habe ich gesucht!<br />
Dein Angesicht, Herr, will ich suchen.<br />
Wende dein Angesicht nicht von mir.</ion-text></ion-col> </ion-row></ion-grid>Ps. Dominus illuminatio mea et salus mea :<br />
quem timebo ?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr ist mein Licht und mein Heil:<br />
Vor wem sollte ich mich fürchten?</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Regnavit Dominus super omnes gentes :<br />
Deus sedet super sedem sanctam suam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr ist König über alle Völker:<br />
Gott sitzt auf seinem heiligen Thron.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Non vos relinquam orphanos,<br />
vado et veniam (venio) ad vos,<br />
et gaudebit cor vestrum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich lasse euch nicht als Waisen zurück,<br />
ich gehe und (werde wieder zu euch) komme(n),<br />
und euer Herz wird sich freuen.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'A'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Exivi a Patre,<br />
et veni in mundum<br />
iterum relinquo mundum,<br />
et vado ad Patrem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vom Vater bin ich ausgegangen<br />
und in die Welt gekommen;<br />
ich verlasse die Welt wieder<br />
und gehe zum Vater.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Offertorium</rubrique><br /><br />
Ascendit Deus in iubilatione,<br />
(et) Dominus in voce tubae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gott steigt auf unter Jubel,<br />
(und) der Herr beim Schall der Posaune.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Viri Galilaei,<br />
quid admiramini aspicientes in caelum?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ihr Männer von Galilaea,<br />
was wundert ihr euch und schaut ihr auf zum Himmel?</ion-text></ion-col> </ion-row></ion-grid> Hic Iesus qui assumptus est a vobis in caelum,<br />
sic veniet.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dieser Jesus, der vor euch in den Himmel aufgenommen wurde,<br />
so wird er wiederkommen.</ion-text></ion-col> </ion-row></ion-grid> Quemadmodum vidistis eum ascendentem in caelum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">So, wie ihr ihn in den Himmel aufsteigen gesehen habt.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Pater cum essem cum eis,<br />
ego servabam eos,<br />
quos dedisti mihi, alleluia :<br />
nunc autem ad te venio :<br />
non rogo ut tollas eos de mundo,<br />
sed ut serves eos a malo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vater, solange ich bei ihnen war,<br />
bewahrte ich die,<br />
die du mir gegeben hast, Halleluja.<br />
Nun aber komme ich zu dir. <br />
Ich bitte nicht, dass du sie aus der Welt nimmst,<br />
sondern dass du sie vor dem Bösen bewahrst.</ion-text></ion-col> </ion-row></ion-grid>	
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

<!-- DEBUG-VIEW ENDED 280 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
