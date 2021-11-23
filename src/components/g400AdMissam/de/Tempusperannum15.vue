<!-- DEBUG-VIEW START 312 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Dum clamarem ad Dominum,<br />
exaudivit vocem meam ab his<br />
qui appropinquant mihi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Als ich zum Herrn schrie,<br />
hörte er meine Stimme, vor denen,<br />
die sich mir nahen.</ion-text></ion-col> </ion-row></ion-grid> Et humiliavit eos,<br />
qui est ante saecula,<br />
et manet in aeternum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und er beugte sie nieder, er,<br />
der ist seit Ewigkeit und bleibt in Ewigkeit.</ion-text></ion-col> </ion-row></ion-grid> Iacta cogitatum tuum in Domino,<br />
et ipse te enutriet.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wirf dein Anliegen auf den Herrn,<br />
und er selbst wird für dich sorgen.</ion-text></ion-col> </ion-row></ion-grid>Ps. Exaudi, Deus, orationem meam,<br />
et ne despexeris deprecationem meam:<br />
intende in me et exaudi me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vernimm, o Gott, mein Gebet,<br />
und verachte nicht mein Flehen,<br />
hab acht auf mich, und erhöre mich.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Introitus</rubrique><br /><br />
Ego autem cum iustitia apparebo in conspectu tuo :<br />
satiabor, dum manifestabitur gloria tua.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich aber, in Gerechtigkeit werde ich vor deinem Angesicht erscheinen,<br />
ich werde gesättigt werden, wenn mir deine Herrlichkeit sich offenbaren wird.</ion-text></ion-col> </ion-row></ion-grid>Ps. Exaudi Domine iustitiam meam:<br />
intende deprecationem meam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Höre, Herr, die gerechte Sache,<br />
achte auf mein Flehen!</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Custodi me, Domine,<br />
ut pupillam oculi :<br />
sub umbra alarum tuarum protege me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Behüte mich, Herr,<br />
wie den Stern des Auges!<br />
Unter dem Schatten deiner Flügel beschütze mich.</ion-text></ion-col> </ion-row></ion-grid>V./  De vultu tuo iudicium meum prodeat:<br />
oculi tui videant aequitatem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Von deinem Antlitz gehe das Urteil über mich aus,<br />
deine Augen mögen Recht sehen.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Ostende nobis, Domine, misericordiam tuam :<br />
et salutare tuum da nobis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Zeige uns, Herr, deine Erbarmen<br />
und schenke uns dein Heil.</ion-text></ion-col> </ion-row></ion-grid> Benedixisti, Domine, terram tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Einst hast du, Herr, dein Land begnadet.</ion-text></ion-col> </ion-row></ion-grid> Avertisti captivitatem Iacob.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und Jakobs Unglück gewendet.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Te decet hymnus, Deus, in Sion :<br />
et tibi reddetur votum in Ierusalem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dir gebührt ein Loblied, Gott, auf dem Zion,<br />
und dir bringe man Gelübde in Jerusalem.</ion-text></ion-col> </ion-row></ion-grid> Replebitur in bonis domus tuae; <br />
sanctum est templum tuum, <br />
mirabile in aequitate.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Erfüllt werden wir sein von deines Hauses Gütern. <br />
Heilig ist dein Tempel, <br />
wunderbar in Gerechtigkeit.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Ad te, Domine, levavi animam meam :<br />
Deus meus, in te confido,<br />
non erubescam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Zu dir, Herr, erhob ich meine Seele.<br />
Mein Gott, auf dich vertraue ich.<br />
Lass mich nicht zuschanden werden.</ion-text></ion-col> </ion-row></ion-grid> Neque irrideant me inimici mei:<br />
etenim universi qui te exspectant,<br />
non confundentur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lass meine Feinde mich nicht verlachen!<br />
Ja, alle, die auf dich harren,<br />
werden nicht zuschanden.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Passer invenit sibi domum, et turtur nidum,<br />
ubi reponat pullos suos :<br />
altaria tua Domine virtutum,<br />
rex meus, et Deus meus :<br />
beati qui habitant in domo tua,<br />
in saeculum saeculi laudabunt te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Auch der Sperling findet ein Haus und die Schwalbe ein Nest,<br />
wo sie ihre Jungen aufbewahren können:<br />
– deine Altäre, Herr der Heerscharen,<br />
mein Gott und mein König.<br />
Wohl denen, die wohnen in deinem Haus,<br />
in alle Ewigkeit sollen sie dich loben.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Qui manducat carnem meam,<br />
et bibit sanguinem meum,<br />
in me manet, et ego in eo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wer mein Fleisch isst<br />
und mein Blut trinkt,<br />
der bleibt in mir und ich in ihm.</ion-text></ion-col> </ion-row></ion-grid> Dicit Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">So spricht der Herr.</ion-text></ion-col> </ion-row></ion-grid>	
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

<!-- DEBUG-VIEW ENDED 312 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
