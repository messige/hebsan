<template>
Dei fide, qua vivimus,<br />
qua spe perenni credimus,<br />
per caritatis gratiam<br />
Christi canamus gloriam.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Dans la foi en Dieu, dont nous vivons,<br />
        dans l´espérance sans fin par laquelle nous croyons,<br />
        par la grâce de la charité,<br />
        chantons la gloire du Christ.
    </template>
    <template v-if="state.language == 'de'">
        Durch Gottes Treue, aus der wir leben,<br />
        durch die wir in ewiger Hoffnung glauben,<br />
        durch die Gnade der Liebe,<br />
        besingen wir die Herrlichkeit Christi.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Qui ductus hora tertia<br />
ad passionis hostiam,<br />
crucis ferens suspendia<br />
ovem reduxit perditam.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Conduit à la troisème heure<br />
        à l´immolation de sa passion,<br />
        chargé du gibet de la croix,<br />
        il a ramené la brebis perdue.
    </template>
    <template v-if="state.language == 'de'">
        Der zur dritten Stunde<br />
        zum Opfer des Leidens geführt wurde,<br />
        das Erhängen am Kreuz auf sich nahm,<br />
        das verlorene Schaf zurückführte.    
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Precemur ergo subditi,<br />
redemptione liberi,<br />
ut eruat a saeculo<br />
quos solvit a chirographo.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Prions donc avec soumission<br />
        qu´après nous avoir libérés par la rédemption,<br />
        il arrache au monde<br />
        ceux dont il a acquitté la dette.
    </template>
    <template v-if="state.language == 'de'">
        Bitten wir daher, unterwürfig,<br />
        durch unsere Erlösung frei,<br />
        dass er vor der sündigen Welt errette,<br />
        die er vom Schuldbrief löste.    
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