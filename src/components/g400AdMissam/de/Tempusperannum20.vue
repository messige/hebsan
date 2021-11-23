<!-- DEBUG-VIEW START 324 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Protector noster aspice, Deus,<br />
et respice in faciem Christi tui:<br />
quia melior est dies una in atriis tuis<br />
super milia.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Du, unser Beschützer, Gott,<br />
sieh doch; blicke auf das Angesicht deines Gesalbten!<br />
Denn ein Tag in deinen Vorhöfen ist besser<br />
als tausend andere.</ion-text></ion-col> </ion-row></ion-grid>Ps. Quam dilecta tabernacula tua,<br />
Domine, virtutum!<br />
concupiscit et deficit anima mea in atria Domini.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wie liebenswert sind deine Wohnungen,<br />
o Herr der Heerscharen!<br />
Meine Seele verlangt und sehnt sich nach dem Tempel des Herrn.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Bonum est confidere in Domino,<br />
quam confidere in homine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gut ist es, zu vertrauen auf den Herrn,<br />
(besser) als zu vertrauen auf den Menschen.</ion-text></ion-col> </ion-row></ion-grid>V./  Bonum est sperare in Domino<br />
quam sperare in principibus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gut ist es, zu hoffen auf den Herrn,<br />
(besser) als zu hoffen auf Fürsten.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Venite, exsultemus Domino :<br />
iubilemus Deo salutari nostro.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Kommt, lasst uns jauchzen dem Herrn,<br />
lasst uns jubeln zu Gott, unserem Heil.</ion-text></ion-col> </ion-row></ion-grid> Praeoccupemus faciem eius<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lasst uns vor sein Antlitz treten...</ion-text></ion-col> </ion-row></ion-grid> Hodie si vocem eius audieritis<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Heute, wenn ihr seine Stimme hören werdet.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Caro mea vere est cibus,<br />
et sanguis meus vere est potus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mein Fleisch ist wahrhaftig eine Speise<br />
und mein Blut ist wahrhaftig ein Trank.</ion-text></ion-col> </ion-row></ion-grid> Qui manducat carnem meam,<br />
et bibit sanguinem meum,<br />
in me manet, et ego in eo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wer mein Fleisch isst<br />
und mein Blut trinkt,<br />
der bleibt in mir und ich in ihm.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Venite, exsultemus Domino :<br />
iubilemus Deo salutari nostro.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Kommt, lasst uns jauchzen dem Herrn,<br />
lasst uns jubeln zu Gott, unserem Heil.</ion-text></ion-col> </ion-row></ion-grid> Praeoccupemus faciem eius<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lasst uns vor sein Antlitz treten...</ion-text></ion-col> </ion-row></ion-grid> Hodie si vocem eius audieritis<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Heute, wenn ihr seine Stimme hören werdet.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Offertorium</rubrique><br /><br />
Immittet angelus Domini<br />
in circuitu timentium eum,<br />
et eripiet eos :<br />
gustate et videte,<br />
quoniam suavis est Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Engel des Herrn umschirmt alle,<br />
die ihn fürchten und ehren,<br />
und er befreit sie.<br />
Kostet und seht,<br />
wie gütig der Herr ist!</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Domus mea, domus orationis vocabitur, <br>dicit Dominus :<br />
in ea omnis, qui petit, accipit :<br />
et qui quaerit, invenit, <br>et pulsanti aperietur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mein Haus soll ein Haus des Gebetes genannt werden,<br>spricht der Herr.<br />
In ihm erhält jeder, der bittet;<br />
und wer sucht, der findet; <br>und wer anklopft, dem wird geöffnet.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Qui manducat carnem meam,<br />
et bibit sanguinem meum,<br />
in me manet, et ego in eo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wer mein Fleisch isst<br />
und mein Blut trinkt,<br />
der bleibt in mir und ich in ihm.</ion-text></ion-col> </ion-row></ion-grid> Dicit Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">So spricht der Herr.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Primum quaerite regnum Dei,<br />
et omnia adicientur vobis,<br />
dicit Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Sucht zuerst das Reich Gottes,<br />
und alles andere wird euch hinzugegeben werden,<br />
spricht der Herr.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 324 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
