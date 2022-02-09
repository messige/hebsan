<template>
<!-- - keyCalendar = 210 - keyPiece = 8564 - keyText = 8786 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Signum magnum apparuit in caelo.<br />
mulier amicta sole<br />
et luna sub pedibus eius<br />
et in capite eius corona duodecim stellarum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Un grand signe apparut dans le ciel.<br />
Une femme revêtue du soleil<br />
et la lune sous les pieds,<br />
et sur sa tête une couronne de douze étoiles.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 1308 -->Ps. Cantate Domino canticum novum :<br />
quia mirabilia fecit.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Chantez au Seigneur un cantique nouveau :<br />
car il a fait des merveilles.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 3873 - keyText = 4034 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique><i>Ad libitum :</i><br />
Introitus</rubrique><br /><br />Gaudeamus omnes in Domino,<br />
diem festum celebrantes sub honore Mariae Virginis :<br />
de cuius assumptione gaudent angeli,<br />
et collaudant Filium Dei.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Réjouissons-nous tous dans le Seigneur,<br />
en célébrant ce jour de fête en l'honneur de la Vierge Marie ;<br />
son Assomption cause la joie des anges,<br />
ensemble ils louent le Fils de Dieu.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 3355 -->Ps. Eructavit cor meum verbum bonum :<br />
dico ego opera mea regi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mon cœur a fait jaillir la bonne parole :<br />
je dédie mes œuvres au Roi.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 727 - keyText = 769 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Audi filia et vide<br />
et inclina aurem tuam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Écoutez, ma fille,<br />
et voyez, et prêtez l’oreille.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 7754 --> Quia concupivit rex speciem tuam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Car le roi s'est épris de votre beauté.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = V keyText = 8861 -->V./  Specie tua, et pulchritudine tua <br />
intende, prospere procede, et regna.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dans votre éclat et votre beauté,<br />
avancez, marchez au succès et régnez.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 690 - keyText = 726 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br /><span class="fc">Assumpta est</span> Maria in caelum,<br />
gaudet exercitus angelorum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Marie a été enlevée au ciel,<br />
l'armée des anges se réjouit.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 688 - keyText = 725 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br /><span class="fc">Assumpta est</span> Maria in caelum,<br />
gaudent angeli, laudantes (collaudantes) benedicunt Dominum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Marie a été enlevée au ciel,<br />
les anges se réjouissent, ils louent et glorifient le Seigneur.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 871 - keyText = 914 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Beatam me dicent omnes generationes :<br />
quia fecit mihi magna qui potens est.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Toutes les générations me diront bienheureuse,<br />
car il a fait pour moi de grandes choses, celui qui est puissant.</ion-text></ion-col></ion-row></ion-grid>

</template>
 <br /></template>
 <script lang="ts">
 export default {
 props: {
 annoABC: {
 type: String,
 }
 }
 }
 </script>