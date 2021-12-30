<!-- DEBUG-VIEW START 305 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Respice, Domine, in testamentum tuum,<br />
et animas pauperum tuorum ne derelinquas in finem :<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ayez égard à votre alliance, Seigneur,<br />
et les âmes de vos pauvres, ne les oubliez pas pour toujours.</ion-text></ion-col> </ion-row></ion-grid> Exsurge Domine, et iudica causam tuam:<br />
et ne obliviscaris voces quaerentium te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Levez-vous, Seigneur, et jugez votre cause :<br />
et n'oubliez pas les appels de ceux quit vous cherchent.</ion-text></ion-col> </ion-row></ion-grid>Ps. Ut quid Deus repulisti in finem :<br />
<span class="fc">iratus est</span> furor tuus super oves pascuae tuae?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Pourquoi, Dieu, nous avoir rejetés pour toujours :<br />
votre courroux s’est-il déchaîné sur les brebis de votre pâturage ?</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Graduale</rubrique><br /><br />
Ostende nobis, Domine, misericordiam tuam :<br />
et salutare tuum da nobis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Montrez-nous, Seigneur, votre miséricorde :<br />
et donnez-nous votre salut.</ion-text></ion-col> </ion-row></ion-grid> Benedixisti, Domine, terram tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous avez-béni, Seigneur, votre terre.</ion-text></ion-col> </ion-row></ion-grid> Avertisti captivitatem Iacob.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous avez révoqué la captivité de Jacob.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Respice, Domine, in testamentum tuum,<br />
et animas pauperum tuorum ne derelinquas in finem :<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ayez égard à votre alliance, Seigneur,<br />
et les âmes de vos pauvres, ne les oubliez pas pour toujours.</ion-text></ion-col> </ion-row></ion-grid>V./  Exsurge Domine,<br />
et iudica causam tuam:<br />
memor esto opprobrii servorum tuorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Levez-vous, Seigneur,<br />
et jugez votre cause :<br />
souvenez-vous de l'outrage fait à vos serviteurs.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Beata gens cuius est Dominus Deus eorum :<br />
populus quem elegit Dominus in hereditatem sibi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Heureuse la nation dont le Seigneur est le Dieu :<br />
le peuple que le Seigneur s’est choisi pour héritage.</ion-text></ion-col> </ion-row></ion-grid>V./  Verbo Domini caeli <span class="fc">firmati sunt</span><br />
et spiritu oris eius omnis virtus eorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">C’est par le verbe de Dieu que les cieux ont été affermis,<br />
et par le souffle de sa bouche, toute leur puissance.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Domine, refugium <span class="fc">factus es</span> nobis<br />
a generatione et progenie.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, vous vous êtes fait pour nous un refuge :<br />
de génération en génération.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
In te speravi, Domine:<br />
dixi: tu es Deus meus,<br />
in manibus tuis tempora mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">C’est en vous que j’ai mis mon espérance, Seigneur :<br />
j’ai dit : C’est vous qui êtes mon Dieu ;<br />
mes jours sont entre vos mains.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Panis,<br />
quem ego dedero,<br />
caro mea est pro saeculi vita.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le pain que, moi, je donnerai,<br />
c'est ma chair pour la vie du monde.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Beatus servus quem cum venerit Dominus<br />
invenerit vigilantem:<br />
amen dico vobis,<br />
super omnia bona sua constituet eum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Heureux le serviteur, que le maître, à son arrivée,<br />
trouvera vigilant :<br />
en vérité, je vous le dis, il l’établira sur tous ses biens.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 305 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
