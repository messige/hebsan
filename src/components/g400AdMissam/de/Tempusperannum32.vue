<!-- DEBUG-VIEW START 276 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
Intret oratio mea in conspectu tuo :<br />
inclina aurem tuam ad precem meam Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lass mein Gebet zu dir dringen,<br />
neige dein Ohr meinem Flehen zu, Herr.</ion-text></ion-col> </ion-row></ion-grid>Ps. Domine Deus salutis meae,<br />
in die clamavi, et nocte coram te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, Gott meines Heiles,<br />
bei Tag schrie ich, und nachts vor dir!</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Dirigatur oratio mea sicut incensum in conspectu tuo, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wie ein Rauchopfer steige mein Gebet vor dir (deinem Angesicht) auf, Herr.</ion-text></ion-col> </ion-row></ion-grid>V./  Elevatio manuum mearum sacrificium vespertinum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Das Erheben meiner Hände sei ein abendliches Opfer.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Quinque prudentes virgines acceperunt oleum<br />
in vasis suis cum lampadibus :<br />
media autem nocte clamor <span class="fc">factus est</span> :<br />
ecce sponsus venit :<br />
exite obviam Christo Domino.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Die fünf klugen Jungfrauen nahmen Öl<br />
in ihren Gefäßen mitsamt ihren Lampen.<br />
Mitten in der Nacht aber entstand ein Geschrei:<br />
Seht: Der Bräutigam kommt!<br />
Geht ihm entgegen, Christus dem Herrn!</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Qui posuit fines tuos pacem,<br />
et adipe frumenti satiat te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der deinen Grenzen Frieden verschafft<br />
und dich mit bestem Weizen sättigt.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Qui posuit fines tuos pacem,<br />
et adipe frumenti satiat te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der deinen Grenzen Frieden verschafft<br />
und dich mit bestem Weizen sättigt.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Offertorium</rubrique><br /><br />
Gressus meos dirige Domine secundum eloquium tuum :<br />
ut non dominetur omnis iniustitia, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Festige meine Schritte, wie du es verheißen hast.<br />
Lass kein Unrecht über mich herrschen, Herr!</ion-text></ion-col> </ion-row></ion-grid>V./  Declaratio sermonum tuorum illuminat me<br />
et intellectum dat parvulis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Die Offenbarung deiner Worte erleuchtet mich<br />
und gibt den Kindern Einsicht.</ion-text></ion-col> </ion-row></ion-grid>V./  Cognovi Domine,<br />
quia aequitas iudicia tua,<br />
et in veritate tua humiliasti me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Erkannt habe ich, Herr,<br />
dass deine Urteile Gerechtigkeit sind,<br />
und dass du mich in deiner Wahrheit erniedrigt hast.</ion-text></ion-col> </ion-row></ion-grid>V./  Ut non dominetur omnis iniustitia, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Damit nicht herrsche über mich irgend ein Unrecht.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Quinque prudentes virgines acceperunt oleum<br />
in vasis suis cum lampadibus :<br />
media autem nocte clamor <span class="fc">factus est</span> :<br />
ecce sponsus venit :<br />
exite obviam Christo Domino.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Die fünf klugen Jungfrauen nahmen Öl<br />
in ihren Gefäßen mitsamt ihren Lampen.<br />
Mitten in der Nacht aber entstand ein Geschrei:<br />
Seht: Der Bräutigam kommt!<br />
Geht ihm entgegen, Christus dem Herrn!</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Dominus regit me,<br />
et nihil mihi deerit :<br />
in loco pascuae ibi me collocavit :<br />
super aquam refectionis educavit me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr ist mein Hirte,<br />
nichts wird mir fehlen.<br />
Am Ort frischen Grases, dort ließ er mich wohnen,<br />
am Wasser der Ruhe zog er mich auf.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Dominus regit me,<br />
et nihil mihi deerit :<br />
in loco pascuae ibi me collocavit :<br />
super aquam refectionis educavit me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr ist mein Hirte,<br />
nichts wird mir fehlen.<br />
Am Ort frischen Grases, dort ließ er mich wohnen,<br />
am Wasser der Ruhe zog er mich auf.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 276 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
