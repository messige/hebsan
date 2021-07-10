<!-- DEBUG-VIEW START 326 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
Iubilate Deo omnis terra, alleluia :<br />
psalmum dicite nomini eius,<br />
date gloriam laudi eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jauchzet Gott zu, alle Lande, Halleluja,<br />
spielt zum Ruhm seines Namens,<br />
verherrlicht ihn mit Lobpreis.</ion-text></ion-col> </ion-row></ion-grid>Ps. Dicite Deo,<br />
quam terribilia sunt opera tua, Domine,<br />
in multitudine virtutis tuae (mentientur tibi inimici tui)<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Sagt zu Gott:<br />
Wie furchtbar sind deine Werke, Herr.<br />
Ob der Fülle deiner Macht (müssen deine Feinde dir heucheln).</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Cognoverunt discipuli Dominum Iesum in fractione panis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Die Jünger erkannten Jesus, den Herrn, am Brotbrechen.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Oportebat pati Christum<br />
et resurgere a mortuis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Christus musste leiden<br />
und von den Toten auferstehen.</ion-text></ion-col> </ion-row></ion-grid> Et ita intrare in gloriam suam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und so in seine Herrlichkeit eintreten.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Lauda anima mea Dominum:<br />
laudabo Dominum in vita mea :<br />
psallam Deo meo, quamdiu ero.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lobe den Herrn, meine Seele!<br />
Ich will den Herrn loben, solange ich lebe,<br />
und meinem Gott lobsingen, solange ich bin.</ion-text></ion-col> </ion-row></ion-grid>V./  Qui custodit veritatem in saeculum:<br />
faciens iudicium iniuriam patientibus:<br />
dat escam esurientibus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der die Wahrheit bewahrt in Ewigkeit,<br />
der Recht schafft denen Unrechtgeschieht,<br />
der Speise den Hungernden gibt.</ion-text></ion-col> </ion-row></ion-grid>V./  Dominus erigit elisos,<br />
Dominus solvit compeditos:<br />
custodit Dominus pupillum et advenam et viduam suscipiet<br />
et viam peccatorum exterminabit:<br />
regnabit Dominus in aeternum,<br />
Deus tuus, Sion, in saeculum saeculi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr richtet die Gestürzten auf,<br />
der Herr macht die Gefesselten los,<br />
der Herr behütet die Fremden, Waise und Witwe nimmt er auf,<br />
doch den Weg der Sünder macht er zunichte.<br />
König ist der Herr in Ewigkeit,<br />
dein Gott, Zion, von Geschlecht zu Geschlecht.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Surrexit Dominus,<br />
et apparuit Petro.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr ist auferstanden<br />
und er ist dem Petrus erschienen.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Cantate Domino, (et) benedicite nomen eius :<br />
bene nuntiate de die in diem salutare eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Singt dem Herrn (und) preist seinen Namen!<br />
Verkündet sein Heil von Tag zu Tag.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Simon Ioannis, diligis me plus his?<br />
Domine, tu omnia nosti :<br />
tu scis, Domine, quia amo te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Simon, Sohn des Johannes, liebst du mich mehr als die [mich lieben]?<br />
Herr, du weißt alles;<br />
du weißt [auch], Herr, dass ich dich liebe!</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 326 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
