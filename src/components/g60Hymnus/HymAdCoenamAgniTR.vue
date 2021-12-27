<template>
Ad cœnam Agni providi,<br />
stolis salutis candidi,<br />
post transitum maris Rubri<br />
Christo cananmus principi.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        L'Agneau nous convie à sa table,<br />
        vêtus de blanc par son salut ;<br />
        après avoir passé la mer,<br />
        célébrons le Christ notre chef.
    </template>
    <template v-if="lang == 'de'">
        Zum Mahl des Lammes vorgesehen,<br />
        mit den weißen Gewändern des Heils gekleidet;<br />
        nach dem Durchgang durch das rote Meer,<br />
        singen wir Christus, dem Fürsten.
</template>
</ion-text></ion-col> </ion-row></ion-grid>
Cuius corpus sanctissimum<br />
in ara crucis torridum,<br />
sed et cruorem roseum<br />
gustando, Deo vivimus.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        En goûtant sa chair toute sainte,<br />
        brulée sur l'autel de la Croix,<br />
        en goûtant le vin de son sang,<br />
        nous vivons de la vie de Dieu.
    </template>
    <template v-if="lang == 'de'">
        Dessen allerheiligsten Leib,<br />
        auf dem Altar des Kreuzes verdorrt,<br />
        und auch sein rotes Blut <br />
        indem wir dies kosten, leben wir unserem Gott.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Protecti paschae vespero<br />
a devastante angelo,<br />
de Pharaonis aspero<br />
sumus erepti imperio.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        Protégés au soir de la Pâque <br />
        contre l'ange exterminateur, <br />
        nous avons été arrachés <br />
        au dur pouvoir du Pharaon.
    </template>
    <template v-if="lang == 'de'">
        Geschützt am Abend des Pascha<br />
        vor dem verwüstenden Engel,<br />
        von der harten Herrschaft des Pharao<br />
        sind wir erlöst.    
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Iam pascha nostrum Christus est,<br />
agnus occisus innocens ;<br />
sinceritatis azyma<br />
qui carnem suam obtulit.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        C'est le Christ qui est notre Pâque, <br />
        Agneau innocent immolé ; <br />
        pain azyme de pureté, <br />
        il a livré sa propre chair.
    </template>
    <template v-if="lang == 'de'">
        Unser Osterlamm ist Christus,<br />
        ein Lamm, unschuldig geschlachtet;<br />
        das ungesäuerte Brot der Reinheit,<br />
        das seinen Leib geopfert hat.
            </template>
</ion-text></ion-col> </ion-row></ion-grid>
O vera, digna hostia,<br />
per quam franguntur tartara,<br />
captiva plebs redimitur,<br />
redduntur vitae praemia!<br />
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        O victime vraiment digne<br />
        brisant la porte des enfers :<br />
        le peuple captif est racheté,<br />
        les biens de la vie sont rendus.
    </template>
    <template v-if="lang == 'de'">
    Du wahres, würdiges Opfer,<br />
    durch welches das Reich der Unterwelt zerbrochen,<br />
    das gefangene Volk erlöst wurde<br />
    und die Belohnungen des Lebens wieder erworben sind.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Consurgit Christus tumulo,<br />
victor redit de barathro,<br />
tyrannum trudens vinculo<br />
et paradisum reserans.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        Le Christ se lève de la tombe ;<br />
        il revient de l’abîme en vainqueur,<br />
        poussant le tyran enchaîné,<br />
        rouvrant l’entrée du Paradis.
    </template>
    <template v-if="lang == 'de'">
    Als Sieger ersteht Christus vom Grabe,<br />
    als Sieger kehrt er aus dem Abgrund zurück;<br />
    den gefesselten Tyrannen vor sich her stoßend,<br />
    das Paradies wieder öffnend.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Quǽsumus, Auctor ómnium,<br />
In hoc pascháli gáudio,<br />
Ab omni mortis ímpetu<br />
Tuum defénde pópulum.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        Nous vous prions, Auteur de toute chose,<br />
        en cette joie pascale<br />
        de tout assaut de la mort<br />
        défendez votre peuple.
    </template>
    <template v-if="lang == 'de'">
    Wir bitten dich, du Schöpfer des Alls,<br />
    in dieser österlichen Freude:<br />
    vor jedem Ansturm des Todes<br />
    verteidige dein Volk!
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
</template>
<script setup lang="ts">
let lang = "fr";
const language = localStorage.getItem("lang");
if (language) {
  lang = language;
}
</script>

