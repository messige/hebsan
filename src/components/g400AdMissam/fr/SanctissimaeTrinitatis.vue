<template>
<!-- - keyCalendar = 172 - keyPiece = 1144 - keyText = 1168 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B'">
<rubrique>Introitus</rubrique><br /><br />Benedicta sit sancta Trinitas,<br />
atque indivisa Unitas,<br />
confitebimur ei,<br />
quia fecit nobiscum misericordiam suam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Bénie soit la sainte Trinité<br />
et son indivisible Unité,<br />
rendons-lui grâce<br />
car elle nous a montré sa miséricorde.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 2608 -->Ps. Domine Dominus noster,<br />
quam admirabile est nomen tuum in universa terra.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, notre Seigneur,<br />
qu’il est admirable votre nom, sur la terre entière !</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1310 - keyText = 1331 -->
 <template v-if=" annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Caritas Dei <span class="fc">diffusa est</span> in cordibus nostris, alleluia :<br />
per inhabitantem Spiritum eius in nobis,
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">L'amour de Dieu a été répandu dans nos coeurs, alléluia :<br />
par son Esprit qui habite en nous.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 1106 -->Ps. Benedic anima mea Domino :<br />
et omnia quae intra me sunt, nomini santo eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Bénis le Seigneur, ô mon âme,<br /> 
et que tout ce qui est au-dedans 
de moi bénisse son saint nom.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1176 - keyText = 1204 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br /><span class="fc">Benedictus es</span>, Domine,<br />
qui intueris abyssos,<br />
et sedes super Cherubim.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Béni êtes-vous, Seigneur,<br />
vous qui scrutez les abîmes,<br />
et qui  siégez au-dessus des Chérubins.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 1203 -->V./  <span class="fc">Benedictus es</span> Domine,<br />
in firmamento caeli,<br />
et laudabilis in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Béni êtes-vous, Seigneur,<br />
dans le firmament du ciel :<br />
et digne de louange pour les siècles.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1181 - keyText = 1199 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique><i>Pro GR. cantari potest hymnus sequens :</i><br />
Hymnus</rubrique><br /><br /><span class="fc">Benedictus es</span>, Domine,<br />
Deus Patrum nostrorum,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Béni êtes-vous, Seigneur,<br />
Dieu de nos pères :<br />
et digne de louange, et glorieux pour les siècles.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 10856 --> Et benedictum nomen gloriae tuae, quod est sanctum,<br />
et laudabile et gloriosum in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et le nom de votre gloire, qui est saint, est béni.<br />Et digne de louange et de gloire dans les siècles.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10858 --> <span class="fc">Benedictus es</span> in templo sancto gloriae tuae,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous êtes béni dans le temple saint de votre gloire<br />et digne de louange et de gloire pour les siècles.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10857 --> <span class="fc">Benedictus es</span> super thronum sanctum regni tui,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous êtes béni sur le trône saint de votre royaume<br />et digne de louange et de gloire pour les siècles.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10859 --> <span class="fc">Benedictus es</span>  super sceptrum divinitatis tuae,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous êtes béni sur le sceptre de votre divinité<br />et digne de louange et de gloire pour les siècles.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10860 --> <span class="fc">Benedictus es</span>, qui sedes super Cherubim, intuens abyssos,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous êtes béni, vous qui, étant assis sur les Chérubins, voyez le fond des abîmes,<br />et digne de louange et de gloire pour les siècles.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10861 --> <span class="fc">Benedictus es</span>, qui ambulas super pennas ventorum<br />et super undas maris,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous êtes béni, vous qui marchez sur les ailes des vents,<br />et sur les flots de la mer,<br />et digne de louange et de gloire pour les siècles.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10862 --> Benedicant te omnes Angeli et Sancti tui.<br />Et laudent te et glorificent in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que tous les Anges et les Saints vous bénissent.<br />Qu’ils vous louent et vous glorifient dans les siècles.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10863 --> Benedicant te caeli, terra, mare, et omnia quae in eis sunt.<br />Et laudent te et gloríficent in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que les cieux, la terre et la mer, et tout ce qu’ils renferment, vous bénissent.<br /> Qu’ils vous louent et vous glorifient dans les siècles.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10864 --> Gloria Patri, et Filio, et Spiritui Sancto,<br />
et laudabili et glorioso in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gloire au Père, et au Fils, et au Saint-Esprit.<br />Et à celui qui est digne de louange et de gloire dans les siècles.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10865 --> Sicut erat in princípio, et nunc, et semper <br />et in saecula sæculorum. Amen.<br />
Et laudabili et glorioso in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Comme il était au commencement, et maintenant et toujours,<br />et dans les siècles des siècles. Amen.<br />Et à celui qui est digne de louange et de gloire dans les siècles.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 1199 --> <span class="fc">Benedictus es</span>, Domine,<br />
Deus Patrum nostrorum,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Béni êtes-vous, Seigneur,<br />
Dieu de nos pères :<br />
et digne de louange, et glorieux pour les siècles.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1180 - keyText = 1199 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br /><span class="fc">Benedictus es</span>, Domine,<br />
Deus Patrum nostrorum,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Béni êtes-vous, Seigneur,<br />
Dieu de nos pères :<br />
et digne de louange, et glorieux pour les siècles.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1194 - keyText = 1213 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br /><span class="fc">Benedictus sit</span> Deus Pater,<br />
unigenitusque Dei Filius,<br />
Sanctus quoque Spiritus:<br />
quia fecit nobiscum misericordiam suam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Béni soit Dieu le Père,<br />et le Fils unique de Dieu, ainsi que le Saint-Esprit :<br />car il a exercé envers nous sa miséricorde.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1113 - keyText = 1138 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Communio</rubrique><br /><br />Benedicimus Deum caeli,<br />
et coram omnibus viventibus confitebimur ei :<br />
quia fecit nobiscum misericordiam suam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Nous bénissons le Dieu du ciel,<br />
et devant tous les vivants nous l'acclamerons,<br />
car il a exercé envers nous sa miséricorde.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 2028 - keyText = 2062 -->
 <template v-if=" annoABC == 'B'">
<rubrique>Communio</rubrique><br /><br /><span class="fc">Data est</span> mihi omnis potestas in caelo et in terra, alleluia :<br />
euntes, docete omnes gentes,<br />
baptizantes eos in nomine Patris, et Filii, et Spiritus Sancti.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Tout pouvoir m'a été donné au ciel et sur la terre, alléluia.<br />
Allez, enseignez toutes les nations,<br />
les baptisant au nom du Père, et du Fils, et du Saint-Esprit.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1113 - keyText = 1138 -->
 <template v-if=" annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Benedicimus Deum caeli,<br />
et coram omnibus viventibus confitebimur ei :<br />
quia fecit nobiscum misericordiam suam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Nous bénissons le Dieu du ciel,<br />
et devant tous les vivants nous l'acclamerons,<br />
car il a exercé envers nous sa miséricorde.</ion-text></ion-col></ion-row></ion-grid>

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