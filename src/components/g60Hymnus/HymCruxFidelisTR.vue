<template>
Hic acetum, fel, arundo,<br />
sputa, clavi, lancea;<br />
mite corpus perforatur,<br />
sanguis, unda profluit;<br />
Terra, pontus , astra, mundus<br />
quo lavantur flumine !
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        Voici vinaigre, fiel, roseau<br />
        crachats, clous et lance<br />
        le doux corps est transpercé<br />
        le sang et l'eau ruissellent<br />
        terre, mer, astres et monde<br />
        quel fleuve vous lave !
    </template>
    <template v-if="lang == 'de'">
        Seht, da! Essig, Galle, Schilf,<br>
        Spucke, Nägel und Lanze;<br>
        der weiche Körper durchstochen,<br>
        Blut und Wasser fließen heraus;<br>
        Land, Meer, Sterne und Welt,<br>
        die in diesem Fluss gewaschen werden.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Crux fidelis, inter omnes<br />
arbor una nobilis<br />
nulla silva talem profert<br />
fronde, flore, germine<br />
dulce lignum, dulces clavos,<br />
dulce pondus sustinet.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        Croix fidèle,arbre  unique,<br />
        noble entre tous;<br />
        nulle forêt n'en produit de tel<br />
        par ses feuilles, ses fleurs et ses fruits;<br />
        Douceur du bois, qui d'un doux clou,<br />
        porte un si doux fardeau.
    </template>
    <template v-if="lang == 'de'">
        Treues Holz, unter allen<br />
        bist du ein einzig edler Baum;<br />
        kein Wald bringt solch einen hervor,<br />
        an Laub, Blüten, Früchten dir gleich.<br />
        Süßes Holz, süße Nägel!<br />
        Süße Last hält er empor.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Flecte ramos, arbor alta,<br />
tensa laxa viscera,<br />
et rigor lentescat ille<br />
quem dedit nativitas,<br />
ut superni membra regis<br />
miti tendas stipite.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        Fléchis tes branches, grand arbre,<br />
        relâche le corps tendu ;<br />
        assouplis la dureté reçue de la nature ;<br />
        aux membres du roi des cieux<br />
        offre un appui plus doux.
    </template>
    <template v-if="lang == 'de'">
        Beuge deine Äste, du hoher Baum,<br>
        spanne weit dein Innerstes aus,<br>
        und dies erweiche so die Härte,<br>
        die deine Geburt dir verlieh,<br>
        damit des höchsten Königs Glieder<br>
        du sanft am Stamme ausstrecken kannst.<br />
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Sola digna tu fuisti <br />
ferre saecli pretium,<br />
atque portum naufrago,<br />
quem sacer crour perunxit<br />
fusus agni corpore.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        Toi seul as mérité de porter <br />
        la rançon du monde et de lui préparer <br />
        un hâvre après son naufrage,<br />
        toi qui fus oint du sang sacré <br />
        jailli du corps de l'agneau.
    </template>
    <template v-if="lang == 'de'">
        Du allein warst würdig,<br />
        das Lösegeld der Welt zu bringen,<br>
        und einen Hafen der Zuflucht nach unserem Untergang,<br>
        der mit deinem heiligem Blut gesalbt wurde,<br>
        vergossen vom Körper des Lammes.
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
