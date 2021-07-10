<!-- DEBUG-VIEW START 292 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
Deus in loco sancto suo :<br />
Deus, qui inhabitare facit unanimes in domo :<br />
ipse dabit virtutem et fortitudinem plebi suae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gott an seinem heiligen Ort!<br />
Gott, der Einmütige wohnen lässt in seinem Haus,<br />
er selbst wird geben Macht und Stärke seinem Volk.</ion-text></ion-col> </ion-row></ion-grid>Ps. Exsurgat Deus, et dissipentur inimici eius :<br />
et fugiant, qui oderunt eum a facie eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gott steht auf, seine Feinde zerstieben;<br />
die ihn hassen, fliehen vor seinem Angesicht.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Unam petii a Domino,<br />
hanc requiram :<br />
ut inhabitem in domo Domini<br />
omnibus diebus vitae meae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nur eines erbitte ich vom Herrn,<br />
danach verlangt mich:<br />
Im Haus des Herrn zu wohnen<br />
alle Tage meines Lebens.</ion-text></ion-col> </ion-row></ion-grid>V./  Ut videam voluptatem Domini:<br />
et protegar a templo sancto eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Um die Freundlichkeit des Herrn zu schauen<br />
und Zuflucht zu finden in seinem heiligen Tempel.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Gaudete iusti in Domino :<br />
rectos decet collaudatio.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Freut euch, ihr Gerechten, im Herrn!<br />
Den Aufrichtigen ziemt Lobgesang.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
In te speravi, Domine:<br />
dixi: tu es Deus meus,<br />
in manibus tuis tempora mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Auf dich habe ich meine Hoffnung gesetzt.<br />
Ich sprach: Du bist mein Gott.<br />
In deinen Händen liegt mein Geschick [meine Zeit].</ion-text></ion-col> </ion-row></ion-grid>V./  Illumina faciem tuam super servum tuum,<br />
et salvum me fac propter misericordiam tuam:<br />
Domine, non confundar,<br />
quoniam invocavi te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lass dein Angesicht leuchten über deinem Knecht,<br />
mache mich heil in deiner Barmherzigkeit.<br />
Herr, lass mich nicht zuschanden werden,<br />
denn dich habe ich angerufen.</ion-text></ion-col> </ion-row></ion-grid>V./  Quam magna multitudo dulcedinis tuae, Domine,<br />
quam abscondisti timentibus te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wie groß ist die Fülle deiner Güte, Herr,<br />
die du für die verborgen hast, die dich fürchten.</ion-text></ion-col> </ion-row></ion-grid>V./  Perfecisti autem sperantibus in te<br />
in conspectu filiorum hominum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Bereitet hast du sie für die,<br />
die auf dich hoffen vor dem Angesicht der Menschenkinder.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Tolle puerum et matrem eius,<br />
et vade in terram Iuda:<br />
<span class="fc">defuncti sunt</span> enim, qui quaerebant animam pueri.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nimm den Knaben und seine Mutter<br />
und zieh in das Land Juda;<br />
denn die dem Kind nach dem Leben getrachtet haben, sind tot.</ion-text></ion-col> </ion-row></ion-grid> <b>Tollite</b> <i>(et matrem)</i> eius<br />
et vade in terram Iuda:<br />
defuncti sunt <i>(enim) </i>, qui quaerebant animam pueri.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nehmt (auch seine Mutter)<br />
und zieh in das Land Juda;<br />
gestorben sind (nämlich), die dem Kind nach dem Leben trachteten.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Fili, quid fecisti nobis sic?<br />
Ego et pater tuus dolentes quaerebamus te.<br />
Quid est quod me quaerebatis?<br />
Nesciebatis quia in his quae Patris mei sunt oportet me esse?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Kind, warum hast du uns das getan?<br />
Ich und dein Vater haben dich mit Schmerzen gesucht!<br />
Warum habt ihr mich gesucht?<br />
Wusstet ihr nicht, dass ich in dem sein muß, was meines Vaters ist?</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Fili, quid fecisti nobis sic?<br />
Ego et pater tuus dolentes quaerebamus te.<br />
Quid est quod me quaerebatis?<br />
Nesciebatis quia in his quae Patris mei sunt oportet me esse?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Kind, warum hast du uns das getan?<br />
Ich und dein Vater haben dich mit Schmerzen gesucht!<br />
Warum habt ihr mich gesucht?<br />
Wusstet ihr nicht, dass ich in dem sein muß, was meines Vaters ist?</ion-text></ion-col> </ion-row></ion-grid></template>
	
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
