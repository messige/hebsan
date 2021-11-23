<template>
Ternis ter horis numerus<br />
nobis sacratus panditur,<br />
sanctoque Iesu nomine<br />
munus precemur veniæ.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Quand nous célébrons le mystère<br />
        qui consacre la neuvième heure<br />
        par le très saint nom de Jésus<br />
        implorons l´octroi du pardon.
    </template>
    <template v-if="state.language == 'de'">
        Die Zahl der neunten Stunde<br />
        tut uns geheiligt kund,<br />
        wenn wir in Jesu heiligem Namen<br />
        die Gnade der Vergebung erflehen.
 </template>
</ion-text></ion-col> </ion-row></ion-grid>
Latronis, en, confessio<br />
Christi meretur gratiam;<br />
laus nostra vel devotio<br />
mercetur indulgentiam.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Si la confession du larron<br />
        lui valut la grâce du Christ<br />
        que notre zèle et nos louanges<br />
        obtiennent pour nous l´indulgence.
    </template>
    <template v-if="state.language == 'de'">
        Da, das Geständnis des Diebes<br />
        brachte ihm die Gnade Christi;<br />
        unser Lob und unsere Demut<br />
        bringe auch uns Nachsicht.
 </template>
</ion-text></ion-col> </ion-row></ion-grid>
Mors per crucem nunc interit<br />
et post tenebras lux redit;<br />
horror dehiscat criminum<br />
splendor nitescat mentium.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Ici la croix défait la mort<br />
        et le jour revient après l´ombre<br />
        que cède la nuit du péché<br />
        que brille l´éclat de nos âmes !
    </template>
    <template v-if="state.language == 'de'">
        Durch das Kreuz geht nun der Tod zugrunde,<br />
        und nach der Finsternis kehrt das Licht zurück;<br />
        der Schrecken vor dem Verbrechen tue sich auf,<br />
        der Glanz unserer Seele strahle auf!
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
</template>
<script>
    import { useState }         from '../../store/store';
    export default {
        setup ( ) {
            const state         = useState ( ) ;
            return { state }
    }
  }
</script>
