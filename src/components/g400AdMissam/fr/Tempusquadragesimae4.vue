<!-- DEBUG-VIEW START 271 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Laetare Ierusalem :<br />
et conventum facite omnes qui diligitis eam :<br />
gaudete cum laetitia,<br />
qui in tristitia fuistis :<br />
ut exsultetis,<br />
et satiemini ab uberibus consolationis vestrae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Réjouis-toi, Jérusalem !<br />
et faites assemblée, vous tous qui l’aimez :<br />
réjouissez-vous avec allégresse,<br />
vous qui avez été dans la tristesse :<br />
vous pouvez bondir de joie<br />
et vous rassasier du lait de consolation qui est pour vous.</ion-text></ion-col> </ion-row></ion-grid>Ps. <span class="fc">Laetatus sum</span> in his quae dicta sunt mihi :<br />
in domum Domini ibimus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je me suis réjoui de ces paroles qui m’ont été dites :<br />
Nous irons dans la maison du Seigneur.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
<span class="fc">Laetatus sum</span> in his quae dicta sunt mihi :<br />
in domum Domini ibimus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je me suis réjoui de ces paroles qui m’ont été dites :<br />
Nous irons dans la maison du Seigneur.</ion-text></ion-col> </ion-row></ion-grid>V./  Fiat pax in virtute tua :<br />
et abundantia in turribus tuis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que la paix règne sur tes remparts:<br />
et l’abondance en tes tours.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Tractus</rubrique><br /><br />
Qui confidunt in Domino<br />
sicut mons Sion<br />
non commovebitur in aeternum<br />
qui habitat in Ierusalem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ceux qui se confient au Seigneur<br />
sont comme le mont Sion :<br />
il ne sera jamais ébranlé,<br />
celui qui habite dans Jérusalem.</ion-text></ion-col> </ion-row></ion-grid>V./  Montes in circuitu eius :<br />
et Dominus in circuitu populi sui,<br />
ex hoc nunc et usque in saeculum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Des montagnes sont tout autour de lui :<br />
et le Seigneur est tout autour de son peuple,<br />
dès ce maintenant, et jusque dans l’éternité.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Laudate Dominum quia benignus est :<br />
psallite nomini eius, quoniam suavis est :<br />
omnia quaecumque voluit, fecit in caelo et in terra.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Louez le Seigneur, car il est bienveillant :<br />
psalmodiez pour son nom, car il est doux :<br />
tout ce qu’il a voulu, il l’a fait, au ciel et sur la terre.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Illumina oculos meos, nequando obdormiam in morte:<br />
nequando dicat inimicus meus :<br />
praevalui adversus eum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Illuminez mes yeux,<br />
que jamais je ne m’endorme dans la mort :<br />
que mon ennemi ne vienne un jour à dire :<br />
J’ai prévalu sur lui.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Lutum fecit ex sputo Dominus<br />
et linivit oculos meos;<br />
et abii, et lavi, et vidi,<br />
et credidi Deo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur a fait de la boue avec sa salive,<br />
et il a enduit mes yeux :<br />
et je suis parti, et je me suis lavé, et j'ai vu<br />
et j'ai cru en Dieu.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Ierusalem quae aedificatur ut civitas,<br />
cuius participatio eius <span class="fc">in idipsum</span> :<br />
illuc enim ascenderunt tribus, tribus Domini,<br />
ad confitendum nomini tuo, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jérusalem, qui s’édifie comme une cité :<br />
dont les parties forment un tout unique :<br />
en effet, c’est là que sont montées les tribus, les tribus du Seigneur,<br />
pour acclamer le nom du Seigneur.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Oportet te fili gaudere,<br />
quia frater tuus mortuus fuerat,<br />
et revixit :<br />
perierat, et <span class="fc">inventus est</span>.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mon fils, il faut te réjouir<br />
car ton frère était mort<br />
et il est revenu à la vie :<br />
il était perdu, et il est retrouvé.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 271 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
