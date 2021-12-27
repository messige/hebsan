<template>
Vexilla regis prodeunt<br />
fulget crucis mysterium<br />
quo carne carnis conditor<br />
suspensus est patibulo.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        Les étendards du roi s'avancent<br />
        mystère éclatant de la croix<br />
        au gibet fut pendue la chair<br />
        du créateur de toute chair.
    </template>
    <template v-if="lang == 'de'">
        Des Königs Fahnen ziehen voran,<br>
        es glänzt das Geheimnis des Kreuzes, <br>
        wo in seinem Fleisch der Schöpfer des Fleisches,<br>
        am Galgen [des Kreuzes] aufgehängt wurde.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Quo, vulneratus insuper<br />
mucrone diro lanceae<br />
ut nos lavaret crimine<br />
manavit und<i>a</i> et sanguine.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        C'est là qu'il reçut la blessure<br />
        d'un coup de lance très cruel<br />
        et fit jaillir le sang et l'eau<br />
        pour nous laver de nos péchès.
    </template>
    <template v-if="lang == 'de'">
        An dem er, verwundet überdies noch<br />
        durch die grausame Spitze der Lanze, <br />
        um uns von unserem Verbrechen reinzuwaschen, <br />
        es von Wasser und Blut strömte.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Arbor docora et fulgida,<br />
ornata regis purpura,<br />
electa digno stipite<br />
tam sancta membra tangere !
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        Arbre dont la beauté rayonne,<br />
        paré de la pourpre du roi,<br />
        d'un bois si beau qu'il fut choisi<br />
        pour toucher ses membres très saints !
    </template>
    <template v-if="lang == 'de'">
        Du herrlicher und ausgezeichneter Baum,<br />
        geziert mit dem Purpur des Königs,<br />
        auserwählt, mit würdigem Stamme<br />
        so heilige Glieder zu berühren.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Beata, cuius brachiis<br />
saecli pependit pretium ;<br />
statera facta est corporis<br />
praedam tulitque tartari.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        Arbre bienheureux ! À tes branches<br />
        la rançon du monde a pendu !<br />
        Tu devins balance d'un corps<br />
        et ravis leur proie aux enfers !
    </template>
    <template v-if="lang == 'de'">
        Glückseliger, an dessen Ästen<br />
        der Lösepreis der Welt hing;<br />
        zur Waage des Leibes ist er geworden,<br />
        und er entriss die Beute der Hölle.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Salve, ara, salve victima,<br />
de passionis gloria,<br />
qua vita mortem pertulit<br />
et morte vitam reddidit !
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        Salut, autel ! Salut, victime<br />
        de la glorieuse passion !<br />
        La vie qui supporta la mort,<br />
        par la mort a rendu la vie.
    </template>
    <template v-if="lang == 'de'">
        Sei gegrüßt, Altar, sei gegrüßt, Opfer,<br />
        aus dem Ruhm des Leidens,<br />
        in dem das Leben den Tod ertrug<br />
        und durch den Tod das Leben wieder gewann.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
O crux, ave, spes unica !<br />
hoc passionis tempore<br />
piis adauge gratiam<br />
reisque dele crimina.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        O croix, salut, espoir unique !<br />
        En ces heures de la passion<br />
        augmente les grâces des saints,<br />
        remets les fautes des pécheurs.
    </template>
    <template v-if="lang == 'de'">
        Sei gegrüßt, o Kreuz, du einzigartige Hoffnung!<br>
        Zu dieser Zeit des Leidens<br>
        mehre den Heiligen die Gnade,<br>
        vergib den Sündern ihre Schuld.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Te, fons salutis, Trinitas,<br />
collaudet omnis spiritus ;<br />
quos per crucis mysterium<br />
salvas, fove per saecula.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        Trinité, source salutaire,<br />
        que te célèbre tout esprit ;<br />
        ceux que tu sauves par la croix,<br />
        protège-les à tout jamais.
    </template>
    <template v-if="lang == 'de'">
        Dich, Quelle des Heiles, Dreieinigkeit,<br>
        preise alles Leben; <br>
        die du durch das Geheimnis des Kreuzes <br>
        rettest, hege sie in Ewigkeit.
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

