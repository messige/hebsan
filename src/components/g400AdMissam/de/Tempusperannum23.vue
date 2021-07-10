<!-- DEBUG-VIEW START 254 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
Iustus es Domine, et rectum iudicium :<br />
fac cum servo tuo secundum misericordiam tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gerecht bist du, Herr, und richtig ist dein Urteil.<br />
Handle an deinem Knecht nach deiner Barmherzigkeit.</ion-text></ion-col> </ion-row></ion-grid>Ps. Beati immaculati in via :<br />
qui ambulant in lege Domini.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Selig, die untadelig sind auf dem Weg,<br />
die wandeln im Gesetz des Herrn.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Graduale</rubrique><br /><br />
Beata gens cuius est Dominus Deus eorum :<br />
populus quem elegit Dominus in hereditatem sibi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Selig das Volk, dessen Gott der Herr ist,<br />
das Volk, das er sich zum Erbe erwählt.</ion-text></ion-col> </ion-row></ion-grid>V./  Verbo Domini caeli <span class="fc">firmati sunt</span><br />
et spiritu oris eius omnis virtus eorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Durch das Wort des Herrn wurden die Himmel geschaffen,<br />
ihr ganzes Heer durch den Hauch seines Mundes.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Beata gens cuius est Dominus Deus eorum :<br />
populus quem elegit Dominus in hereditatem sibi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Selig das Volk, dessen Gott der Herr ist,<br />
das Volk, das er sich zum Erbe erwählt.</ion-text></ion-col> </ion-row></ion-grid>V./  Verbo Domini caeli <span class="fc">firmati sunt</span><br />
et spiritu oris eius omnis virtus eorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Durch das Wort des Herrn wurden die Himmel geschaffen,<br />
ihr ganzes Heer durch den Hauch seines Mundes.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Domine, refugium <span class="fc">factus es</span> nobis<br />
a generatione et progenie.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, Zuflucht warst du uns<br />
von Geschlecht zu Geschlecht!</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Domine exaudi orationem meam<br />
et clamor meus ad te (per)veniat.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, erhöre mein Gebet,<br />
und lass mein Rufen zu dir kommen!</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Oravi Deum meum ego Daniel, dicens :<br />
exaudi, Domine, preces servi tui :<br />
illumina faciem tuam super sanctuarium tuum :<br />
et propitius intende populum istum,<br />
super quem <span class="fc">invocatum est</span> nomen tuum, Deus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich betete zu meinem Gott, ich Daniel, ich sagte:<br />
Erhöre, Herr, die Bitten deines Knechtes.<br />
Lass dein Angesicht über deinem Heiligtum leuchten,<br />
und achte gnädig auf dieses Volk,<br />
über das dein Name angerufen ist, Gott.</ion-text></ion-col> </ion-row></ion-grid>V./  Adhuc me loquente et orante<br />
et narrante peccata mea<br />
et delicta populi mei Israel.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">So weit redete ich, und betete<br />
und bekannte meine Sünden<br />
und die Untaten meines Volkes Israel.</ion-text></ion-col> </ion-row></ion-grid>V./  Audivi vocem dicentem mihi:<br />
Daniel, intellege verba<br />
quae loquor tibi,<br />
quia ego <span class="fc">misus sum</span> ad te.<br />
Nam et Michael venit in adiutorium meum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich hörte eine Stimme, die zu mir sagte:<br />
Daniel, begreife die Worte,<br />
die ich zu dir sage.<br />
Denn ich wurde zu dir gesandt.<br />
Und sogar Michael kam mir zu Hilfe.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Vovete, et reddite Domino Deo vestro,<br />
omnes qui in circuitu eius affertis munera<br />
terribili, et ei qui aufert spiritum principum :<br />
terribili apud omnes reges terrae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Legt Gelübde ab und erfüllt sie dem Herrn, eurem Gott,<br />
ihr alle rings um ihn werdet Geschenke darbringen,<br />
dem Furchtbaren, und dem, der den Herrschenden den Geist wegnimmt.<br />
Der furchtbarer ist als alle Könige der Erde.</ion-text></ion-col> </ion-row></ion-grid>	
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

<!-- DEBUG-VIEW ENDED 254 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
