<!-- DEBUG-VIEW START 169 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
Viri Galilaei,<br />
quid admiramini aspicientes in caelum?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Hommes de Galilée,<br />
pourquoi regardez-vous avec étonnement vers le ciel ?</ion-text></ion-col> </ion-row></ion-grid> Quemadmodum vidistis eum ascendentem in caelum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Comme vous avez vu Jésus monter au ciel.</ion-text></ion-col> </ion-row></ion-grid> Ita veniet.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">c'est ainsi qu'il reviendra.</ion-text></ion-col> </ion-row></ion-grid>Ps. Omnes gentes plaudite manibus :<br />
iubilate Deo in voce exsultationis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Toutes nations, battez des mains :<br />
jubilez pour Dieu en un chant d’allégresse !</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Ascendit Deus in iubilatione,<br />
(et) Dominus in voce tubae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Il s'est élevé, Dieu, dans l’allégresse :<br />
(et) le Seigneur, au son de la trompette.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Dominus in Sina in sancto,<br />
ascendens in altum,<br />
captivam duxit captivitatem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur est venu au Sinaï, au lieu saint,<br />
montant sur les hauteurs,<br />
il a rendu captive la captivité.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Viri Galilaei,<br />
quid admiramini aspicientes in caelum?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Hommes de Galilée,<br />
pourquoi regardez-vous avec étonnement vers le ciel ?</ion-text></ion-col> </ion-row></ion-grid> Hic Iesus qui assumptus est a vobis in caelum,<br />
sic veniet.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ce Jésus qui vous a été enlevé,<br />
viendra comme cela</ion-text></ion-col> </ion-row></ion-grid> Quemadmodum vidistis eum ascendentem in caelum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Comme vous avez vu Jésus monter au ciel.</ion-text></ion-col> </ion-row></ion-grid>V./  Cumque intuerentur in caelum euntem illum:<br />
ecce duo viri adstiterunt iuxta illos in vestibus albis,<br />
qui et dixerunt.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et comme ils le regardaient qui s'en allait dans le ciel,<br />
voici que deux hommes se tinrent à côté d'eux en vêtements blancs,<br />
et ils dirent</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Ascendit Deus in iubilatione,<br />
(et) Dominus in voce tubae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Il s'est élevé, Dieu, dans l’allégresse :<br />
(et) le Seigneur, au son de la trompette.</ion-text></ion-col> </ion-row></ion-grid>V./  Omnes gentes plaudite manibus :<br />
iubilate Deo in voce exsultationis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Toutes nations, battez des mains :<br />
jubilez pour Dieu en un chant d’allégresse !</ion-text></ion-col> </ion-row></ion-grid>V./  Quoniam Dominus excelsus (summus) terribilis :<br />
rex magnus super omnem terram.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Car le Seigneur est très haut, redoutable :<br />
grand Roi sur toute la terre.</ion-text></ion-col> </ion-row></ion-grid>V./  Subiecit populos nobis:<br />
et gentes sub pedibus nostris.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">II nous a assujetti les peuples :<br />
et il a mis les nations sous nos pieds.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
<span class="fc">Data est</span> mihi omnis potestas in caelo et in terra, alleluia :<br />
euntes, docete omnes gentes,<br />
baptizantes eos in nomine Patris, et Filii, et Spiritus Sancti.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Tout pouvoir m'a été donné au ciel et sur la terre, alléluia.<br />
Allez, enseignez toutes les nations,<br />
les baptisant au nom du Père, et du Fils, et du Saint-Esprit.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Signa eos qui in me credunt,<br />
haec sequentur:<br />
daemonia eicient:<br />
super aegros manus imponent,<br />
et bene habebunt.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Voici les miracles qui accompagneront<br />
ceux qui croient en moi :<br />
ils chasseront les démons :<br />
ils imposeront les mains sur les malades,<br />
et ils iront bien.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Psallite Domino,<br />
qui ascendit super caelos caelorum ad Orientem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Psalmodiez pour le Seigneur,<br />
qui est monté au-dessus des cieux des cieux, à l’Orient !</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 169 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
