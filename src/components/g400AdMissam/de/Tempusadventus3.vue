<!-- DEBUG-VIEW START 244 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Gaudete in Domino semper :<br />
iterum dico, gaudete :<br />
modestia vestra nota sit omnibus hominibus :<br />
Dominus prope est.<br />
Nihil solliciti sitis :<br />
sed in omni oratione <br />
petitiones vestrae innotescant apud Deum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Freut euch im Herrn allezeit,<br />
noch einmal sage ich euch: Freut euch!<br />
Eure Güte soll allen Menschen bekannt werden.<br />
Der Herr ist nahe.<br />
Um nichts sollt ihr in Sorge sein,<br />
sondern bei jedem Gebet<br />
sollen eure Bitten bekannt werden bei Gott.</ion-text></ion-col> </ion-row></ion-grid> Benedixisti, Domine, terram tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Einst hast du, Herr, dein Land begnadet.</ion-text></ion-col> </ion-row></ion-grid> Avertisti captivitatem Iacob.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und Jakobs Unglück gewendet.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Qui sedes, Domine, super Cherubim,<br />
excita potentiam tuam, et veni.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Du throhnst, Herr, über den Cherubim,<br />
wecke auf deine Macht und komm!</ion-text></ion-col> </ion-row></ion-grid>V./  Qui regis Israel, intende :<br />
qui deducis velut ovem Ioseph.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Du Israel weidest, höre,<br />
der Du Josef hütest wie ein Schaf.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Fuit homo missus a Deo <br>cui nomen Ioannes erat.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Es war ein Mensch, von Gott gesandt;<br />
sein Name war Johannes.</ion-text></ion-col> </ion-row></ion-grid> Hic venit.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Er kam [als Zeuge].</ion-text></ion-col> </ion-row></ion-grid>V./  Ut testimonium perhiberet de lumine,<br />
et pararet Domino plebem perfectam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Damit er Zeugnis ablege für das Licht<br />
und damit er dem Herrn ein vollkommenes Volk bereite.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Excita, Domine, potentiam tuam,<br />
et veni, ut salvos facias nos.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Erwecke, Herr, deine gewaltige Macht<br />
und komm, um uns heil zu machen!</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Benedixisti, Domine, terram tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Einst hast du, Herr, dein Land begnadet.</ion-text></ion-col> </ion-row></ion-grid> Avertisti captivitatem Iacob.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und Jakobs Unglück gewendet.</ion-text></ion-col> </ion-row></ion-grid> Remisisti iniquitatem plebis tuae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Du hast hast deinem Volk die Schuld vergeben.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Dicite : pusillanimes confortamini,<br />
et nolite timere :<br />
ecce Deus noster veniet,<br />
et salvabit nos.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Saget: Ihr Kleinmütigen, seid stark,<br />
und fürchtet euch nicht!<br />
Seht, unser Gott wird kommen,<br />
und er wird uns retten!</ion-text></ion-col> </ion-row></ion-grid>	
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

<!-- DEBUG-VIEW ENDED 244 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
