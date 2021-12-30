<!-- DEBUG-VIEW START 318 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Da pacem, Domine, sustinentibus te,<br />
ut prophetae tui fideles inveniantur:<br />
exaudi preces servi tui,<br />
et plebis tuae Israel.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gib Frieden, Herr, denen, die auf dich hoffen,<br />
damit deine Propheten als treu erfunden werden!<br />
Erhöre das Gebet deines Dieners<br />
und deines Volkes Israel.</ion-text></ion-col> </ion-row></ion-grid>Ps. <span class="fc">Laetatus sum</span> in his quae dicta sunt mihi :<br />
in domum Domini ibimus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich freute mich, als man mir sagte:<br />
„Zum Haus des Herrn wollen wir pilgern".</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
<span class="fc">Laetatus sum</span> in his quae dicta sunt mihi :<br />
in domum Domini ibimus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich freute mich, als man mir sagte:<br />
„Zum Haus des Herrn wollen wir pilgern".</ion-text></ion-col> </ion-row></ion-grid>V./  Fiat pax in virtute tua :<br />
et abundantia in turribus tuis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Friede wohne in deinen Mauern,<br />
in deinen Häusern Geborgenheit.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Timebunt gentes nomen tuum, Domine :<br />
et omnes reges terrae gloriam tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Fürchten werden die Heiden deinen Namen, Herr:<br />
und alle Könige der Erde deine Herrlichkeit.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'B'"><rubrique>Offertorium</rubrique><br /><br />
Sanctificavit Moyses altare Domino,<br />
offerens super illud holocausta,<br />
et immolans victimas :<br />
fecit sacrificium vespertinum<br />
in odorem suavitatis Domino Deo,<br />
in conspectu filiorum Israel.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mose weihte dem Herrn einen Altar,<br />
er brachte darüber Brandopfer dar,<br />
und schlachtete Opfertiere.<br />
Er brachte ein Abendopfer dar,<br />
zum Wohlgeruch für Gott, den Herrn,<br />
 vor dem Angesicht der Kinder Israels.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Offertorium</rubrique><br /><br />
<span class="fc">Precatus est</span> Moyses in conspectu Domini Dei sui,<br />
et dixit :<br />
quare, Domine, irasceris in populo tuo?<br />
Parce irae animae tuae :<br />
memento Abraham, Isaac et Iacob,<br />
quibus iurasti dare terram fluentem lac et mel.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mose betete vor dem Angesicht des Herrn, seines Gottes,<br />
und sprach:<br />
Warum, Herr, zürnst du gegen dein Volk?<br />
Mäßige den Zorn deines Herzens.<br />
Gedenke Abrahams, Isaak und Jakobs,<br />
denen du geschworen hast, ein Land zu geben, in dem Milch und Honig fließen.</ion-text></ion-col> </ion-row></ion-grid> Et placatus <span class="fc">factus est</span> Dominus de malignitate,<br />
quam dixit facere populo suo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und besänftigt wurde der Herr, weg [abzusehen] von dem Unheil,<br />
das er seinem Volk anzutun gedroht hatte.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Tollite hostias et introite in atria eius :<br />
adorate Dominum in aula sancta eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nehmt Opfergaben und tretet ein in sein Heiligtum!<br />
Betet den Herrn an in seiner heiligen Halle.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Qui vult venire post me,<br />
abneget semetipsum<br />
et tollat crucem suam,<br />
et sequatur me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wer mir nachkommen will,<br />
der verleugne sich selbst<br />
und nehme sein Kreuz auf sich<br />
und folge mir nach!</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Dico vobis: Gaudium est angelis Dei<br />
super uno peccatore paenitentiam agente.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich sage euch: Eine Freude ist bei den Engeln Gottes<br />
über einen Sünder, der Buße tut.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 318 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
