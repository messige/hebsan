<!-- DEBUG-VIEW START 151 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
Omnis terra adoret te, Deus,<br />
et psallat tibi;<br />
psalmum dicat nomini tuo, Altissime..<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que toute la terre vous adore, Dieu,<br />
et psalmodie pour vous :<br />
qu’elle dise un psaume à l’honneur de votre nom, Très-Haut.</ion-text></ion-col> </ion-row></ion-grid>Ps. Iubilate Deo omnis terra,<br />
psalmum dicite nomini eius :<br />
date gloriam laudi eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jubilez pour Dieu, toute de la terre,<br />
dites un psaume à l’honneur de son nom :<br />
rendez gloire à sa louange !</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Misit Dominus verbum suum, et sanavit eos :<br />
et eripuit eos de interitu eorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur a envoyé sa parole, et il les a guéris :<br />
et il les a arrachés à leur perdition.</ion-text></ion-col> </ion-row></ion-grid>V./  Confiteantur Domino misericordiae eius:<br />
et mirabilia eius filiis hominum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Qu’elles rendent témoignage au Seigneur, ses miséricordes :<br />
et ses merveilles en faveur des enfants des hommes.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Laudate Deum omnes angeli eius :<br />
laudate eum omnes virtutes eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Louez Dieu, tous ses Anges :<br />
louez-le, toutes ses puissances.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Iubilate Deo universa terra :<br />
psalmum dicite nomini eius :<br />
venite, et audite, et narrabo vobis,<br />
omnes qui timetis Deum<br />
quanta fecit Dominus animae meae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jubilez pour Dieu, toute de la terre,<br />
dites un psaume à l’honneur de son nom :<br />
venez, et écoutez, et je vous raconterai,<br />
vous tous qui craignez le Seigneur,<br />
quelles grandes chosesle Seigneur a faites pour mon âme.</ion-text></ion-col> </ion-row></ion-grid>V./  Reddam tibi vota mea<br />
quae destinxerunt labia mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je m’acquitterai envers vous des vœux<br />
que mes lèvres ont articulés.</ion-text></ion-col> </ion-row></ion-grid>V./  <span class="fc">Locutum est</span> os meum in tribulatione mea:<br />
holocausta medullata offeram tibi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ma bouche a parlé, dans ma détresse ;<br />
je vous offrirai de gras holocaustes.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Laetabimur in salutari tuo :<br />
et in nomine Domini Dei nostri magnificabimur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nous nous réjouirons en votre salut :<br />
et dans le nom du Seigneur notre Dieu, nous serons glorifiés.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Dicit Andreas Simoni fratri suo :<br />
invenimus Messiam,<br />
qui dicitur Christus :<br />
et adduxit eum ad Iesum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">André dit à son frère Simon:<br />
nous avons trouvé le Messie,<br />
celui qu'on appelle le Christ :<br />
et il l'amena à Jésus.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Dicit Dominus :<br />
implete hydrias aqua<br />
et ferte architriclino.<br />
Cum gustasset architriclinus<br />
aquam vinum factam,<br />
dicit sponso :<br />
servasti vinum bonum usque adhuc.<br />
Hoc signum fecit Iesus primum coram discipulis suis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur dit:<br />
remplissez d'eau les jarres<br />
et portez-en au traiteur.<br />
Quand le traiteur eut goûté<br />
l'eau changée en vin<br />
il dit à l'époux :<br />
tu as gardé le bon vin jusqu'à maintenant.<br />
Ce fut le premier miracle que Jésus fit devant ses disciples.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 151 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
