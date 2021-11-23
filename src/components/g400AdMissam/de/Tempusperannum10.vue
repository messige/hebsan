<!-- DEBUG-VIEW START 302 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Dominus illuminatio mea, et salus mea,<br />
quem timebo?<br />
Dominus defensor vitae meae,<br />
a quo trepidabo?<br />
qui tribulant me inimici mei, <span class="fc">infirmati sunt</span>,<br />
et ceciderunt.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr ist mein Licht und mein Heil:<br />
Vor wem sollte ich mich fürchten?<br />
Der Herr ist die Kraft meines Lebens:<br />
Vor wem sollte mir bangen?<br />
Die mich quälen, meine Feinde, sie strauchelten<br />
und sind gefallen.</ion-text></ion-col> </ion-row></ion-grid>Ps. Si consistant adversum me castra :<br />
non timebit cor meum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wenn wider mich antritt ein Heer:<br />
Mein Herz fürchtet sich nicht.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Propitius esto Domine peccatis nostris :<br />
ne quando dicant gentes :<br />
ubi est Deus eorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vergib uns, Herr, unsere Sünden,<br />
damit die Heiden nie sagen:<br />
„Wo ist [nun] ihr Gott?“</ion-text></ion-col> </ion-row></ion-grid>V./  Adiuva nos, Deus salutaris noster :<br />
et propter honorem nominis tui Domine, libera nos.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Hilf uns, Gott unseres Heiles,<br />
und um der Ehre deines Namens willen, Herr, befreie uns.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Exaltabo te Domine,<br />
quoniam suscepisti me,<br />
nec delectasti inimicos meos super me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Erheben will ich dich, Herr,<br />
denn du nahmst mich auf<br />
und ließest meine Feinde nicht frohlocken über mich.</ion-text></ion-col> </ion-row></ion-grid>V./  Domine Deus meus, clamavi ad te<br />
et sanasti me:<br />
Domine, abstraxisti ab inferis animam meam,<br />
salvasti me descendentibus in lacum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, mein Gott, ich schrie zu dir,<br />
und du hast mich geheilt.<br />
Herr, du hast meine Seele herausgezogen aus der Unterwelt,<br />
du hast mich gerettet von denen, die niedersteigen zur Grube.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Deus, qui sedes super thronum,<br />
et iudicas aequitatem,<br />
esto refugium pauperum in tribulatione:<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gott, der du dich auf den Thron setzt,<br />
und in Gerechtigkeit richtest,<br />
sei doch Zuflucht für die Armen in der Bedrängnis.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Illumina oculos meos, nequando obdormiam in morte:<br />
nequando dicat inimicus meus :<br />
praevalui adversus eum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Erleuchte meine Augen,<br />
damit ich nicht irgendwann im Tode entschlafe;<br />
damit mein Feind nicht sagen kann:<br />
„Ich habe ihn überwältigt“!</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Dominus firmamentum meum,<br />
et refugium meum, et liberator meus :<br />
Deus meus adiutor meus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr ist meine Feste<br />
und meine Zuflucht und mein Befreier.<br />
Mein Gott ist mein Helfer.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Quicumque fecerit voluntatem Patris mei,<br />
qui in caelis est :<br />
ipse meus frater, soror, et mater est,<br />
dicit Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wer immer den Willen meines Vaters tut,<br />
der im Himmel ist,<br />
der ist mir Bruder und Schwester und Mutter,<br />
spricht der Herr!</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 302 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
