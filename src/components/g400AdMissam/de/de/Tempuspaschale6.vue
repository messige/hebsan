<!-- DEBUG-VIEW START 276 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Vocem iucunditatis annuntiate,<br />
et audiatur, alleluia :<br />
nuntiate usque ad extremum terrae :<br />
liberavit Dominus populum suum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Verkündet die Stimme des Jauchzens,<br />
damit man es hört, Halleluja.<br />
Ruft es hinaus bis ans Ende der Erde:<br />
Der Herr hat sein Volk erlöst.</ion-text></ion-col> </ion-row></ion-grid>Ps. Iubilate Deo omnis terra, alleluia :<br />
psalmum dicite nomini eius,<br />
date gloriam laudi eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jauchzet Gott zu, alle Lande, Halleluja,<br />
spielt zum Ruhm seines Namens,<br />
verherrlicht ihn mit Lobpreis.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Surrexit Christus<br />
et illuxit populo suo,<br />
quos redemit sanguine suo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Christus ist auferstanden<br />
und erleuchtet uns,<br />
die er durch sein Blut erlöst hat.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'A'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Non vos relinquam orphanos,<br />
vado et veniam (venio) ad vos,<br />
et gaudebit cor vestrum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich lasse euch nicht als Waisen zurück,<br />
ich gehe und (werde wieder zu euch) komme(n),<br />
und euer Herz wird sich freuen.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Exivi a Patre,<br />
et veni in mundum<br />
iterum relinquo mundum,<br />
et vado ad Patrem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vom Vater bin ich ausgegangen<br />
und in die Welt gekommen;<br />
ich verlasse die Welt wieder<br />
und gehe zum Vater.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Ego vos elegi de mundo,<br />
ut eatis, et fructum afferatis :<br />
et fructus vester maneat.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich habe euch aus der Welt erwählt,<br />
damit ihr geht, und Frucht bringt,<br />
und damit eure Frucht bleibt.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Surrexit Christus<br />
et illuxit populo suo,<br />
quos redemit sanguine suo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Christus ist auferstanden<br />
und erleuchtet uns,<br />
die er durch sein Blut erlöst hat.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Spiritus Sanctus docebit vos, alleluia :<br />
quaecumque dixero vobis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Heilige Geist wird euch lehren, Halleluja,<br />
was immer ich euch gesagt habe.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Offertorium</rubrique><br /><br />
Benedicite gentes Dominum Deum nostrum<br />
et obaudite vocem laudis eius :<br />
qui posuit animam meam ad vitam,<br />
et non dedit commoveri pedes meos :<br />
benedictus Dominus,<br />
qui non amovit deprecationem meam,<br />
et misericordiam suam a me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Preist unseren Herrn und Gott, ihr Völker,<br />
hört auf die Stimme seines Lobes;<br />
der unsere Seele am Leben erhielt<br />
und unsere Füße nicht wanken ließ!<br />
Gelobt sei Gott,<br />
der mein Gebet nicht abgewiesen<br />
und seine Barmherzigkeit nicht von mir gewendet hat!</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Non vos relinquam orphanos,<br />
veniam ad vos iterum,<br />
et gaudebit cor vestrum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich lasse euch nicht als Waisen zurück,<br />
ich werde wieder zu euch kommen,<br />
und euer Herz wird sich freuen.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Ego vos elegi de mundo,<br />
ut eatis, et fructum afferatis :<br />
et fructus vester maneat.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich habe euch aus der Welt erwählt,<br />
damit ihr geht, und Frucht bringt,<br />
und damit eure Frucht bleibt.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Spiritus Sanctus docebit vos, alleluia :<br />
quaecumque dixero vobis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Heilige Geist wird euch lehren, Halleluja,<br />
was immer ich euch gesagt habe.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 276 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
