<!-- DEBUG-VIEW START 297 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<template v-if="annoABC == 'A' || annoABC == 'B'"><rubrique>Introitus</rubrique><br /><br />
Benedicta sit sancta Trinitas,<br />
atque indivisa Unitas,<br />
confitebimur ei,<br />
quia fecit nobiscum misericordiam suam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Bénie soit la sainte Trinité<br />
et son indivisible Unité,<br />
rendons-lui grâce<br />
car elle nous a montré sa miséricorde.</ion-text></ion-col> </ion-row></ion-grid>Ps. Domine Dominus noster,<br />
quam admirabile est nomen tuum in universa terra.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, notre Seigneur,<br />
qu’il est admirable votre nom, sur la terre entière !</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Introitus</rubrique><br /><br />
Caritas Dei <span class="fc">diffusa est</span> in cordibus nostris, alleluia :<br />
per inhabitantem Spiritum eius in nobis,<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">L'amour de Dieu a été répandu dans nos coeurs, alléluia :<br />
par son Esprit qui habite en nous.</ion-text></ion-col> </ion-row></ion-grid>Ps. Domine Deus salutis meae,<br />
in die clamavi et nocte coram te :<br />
intret oratio mea in conspectu tuo, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur Dieu de mon salut :<br />
le jour et la nuit j’ai crié devant vous :<br />
que mon oraison soit introduite en votre présence, Seigneur.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Graduale</rubrique><br /><br />
<span class="fc">Benedictus es</span>, Domine,<br />
qui intueris abyssos,<br />
et sedes super Cherubim.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Béni êtes-vous, Seigneur,<br />
vous qui scrutez les abîmes,<br />
et qui  siégez au-dessus des Chérubins.</ion-text></ion-col> </ion-row></ion-grid>V./  <span class="fc">Benedictus es</span> Domine,<br />
in firmamento caeli,<br />
et laudabilis in saecula.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Béni êtes-vous, Seigneur,<br />
dans le firmament du ciel :<br />
et digne de louange pour les siècles.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Hymnus</rubrique><br /><br />
<span class="fc">Benedictus es</span>, Domine,<br />
Deus Patrum nostrorum,<br />
et laudabilis et gloriosus in saecula.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Béni êtes-vous, Seigneur,<br />
Dieu de nos pères :<br />
et digne de louange, et glorieux pour les siècles.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
<span class="fc">Benedictus es</span>, Domine,<br />
Deus Patrum nostrorum,<br />
et laudabilis et gloriosus in saecula.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Béni êtes-vous, Seigneur,<br />
Dieu de nos pères :<br />
et digne de louange, et glorieux pour les siècles.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
<span class="fc">Benedictus sit</span> Deus Pater,<br />
unigenitusque Dei Filius,<br />
Sanctus quoque Spiritus:<br />
quia fecit nobiscum misericordiam suam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Béni soit Dieu le Père,<br />et le Fils unique de Dieu, ainsi que le Saint-Esprit :<br />car il a exercé envers nous sa miséricorde.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Benedicimus Deum caeli,<br />
et coram omnibus viventibus confitebimur ei :<br />
quia fecit nobiscum misericordiam suam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nous bénissons le Dieu du ciel,<br />
et devant tous les vivants nous l'acclamerons,<br />
car il a exercé envers nous sa miséricorde.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
<span class="fc">Data est</span> mihi omnis potestas in caelo et in terra, alleluia :<br />
euntes, docete omnes gentes,<br />
baptizantes eos in nomine Patris, et Filii, et Spiritus Sancti.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Tout pouvoir m'a été donné au ciel et sur la terre, alléluia.<br />
Allez, enseignez toutes les nations,<br />
les baptisant au nom du Père, et du Fils, et du Saint-Esprit.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Benedicimus Deum caeli,<br />
et coram omnibus viventibus confitebimur ei :<br />
quia fecit nobiscum misericordiam suam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nous bénissons le Dieu du ciel,<br />
et devant tous les vivants nous l'acclamerons,<br />
car il a exercé envers nous sa miséricorde.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<br />
</template>
<script>
  export default {
    props: {
      annoABC: {
        type: String,    
      }
    }
  }
</script>	

<!-- DEBUG-VIEW ENDED 297 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
