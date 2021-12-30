<!-- DEBUG-VIEW START 347 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Gaudete in Domino semper :<br />
iterum dico, gaudete :<br />
modestia vestra nota sit omnibus hominibus :<br />
Dominus prope est.<br />
Nihil solliciti sitis :<br />
sed in omni oratione <br />
petitiones vestrae innotescant apud Deum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Réjouissez-vous dans le Seigneur, toujours :<br />
 je le répète, soyez joyeux.<br />
Que votre modestie soit connue de tous les hommes.<br />
Le Seigneur est proche.<br />
Ne soyez inquiets de rien ;<br />
mais qu’en toute prière vos demandes<br />
se fassent connaître auprès de Dieu.</ion-text></ion-col> </ion-row></ion-grid> Benedixisti, Domine, terram tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous avez-béni, Seigneur, votre terre.</ion-text></ion-col> </ion-row></ion-grid> Avertisti captivitatem Iacob.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous avez révoqué la captivité de Jacob.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Qui sedes, Domine, super Cherubim,<br />
excita potentiam tuam, et veni.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, vous qui trônez au-dessus des Chérubins,<br />
éveillez votre puissance, et venez.</ion-text></ion-col> </ion-row></ion-grid>V./  Qui regis Israel, intende :<br />
qui deducis velut ovem Ioseph.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous qui gouvernez Israël, prêtez l’oreille :<br />
vous qui conduisez Joseph comme une brebis.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Fuit homo missus a Deo <br>cui nomen Ioannes erat.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Il y eut un homme envoyé de Dieu<br />
dont le nom était Jean.</ion-text></ion-col> </ion-row></ion-grid> Hic venit.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Il est venu.</ion-text></ion-col> </ion-row></ion-grid>V./  Ut testimonium perhiberet de lumine,<br />
et pararet Domino plebem perfectam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Pour rendre témoignage au sujet de la lumière<br />
et préparer au Seigneur un peuple parfait.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Excita, Domine, potentiam tuam,<br />
et veni, ut salvos facias nos.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Éveillez, Seigneur, votre puissance,<br />
et venez, pour nous sauver.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Benedixisti, Domine, terram tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous avez-béni, Seigneur, votre terre.</ion-text></ion-col> </ion-row></ion-grid> Avertisti captivitatem Iacob.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous avez révoqué la captivité de Jacob.</ion-text></ion-col> </ion-row></ion-grid> Remisisti iniquitatem plebis tuae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous avez remis l’iniquité de votre peuple.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Dicite : pusillanimes confortamini,<br />
et nolite timere :<br />
ecce Deus noster veniet,<br />
et salvabit nos.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dites : Esprits abattus, prenez courage<br />
et ne craignez pas ;<br />
voici que notre Dieu va venir,<br />
et il nous sauvera.</ion-text></ion-col> </ion-row></ion-grid>	
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

<!-- DEBUG-VIEW ENDED 347 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
