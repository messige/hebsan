<!-- DEBUG-VIEW START 256 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Omnis terra adoret te, Deus,<br />
et psallat tibi;<br />
psalmum dicat nomini tuo, Altissime..<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Die ganze Erde bete dich an, Gott,<br />
und spiele dir;<br />
einen Psalm singe sie deinem Namen, Höchster.</ion-text></ion-col> </ion-row></ion-grid>Ps. Iubilate Deo omnis terra,<br />
psalmum dicite nomini eius :<br />
date gloriam laudi eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jauchzet Gott, alle Welt!<br />
Lobsinget seinem Namen,<br />
gebt seinem Lob die Ehre!</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Misit Dominus verbum suum, et sanavit eos :<br />
et eripuit eos de interitu eorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr sandte sein Wort und heilte sie;<br />
und er befreite sie vom Verderben.</ion-text></ion-col> </ion-row></ion-grid>V./  Confiteantur Domino misericordiae eius:<br />
et mirabilia eius filiis hominum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Preisen sollen sie den Herrn für sein Erbarmen,<br />
und seine Wunder preisen vor den Menschenkindern.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Laudate Deum omnes angeli eius :<br />
laudate eum omnes virtutes eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lobt Gott, all seine Engel,<br />
lobt ihn, all seine Scharen (Kräfte).</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Iubilate Deo universa terra :<br />
psalmum dicite nomini eius :<br />
venite, et audite, et narrabo vobis,<br />
omnes qui timetis Deum<br />
quanta fecit Dominus animae meae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jauchzet Gott, alle Welt! Jauchzet Gott, alle Welt!<br />
Lobsinget zum Ruhm seines Namens.<br />
Kommt, und hört und ich will euch erzählen<br />
- allen, die ihr den Herrn fürchtet -<br />
wie viel der Herr meinem Leben Gutes getan hat!</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Laetabimur in salutari tuo :<br />
et in nomine Domini Dei nostri magnificabimur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wir wollen jubeln in deinem Heil,<br />
und im Namen des Herrn, unsres Gottes, wollen wir uns rühmen.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Dicit Andreas Simoni fratri suo :<br />
invenimus Messiam,<br />
qui dicitur Christus :<br />
et adduxit eum ad Iesum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Es sagte Andreas zu Simon seinem Bruder:<br />
„Wir haben den Messias gefunden,<br />
der Christus genannt wird.„<br />
Und er führte ihn zu Jesus.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Dicit Dominus :<br />
implete hydrias aqua<br />
et ferte architriclino.<br />
Cum gustasset architriclinus<br />
aquam vinum factam,<br />
dicit sponso :<br />
servasti vinum bonum usque adhuc.<br />
Hoc signum fecit Iesus primum coram discipulis suis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">So sprach der Herrn:<br />
„Füllt die Krüge mit Wasser<br />
und bringt sie dem Speisemeister!&quot;<br />
Als der Speisemeister gekostet hatte -<br />
Wasser war Wein geworden!<br />
- da sagte er zum Bräutigam:<br />
„Du hast den guten Wein bis jetzt zurückgehalten!&quot;<br />
Dieses Zeichen wirkte Jesus als erstes vor seinen Jüngern.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 256 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
