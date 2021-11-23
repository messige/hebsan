<!-- DEBUG-VIEW START 298 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<template v-if="annoABC == 'A' || annoABC == 'B'"><rubrique>Introitus</rubrique><br /><br />
Benedicta sit sancta Trinitas,<br />
atque indivisa Unitas,<br />
confitebimur ei,<br />
quia fecit nobiscum misericordiam suam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gepriesen sei die heilige Dreieinigkeit<br />
und ungeteilte Einheit.<br />
Lasst uns sie preisen,<br />
denn sie hat uns ihr Erbarmen geschenkt.</ion-text></ion-col> </ion-row></ion-grid>Ps. Domine Dominus noster,<br />
quam admirabile est nomen tuum in universa terra.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, unser Herrscher,<br />
wie wunderbar ist dein Name auf der ganzen Erde!</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Introitus</rubrique><br /><br />
Caritas Dei <span class="fc">diffusa est</span> in cordibus nostris, alleluia :<br />
per inhabitantem Spiritum eius in nobis,<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Die Liebe Gottes, ausgegossen wurde sie in unsere Herzen, Halleluja,<br />
durch den Heiligen Geist, der in uns innewohnt.</ion-text></ion-col> </ion-row></ion-grid>Ps. Domine Deus salutis meae,<br />
in die clamavi et nocte coram te :<br />
intret oratio mea in conspectu tuo, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, du Gott meines Heiles,<br />
bei Tag und in der Nacht schreie ich vor dir!<br />
Möge mein Gebet vor dein Angesicht kommen, Herr.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Graduale</rubrique><br /><br />
<span class="fc">Benedictus es</span>, Domine,<br />
qui intueris abyssos,<br />
et sedes super Cherubim.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gepriesen bist du, Herr,<br />
der du in die Tiefen schaust<br />
und auf den Kerubim thronst.</ion-text></ion-col> </ion-row></ion-grid>V./  <span class="fc">Benedictus es</span> Domine,<br />
in firmamento caeli,<br />
et laudabilis in saecula.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gepriesen bist du, Herr,<br />
am Gewölbe des Himmels,<br />
und lobwürdig in Ewigkeit.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Hymnus</rubrique><br /><br />
<span class="fc">Benedictus es</span>, Domine,<br />
Deus Patrum nostrorum,<br />
et laudabilis et gloriosus in saecula.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gepriesen bist du, Herr,<br />
du Gott unserer Väter,<br />
gelobt und gerühmt in Ewigkeit.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
<span class="fc">Benedictus es</span>, Domine,<br />
Deus Patrum nostrorum,<br />
et laudabilis et gloriosus in saecula.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gepriesen bist du, Herr,<br />
du Gott unserer Väter,<br />
gelobt und gerühmt in Ewigkeit.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
<span class="fc">Benedictus sit</span> Deus Pater,<br />
unigenitusque Dei Filius,<br />
Sanctus quoque Spiritus:<br />
quia fecit nobiscum misericordiam suam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gepriesen sei Gott, der Vater,<br />
und Gottes eingeborener Sohn<br />
und der Heilige Geist;<br />
denn er hat uns sein Erbarmen geschenkt.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Benedicimus Deum caeli,<br />
et coram omnibus viventibus confitebimur ei :<br />
quia fecit nobiscum misericordiam suam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wir preisen den Gott des Himmels<br />
und vor allen Lebenden bekennen wir ihn,<br />
denn er hat uns sein Erbarmen geschenkt.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
<span class="fc">Data est</span> mihi omnis potestas in caelo et in terra, alleluia :<br />
euntes, docete omnes gentes,<br />
baptizantes eos in nomine Patris, et Filii, et Spiritus Sancti.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gegeben ist mir alle Macht, im Himmel und auf Erden, Halleluja.<br />
Geht, lehrt alle Völker,<br />
tauft sie im Namen des Vaters und des Sohnes und des Heiligen Geistes.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Benedicimus Deum caeli,<br />
et coram omnibus viventibus confitebimur ei :<br />
quia fecit nobiscum misericordiam suam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wir preisen den Gott des Himmels<br />
und vor allen Lebenden bekennen wir ihn,<br />
denn er hat uns sein Erbarmen geschenkt.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 298 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
