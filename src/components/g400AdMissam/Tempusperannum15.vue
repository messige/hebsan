<!-- DEBUG-VIEW START 120 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
Dum clamarem ad Dominum,<br />
exaudivit vocem meam ab his<br />
qui appropinquant mihi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Tandis que je lançais mon cri vers le Seigneur,<br />
 il a exaucé ma voix pour me délivrer<br />
de ceux qui me traquent.</ion-text></ion-col> </ion-row></ion-grid> Et humiliavit eos,<br />
qui est ante saecula,<br />
et manet in aeternum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et il les a terrassés,<br />
lui qui est avant les siècles,<br />
et qui demeure pour l'éternité.</ion-text></ion-col> </ion-row></ion-grid> Iacta cogitatum tuum in Domino,<br />
et ipse te enutriet.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jette ta préoccupation sur le Seigneur,<br />
et c’est lui qui te nourrira.</ion-text></ion-col> </ion-row></ion-grid>Ps. Exaudi, Deus, orationem meam,<br />
et ne despexeris deprecationem meam:<br />
intende in me et exaudi me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Exaucez, mon Dieu, ma prière ;<br />
et ne dédaignez pas ma supplication :<br />
entendez-moi, et exaucez-moi !</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Introitus</rubrique><br /><br />
Ego autem cum iustitia apparebo in conspectu tuo :<br />
satiabor, dum manifestabitur gloria tua.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Pour moi, c’est dans la justice que je paraîtrai en votre présence :<br />
je serai comblé quand sera manifestée votre gloire.</ion-text></ion-col> </ion-row></ion-grid>Ps. Exaudi Domine iustitiam meam:<br />
intende deprecationem meam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Écoutez, Seigneur, ma juste cause :<br />
soyez attentif à ma supplication.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Graduale</rubrique><br /><br />
Custodi me, Domine,<br />
ut pupillam oculi :<br />
sub umbra alarum tuarum protege me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gardez-moi, Seigneur,<br />
comme la prunelle de l’œil :<br />
à l’ombre de vos ailes protégez-moi.</ion-text></ion-col> </ion-row></ion-grid>V./  De vultu tuo iudicium meum prodeat:<br />
oculi tui videant aequitatem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que mon jugement émane de votre visage :<br />
que vos yeux voient un comportement équitable.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Custodi me, Domine,<br />
ut pupillam oculi :<br />
sub umbra alarum tuarum protege me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gardez-moi, Seigneur,<br />
comme la prunelle de l’œil :<br />
à l’ombre de vos ailes protégez-moi.</ion-text></ion-col> </ion-row></ion-grid>V./  De vultu tuo iudicium meum prodeat:<br />
oculi tui videant aequitatem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que mon jugement émane de votre visage :<br />
que vos yeux voient un comportement équitable.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Ostende nobis, Domine, misericordiam tuam :<br />
et salutare tuum da nobis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Montrez-nous, Seigneur, votre miséricorde :<br />
et donnez-nous votre salut.</ion-text></ion-col> </ion-row></ion-grid>V./  Avertisti captivitatem Iacob.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous avez révoqué la captivité de Jacob.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Te decet hymnus, Deus, in Sion :<br />
et tibi reddetur votum in Ierusalem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">A vous revient l’hymne de louange, Dieu, en Sion :<br />
et à vous il sera rendu hommage en Jérusalem.</ion-text></ion-col> </ion-row></ion-grid> Replebitur in bonis domus tuae; <br />
sanctum est templum tuum, <br />
mirabile in aequitate.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary"></ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Ad te, Domine, levavi animam meam :<br />
Deus meus, in te confido,<br />
non erubescam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vers vous, Seigneur, j’ai élevé mon âme :<br />
Mon Dieu, en vous je me confie ;<br />
que je n’aie pas à rougir !</ion-text></ion-col> </ion-row></ion-grid> Neque irrideant me inimici mei:<br />
etenim universi qui te exspectant,<br />
non confundentur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et que mes ennemis ne se moquent pas de moi :<br />
en effet, de tous ceux qui ont en vous leur attente,<br />
aucun ne sera confondu.</ion-text></ion-col> </ion-row></ion-grid>V./  Dirige me in veritate tua et doce me,<br />
quia tu es Deus salutaris meus:<br />
et te sustinui tota die.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Conduisez-moi dans votre vérité, et instruisez-moi,<br />
car c’est vous, Dieu, mon sauveur :<br />
et je m’en suis tenu à vous tout au long du jour.</ion-text></ion-col> </ion-row></ion-grid>V./  Respice in me et miserere mei, Domine,<br />
custodi animam meam<br />
et eripe me non confundar,<br />
quoniam invocavi te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Posez sur moi le regard, et ayez pitié de moi, Seigneur,<br />
gardez mon âme et délivrez-moi :<br />
que je n’aie pas à rougir,<br />
car je vous ai invoqué.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Passer invenit sibi domum, et turtur nidum,<br />
ubi reponat pullos suos :<br />
altaria tua Domine virtutum,<br />
rex meus, et Deus meus :<br />
beati qui habitant in domo tua,<br />
in saeculum saeculi laudabunt te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le passereau se trouve une maison :<br />
et la tourterelle un nid où déposer ses petits :<br />
ah vos autels ! Seigneur des puissances :<br />
mon Roi et mon Dieu :<br />
heureux ceux qui habitent en votre maison,<br />
dans les siècles des siècles ils vous loueront.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Qui manducat carnem meam,<br />
et bibit sanguinem meum,<br />
in me manet, et ego in eo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Celui qui mange ma chair<br />
et boit mon sang<br />
demeure en moi, et moi en lui.</ion-text></ion-col> </ion-row></ion-grid> Dicit Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dit le Seigneur.</ion-text></ion-col> </ion-row></ion-grid>	
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

<!-- DEBUG-VIEW ENDED 120 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
