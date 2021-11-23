<template>
Qua Christus hora sitiit<br />
crucem vel in qua subiit,<br />
quos præstat in hac psallere<br />
ditet siti  iustitiæ.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        C´est à l`heure où le Christ eu soif,<br />
        l´heure où il monta sur la croix ;<br />
        qu´il donne soif de la justice<br />
        à ceux qui le chantent à cette heure.
    </template>
    <template v-if="state.language == 'de'">
        Dies ist die Stunde, da Christus dürstete,<br />
        die Zeit, da er an das Kreuz ging;<br />
        die sich darin übertreffen, zu dieser Zeit zu singen,<br />
        bereichert ihr Durst nach Gerechtigkeit.    
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Simul si his esuries,<br />
quam ipse de se satiet,<br />
crimen sit ut fastidium<br />
virtusque desiderium.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Qu´ils ressentent aussi cette faim<br />
        que lui seul peut rassasier ;<br />
        que le dégoût soit un péché,<br />
        et l´appétit une vertu.
    </template>
    <template v-if="state.language == 'de'">
        Zugleich, wenn du danach hungerst,<br />
        kann er allein dich davon sättigen;<br />
        Verbrechen sei dir wie ein Ekel,<br />
        Begehren eine Tugend.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Charisma Sancti Spiritus<br />
sic influat psallentibus,<br />
ut carnis æstus frigeat<br />
et mentis algor ferveat.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Qu´il répande le don du Saint-Esprit<br />
        sur ceux qui chantent,<br />
        pour tempérer l´ardeur de la chair<br />
        et réchauffer la froideur de l´âme.
    </template>
    <template v-if="state.language == 'de'">
        Die Gnade des Heiligen Geistes<br />
        ströme so in die Sänger ein,<br />
        dass die Hitze des Fleisches gekühlt<br />
        und die Kälte der Seele gewärmt werde.    
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