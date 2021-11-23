<template>
Te lucis ante terminum<br />
rerum creator poscimus<br />
ut solita clementia<br />
sis praesul ac custodiam.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Avant que s'achève ce jour,<br />
        nous t'en prions, Dieu Créateur :<br />
        en ton inlassable bonté,<br />
        veille sur nous pour notre garde.
    </template>
    <template v-if="state.language == 'de'">
        Vor dem Verschwinden des Lichtes<br />
        bitten wir dich, du Schöpfer der Dinge,<br />
        dass du nach deiner Güte<br />
        unser Schützer und Wächter seist.    
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
Procul recedant somnia<br />
et noctium phantasmata<br />
hostemque nostrum comprime<br />
ne polluantur corpora.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Que les songes et les fantômes de la nuit<br />
        s'enfuient loin de nous.<br />
        Eloigne notre ennemi ;<br />
        qu'il ne profane point nos corps.
    </template>
    <template v-if="state.language == 'de'">
        Hüllt Schlaf die müden Glieder ein,<br />
        lass uns in dir geborgen sein<br />
        und mach am Morgen uns bereit<br />
        zum Lobe deiner Herrlichkeit.
</template></ion-text></ion-col> </ion-row></ion-grid>
Praesta, Pater piissime<br />
Patrique compar Unice<br />
cum Spiritu Paraclito<br />
regnans per omne saeculum.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Fais-nous cette grâce, ô Père très miséricordieux;<br /> 
        et Toi, ô Fils unique, égal au Père,<br />
        qui, avec l'Esprit consolateur,<br />
        régnez dans tous les siècles.
    </template>
    <template v-if="state.language == 'de'">
        Dank dir, o Vater reich an Macht,<br />
        der über uns voll Güte wacht<br />
        und mit dem Sohn und Heilgen Geist<br />
        des Lebens Fülle uns verheißt.
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
