<template>
<!-- - keyCalendar = 201 - keyPiece = 5302 - keyText = 5438 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Iustus ut palma florebit,<br />
sicut cedrus Libani multiplicabitur.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Le juste fleurira comme le palmier :<br />
comme le cèdre du Liban, il se propagera.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 7138 --> plantatus in domo Domini,<br />
in atriis domus Dei nostri.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Planté dans la maison du Seigneur,<br />
dans les parvis de la maison de notre Dieu.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 3509 -->Ps. Et psallere nomini tuo, altissime.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et de psalmodier pour votre nom, Très-Haut.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 2611 - keyText = 2669 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Domine, praevenisti eum <br />
in benedictionibus dulcedinis :<br />
posuisti in capite eius <br />
coronam de lapide pretioso.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Seigneur, vous l’avez prévenu en bénédictions de douceur :<br />
vous avez posé sur sa tête une couronne de pierres précieuses.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 10030 -->V./  Vitam petiit,<br />
et tribuisti ei longitudinem dierum <br>in saeculum saeculi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Il a demandé la vie :<br />
et vous lui avez accordé une longue suite de jours pour les siècles des siècles.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1065 - keyText = 1095 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Tractus - canticus</rubrique><br /><br />Beatus vir qui timet Dominum,<br />
in mandatis eius volet nimis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Heureux l’homme qui craint le Seigneur :<br />
en ses commandements il met tout son désir.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 4090 -->V./  Gloria et divitiae in domo eius:<br />
et iustitia eius manet in saeculum saeculi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">La gloire et les richesses sont dans sa maison :<br />
et sa justice demeure pour les siècles des siècles.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9549 - keyText = 9768 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Veritas mea et misericordia mea cum ipso :<br />
et in nomine meo exaltabitur cornu eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ma vérité et ma miséricorde seront avec lui :<br />
et en mon nom s’élèvera son front.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 5047 - keyText = 5193 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Ioseph fili David noli timere<br />
accipere Mariam coniugem tuam :<br />
quod enim in ea <span class="fc">natum est</span> de Spiritu Sancto est.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Joseph, fils de David, ne crains pas<br />
de prendre chez toi Marie pour épouse :<br />
en effet ce qui est né en elle vient de l’Esprit-Saint.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 3727 - keyText = 3889 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Fili, quid fecisti nobis sic?<br />
Ego et pater tuus dolentes quaerebamus te.<br />
Quid est quod me quaerebatis?<br />
Nesciebatis quia in his quae Patris mei sunt oportet me esse?
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Mon enfant, pourquoi as-tu agi ainsi envers nous ?<br />
Moi et ton père, tout affligés, nous te cherchions.<br />
Pourquoi me cherchiez-vous ?<br />
Ne saviez-vous pas qu’il me faut être aux affaires de mon Père ?</ion-text></ion-col></ion-row></ion-grid>

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