<template>
Aurora lucis rutilat,<br />
caelum laudibus intonat<br />                    <!-- caelum resultat laudibus, -->
mundus exsultans iubilat,<br />
gemens infernus ululat.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        L'aurore éclate de lumière<br />
        le ciel résonne de louanges<br />
        le monde exulte d'allégresse<br />
        l'Enfer gémit et se lamente.
    </template>
    <template v-if="state.language == 'de'">
        Des Lichtes Dämmerung beginnt zu schimmern,<br />
        der Himmel hallt wider von Lobgesängen,<br />
        die Welt jauchzt und frohlockt,<br />
        die Hölle stöhnt und heult.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Cum rex ille fortissimus,<br />
mortis confractus viribus,<br />
pede conculcans tartara<br />
solvit a poena miseros.                          <!-- solvit catena miseros. -->
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Car notre roi si valeureux<br />
        a brisé les forces de Mort<br />
        foulant de son pied les Enfers<br />
        il libère les malheureux.
    </template>
    <template v-if="state.language == 'de'">
        Wenn jener König, äußerst stark,<br />
        des Todes Kräfte vernichtet;<br />
        die Unterwelt mit seinem Fuß zertritt,<br />
        die Armen von ihrer Strafe löst.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Ille qui clausum lapide <br />                   <!-- Ille, quem clausum lapide -->
custoditur cum milite<br />                      <!-- miles custodit acriter, -->
triumphans pompa nobili <br />
victor surgit de funere.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Lui, que les soldats vigilants<br />
        gardaient enfermé sous la pierre,<br />
        il triomphe en noble cortège,<br />
        et surgit vainqueur du trépas.
    </template>
    <template v-if="state.language == 'de'">
        Jener, den, eingeschlossen unter einem Stein,<br />
        entschlossen ein Soldat bewacht,<br />
        er triumphiert in edlem Gepränge,<br />
        und geht als Sieger aus dem Tod hervor.    
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Solutis iam gemitibus<br />
Et inferni doloribus,<br />
Quia surrexit Dominus,<br />
Resplendens clamat angelus.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Qu'on cesse de gémir, il n'est plus de misères,<br />
        Leur triste cours est arrêté :<br />
        De la prison du limbe un mort tire nos pères,<br />
        Et l'ange nous annonce un Dieu ressuscité.
    </template>
    <template v-if="state.language == 'de'">
    Das Stöhnen wurde beendet<br />
    und die Schmerzen der Unterwelt<br />
    denn der Herr ist auferstanden<br />
    erstrahlend verkündet dies der Engel.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Quæsumus, Auctor omnium,<br />
In hoc Paschali gaudio,<br />
Ab omni mortis impetu<br />
Tuum defende populum.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Sauveur de tout le monde, en cette pleine joie<br />
        Dont la Pâque remplit nos cœurs,<br />
        Daigne si bien guider ton peuple dans ta voie,<br />
        Que d'une mort funeste il échappe aux rigueurs.
    </template>
    <template v-if="state.language == 'de'">
    Wir bitten dich, du Schöpfer des Alls,<br />
    in dieser österlichen Freude:<br />
    vor jedem Ansturm des Todes<br />
    verteidige dein Volk!
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
