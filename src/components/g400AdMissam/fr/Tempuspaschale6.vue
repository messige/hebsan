<!-- DEBUG-VIEW START 289 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Vocem iucunditatis annuntiate,<br />
et audiatur, alleluia :<br />
nuntiate usque ad extremum terrae :<br />
liberavit Dominus populum suum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que votre voix annonce l’allégresse,<br />
et qu’on l’entende, alléluia !<br />
annoncez-la jusqu’à l’extrémité de la terre :<br />
le Seigneur a libéré son peuple.</ion-text></ion-col> </ion-row></ion-grid>Ps. Iubilate Deo omnis terra, alleluia :<br />
psalmum dicite nomini eius,<br />
date gloriam laudi eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jubilez pour Dieu, toute de la terre, alléluia :<br />
dites un psaume à l’honneur de son nom,<br />
rendez gloire à sa louange !</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Surrexit Christus<br />
et illuxit populo suo,<br />
quos redemit sanguine suo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Christ est ressuscité<br />
et il nous illuminés,<br />
nous qu'il a rachetés par son sang.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'A'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Non vos relinquam orphanos,<br />
vado et veniam (venio) ad vos,<br />
et gaudebit cor vestrum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je ne vous laisserai pas orphelins,<br />
je m'en vais, et je viendrai (viens) vers vous,<br />
et votre coeur sera dans la joie.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Exivi a Patre,<br />
et veni in mundum<br />
iterum relinquo mundum,<br />
et vado ad Patrem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je suis sorti du Père<br />
et je suis venu dans le monde : en retour, je quitte le monde<br />
et je vais au Père.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Ego vos elegi de mundo,<br />
ut eatis, et fructum afferatis :<br />
et fructus vester maneat.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Moi, je vous ai choisis du monde<br />
pour que vous alliez, et que vous portiez du fruit :<br />
et que votre fruit demeure.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Surrexit Christus<br />
et illuxit populo suo,<br />
quos redemit sanguine suo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Christ est ressuscité<br />
et il nous illuminés,<br />
nous qu'il a rachetés par son sang.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Spiritus Sanctus docebit vos, alleluia :<br />
quaecumque dixero vobis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">L'Esprit Saint vous enseignera, alléluia :<br />
tout ce que je vous aurai dit.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Offertorium</rubrique><br /><br />
Benedicite gentes Dominum Deum nostrum<br />
et obaudite vocem laudis eius :<br />
qui posuit animam meam ad vitam,<br />
et non dedit commoveri pedes meos :<br />
benedictus Dominus,<br />
qui non amovit deprecationem meam,<br />
et misericordiam suam a me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Bénissez, nations, le Seigneur notre Dieu ;<br />
et prêtez l'oreille à l’écho de sa louange ;<br />
il a réservé mon âme pour la vie :<br />
et n’a pas laissé chanceler mes pieds :<br />
béni soit le Seigneur<br />
qui n'a pas écarté ma supplication,<br />
ni de moi sa miséricorde.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Non vos relinquam orphanos,<br />
veniam ad vos iterum,<br />
et gaudebit cor vestrum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je ne vous laisserai pas orphelins,<br />
je viendrai à nouveau vers vous,<br />
et votre coeur sera dans la joie.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Ego vos elegi de mundo,<br />
ut eatis, et fructum afferatis :<br />
et fructus vester maneat.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Moi, je vous ai choisis du monde<br />
pour que vous alliez, et que vous portiez du fruit :<br />
et que votre fruit demeure.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Spiritus Sanctus docebit vos, alleluia :<br />
quaecumque dixero vobis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">L'Esprit Saint vous enseignera, alléluia :<br />
tout ce que je vous aurai dit.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 289 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
