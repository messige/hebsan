<!-- DEBUG-VIEW START 302 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Deus in loco sancto suo :<br />
Deus, qui inhabitare facit unanimes in domo :<br />
ipse dabit virtutem et fortitudinem plebi suae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gott an seinem heiligen Ort!<br />
Gott, der Einmütige wohnen lässt in seinem Haus,<br />
er selbst wird geben Macht und Stärke seinem Volk.</ion-text></ion-col> </ion-row></ion-grid>Ps. Exsurgat Deus, et dissipentur inimici eius :<br />
et fugiant, qui oderunt eum a facie eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gott steht auf, seine Feinde zerstieben;<br />
die ihn hassen, fliehen vor seinem Angesicht.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
In Deo speravit cor meum,<br />
et <span class="fc">adiutus sum</span> :<br />
et refloruit caro mea :<br />
et ex voluntate mea :<br />
confitebor illi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Auf Gott hoffte mein Herz,<br />
und er hat mir geholfen,<br />
und wieder aufgeblüht ist mein Fleisch;<br />
und durch meinen Willen:<br />
ich will ihn preisen.</ion-text></ion-col> </ion-row></ion-grid>V./  Ad te, Domine, clamavi:<br />
Deus meus, ne sileas:<br />
ne discedas a me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Zu dir, Herr, rufe ich;<br />
mein Gott, schweige doch nicht,<br />
weiche nicht von mir.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Oculi omnium in te sperant, Domine :<br />
et tu das illis escam in tempore opportuno.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Aller Augen warten auf dich, Herr:<br />
Und du gibst ihnen ihre Speise zur rechten Zeit.</ion-text></ion-col> </ion-row></ion-grid>V./  Aperis tu manum tuam:<br />
et imples omne animal benedictione.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Du öffnest deine Hand,<br />
und erfüllst jedes Lebewesen mit Wohlgefallen.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Exsultate Deo adiutori nostro.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jubelt Gott zu, er ist unsere Hilfe.</ion-text></ion-col> </ion-row></ion-grid> iubilate Deo Iacob.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jauchzt dem Gott Jakobs zu!</ion-text></ion-col> </ion-row></ion-grid> Sumite psalmum iucundum cum cithara.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Stimmt einen lieblichen Lobgesang an mit der Harfe!</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Exaltabo te Domine,<br />
quoniam suscepisti me,<br />
nec delectasti inimicos meos super me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Erheben will ich dich, Herr,<br />
denn du nahmst mich auf<br />
und ließest meine Feinde nicht frohlocken über mich.</ion-text></ion-col> </ion-row></ion-grid> Domine, clamavi ad te,<br />
et sanasti me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, ich schrie zu dir,<br />
und du hast mich geheilt.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Simile est regnum caelorum homini negotiatori,<br />
quaerenti bonas margaritas;<br />
inventa una pretiosa margarita,<br />
dedit omnia sua<br />
et comparavit eam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Das Reich der Himmel gleicht einem Kaufmann,<br />
der schöne Perlen suchte.<br />
Als er eine kostbare Perle fand,<br />
gab er all das seine<br />
und kaufte sie.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Honora Dominum de tua substantia,<br />
et de primitiis frugum tuarum :<br />
ut impleantur horrea tua saturitate,<br />
et vino torcularia redundabunt.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ehre den Herrn mit deinem Vermögen<br />
und mit den Erstlingen deiner Früchte,<br />
damit deine Scheunen mit Überfluss gefüllt werden<br />
und die Keltern von Wein überlaufen.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Petite et accipietis<br />
quaerite et invenietis,<br />
pulsate et aperietur vobis.<br />
Omnis enim qui petit accipit,<br />
et qui quaerit invenit,<br />
pulsanti aperietur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Bittet, so wird euch gegeben;<br />
sucht, so werdet ihr finden; klopft an,<br />
so wird euch aufgetan!<br />
Denn jeder, der bittet, empfängt;<br />
und wer sucht, der findet;<br />
dem Anklopfenden, dem wird aufgetan.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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
