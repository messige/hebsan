<!-- DEBUG-VIEW START 294 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Omnes gentes plaudite manibus :<br />
iubilate Deo in voce exsultationis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ihr Völker alle, klatscht in die Hände!<br />
Jubelt zu Gott mit der Stimme des Frohlockens!</ion-text></ion-col> </ion-row></ion-grid>Ps. Quoniam Dominus excelsus (summus) terribilis :<br />
rex magnus super omnem terram.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Denn der Herr ist erhaben (der Höchste), Furcht gebietend,<br />
ein großer König über die ganze Erde.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Venite filii, audite me :<br />
timorem Domini docebo vos.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Kommt, ihr Kinder, hört mir zu:<br />
Die Furcht des Herren will ich euch lehren.</ion-text></ion-col> </ion-row></ion-grid>V./  Accedite ad eum, et illuminamini :<br />
et facies vestrae non confundentur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Tretet zu ihm heran, so werdet ihr leuchten<br />
und euer Gesicht braucht nicht zu erröten.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
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
	
<template v-if="annoABC == 'A'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Christus resurgens<br />
ex mortuis iam non moritur,<br />
mors illi ultra non dominabitur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Christus, auferstanden<br />
von den Toten, stirbt nicht mehr;<br />
der Tod hat keine Macht mehr über ihn.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Omnes gentes plaudite manibus :<br />
iubilate Deo in voce exsultationis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ihr Völker alle, klatscht in die Hände!<br />
Jubelt zu Gott mit der Stimme des Frohlockens!</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Offertorium</rubrique><br /><br />
Sicut in holocausto arietum et taurorum,<br />
et sicut in milibus agnorum pinguium :<br />
sic fiat sacrificium nostrum in conspectu tuo hodie,<br />
ut placeat tibi :<br />
quia non est confusio<br />
confidentibus in te, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wie bei einem Brandopfer von Widdern und Stieren<br />
und wie bei Tausenden von fetten Lämmern,<br />
so geschehe heute unser Opfer vor deinem Angesicht,<br />
damit es dir gefalle.<br />
Denn keine Beschämung widerfährt denen,<br />
die auf dich vertrauen, Herr.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Christus resurgens<br />
ex mortuis iam non moritur,<br />
mors illi ultra non dominabitur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Christus, auferstanden<br />
von den Toten, stirbt nicht mehr;<br />
der Tod hat keine Macht mehr über ihn.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Inclina aurem tuam, accelera,<br />
ut eruas nos.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Neige dein Ohr zu mir, eile,<br />
uns heraus zu holen!</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 294 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
