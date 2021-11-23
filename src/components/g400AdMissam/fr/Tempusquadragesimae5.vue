<!-- DEBUG-VIEW START 273 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Iudica me, Deus,<br />
et discerne causam meam de gente non sancta :<br />
ab homine iniquo et doloso eripe me :<br />
quia tu es Deus meus,<br />
et fortitudo mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Soyez mon juge, mon Dieu,<br />
et séparez ma cause d’un peuple sans sainteté ;<br />
de l’homme inique et trompeur, délivrez-moi.<br />
Car c’est vous qui êtes mon Dieu,<br />
et ma force.</ion-text></ion-col> </ion-row></ion-grid>Ps. Emitte lucem tuam, et veritatem tuam:<br />
ipsa me deduxerunt,<br />
et adduxerunt in montem sanctum tuum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Envoyez votre lumière et votre vérité :<br />
elles qui m’ont conduit,<br />
et amené sur votre montagne sainte.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Eripe me, Domine, de inimicis meis :<br />
doce me facere voluntatem tuam:<br />
quia Deus meus es tu.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Arrachez-moi à mes ennemis, Seigneur :<br />
apprenez-moi à faire votre volonté,<br />
car c’est vous qui êtes mon Dieu.</ion-text></ion-col> </ion-row></ion-grid>V./  Liberator meus, Domine, de gentibus iracundis:<br />
ab insurgentibus in me exaltabis me:<br />
a viro iniquo eripies me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, mon libérateur des nations en furie :<br />
vous m’élèverez au-dessus de ceux qui se dressent contre moi :<br />
vous m’arracherez à l’homme inique.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Tractus</rubrique><br /><br />
Saepe expugnaverunt me a iuventute mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Souvent ils m’ont attaqué, depuis ma jeunesse.</ion-text></ion-col> </ion-row></ion-grid>V./  Dicat nunc Israel:<br />
saepe expugnaverunt me a iuventute mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Qu’Israël le dise maintenant :<br />
Souvent ils m’ont attaqué, depuis ma jeunesse.</ion-text></ion-col> </ion-row></ion-grid>V./  Etenim non potuerunt mihi:<br />
supra dorsum meum fabricaverunt peccatores.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et de fait, ils n’ont rien pu contre moi:<br />
les pécheurs ont forgé sur mon dos.</ion-text></ion-col> </ion-row></ion-grid>V./  Prolongaverunt iniquitatem sibi:<br />
Dominus iustus concidet cervices peccatorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ils ont prolongé leur iniquité :<br />
 le Seigneur dans sa justice a abattu le cou des pécheurs.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Confitebor tibi, Domine, in toto corde meo :<br />
retribue servo tuo :<br />
vivam, et custodiam sermones tuos :<br />
vivifica me secundum verbum tuum, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je vous acclamerai, Seigneur, de tout mon cœur :<br />
dotez votre serviteur,<br />
je vivrai, et je garderai vos paroles :<br />
vivifiez-moi selon votre parole, Seigneur</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Videns Dominus flentes sorores Lazari<br />
ad monumentum,<br />
<span class="fc">lacrimatus est</span> coram Iudaeis<br />
et clamabat :<br />
Lazare, veni foras :<br />
et prodiit ligatis manibus et pedibus,<br />
qui fuerat quatriduanus mortuus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Voyant les sœurs de Lazare en larmes<br />
près du tombeau,<br />
le Seigneur pleura devant les juifs<br />
et il s'exclama :<br />
« Lazare, viens dehors. »<br />
Et il s'avança pieds et mains liés,<br />
lui qui était mort depuis quatre jours.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Qui mihi ministrat,<br />
me sequatur:<br />
et ubi ego sum,<br />
illic et minister meus erit.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Celui qui me sert,<br />
qu'il me suive :<br />
et là où moi je suis,<br />
là aussi sera mon serviteur.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Nemo te condemnavit, mulier?<br />
Nemo, Domine.<br />
Nec ego te condemnabo :<br />
iam amplius noli peccare.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Femme, personne ne t'a condamnée ?<br />
– Personne, Seigneur.<br />
– Moi non plus, je ne te condamnerai pas :<br />
désormais ne pèche plus.<br />
</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 273 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
