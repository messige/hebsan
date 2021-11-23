<!-- DEBUG-VIEW START 305 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Dominus fortitudo plebis suae,<br />
et protector salutarium Christi sui est :<br />
salvum fac populum tuum, Domine,<br />
et benedic hereditati tuae,<br />
et rege eos usque in saeculum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur est la force de son peuple,<br />
et le protecteur des délivrances de son Christ :<br />
sauvez votre peuple, Seigneur,<br />
et bénissez votre héritage,<br />
et dirigez-les, jusques en l’éternité.</ion-text></ion-col> </ion-row></ion-grid>Ps. Ad te, Domine, clamabo,<br />
Deus meus, ne sileas a me :<br />
<span class="fc">ne quando</span> taceas a me<br />
et assimilabor descentibus in lacum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vers vous, Seigneur, je lancerai mon appel,<br />
mon Dieu, ne gardez pas silence loin de moi :<br />
que jamais votre voix ne se taise pour moi :<br />
là, je serai comme ceux qui descendent dans l’abîme.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Convertere, Domine, aliquantulum,<br />
et deprecare super servos tuos.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Retournez-vous, Seigneur, quelque peu,<br />
et soyez accessible aux prières de vos serviteurs.</ion-text></ion-col> </ion-row></ion-grid>V./  Domine, refugium <span class="fc">factus es</span> nobis<br />
a generatione et progenie.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, vous vous êtes fait pour nous un refuge :<br />
de génération en génération.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
In te, Domine, speravi :<br />
non confundar in aeternum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">En vous, Seigneur, j’ai mis mon espérance :<br />
je ne serai pas confondu à jamais.</ion-text></ion-col> </ion-row></ion-grid> In tua iustitia libera me :<br />
et eripe me :<br />
inclina ad me aurem tuam,<br />
accelera ut eripias me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">En votre justice libérez-moi :<br />
et délivrez-moi :<br />
inclinez vers moi votre oreille ;<br />
hâtez-vous de me délivrer !</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Perfice gressus meos in semitis tuis,<br />
ut non moveantur vestigia mea :<br />
inclina aurem tuam,<br />
et exaudi verba mea :<br />
mirifica misericordias tuas,<br />
qui salvos facis sperantes in te, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Affermissez mes pas dans vos sentiers :<br />
que mes pieds ne chancellent pas :<br />
prêtez-moi l’oreille,<br />
et exaucez mes paroles :<br />
faites resplendir vos miséricordes,<br />
vous qui sauvez ceux qui espèrent en vous, Seigneur.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Quod dico vobis in tenebris,<br />
dicite in lumine, dicit Dominus :<br />
et quod in aure auditis,<br />
praedicate super tecta.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ce que je vous dis dans les ténèbres,<br />
dites-le au grand jour, dit le Seigneur :<br />
et ce que vous entendez dans le creux de l'oreille,<br />
proclamez-le sur les toits.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Circuibo,<br />
et immolabo in tabernaculo eius hostiam iubilationis :<br />
cantabo, et psalmum dicam Domino.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je prendrai place au chœur,<br />
et j’immolerai dans son tabernacle la victime de jubilation :<br />
je chanterai, et je dirai un psaume au Seigneur.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Qui vult venire post me,<br />
abneget semetipsum<br />
et tollat crucem suam,<br />
et sequatur me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Qui veut venir à ma suite,<br />
qu’il renonce à lui-même,<br />
et qu’il prenne sa croix,<br />
et qu’il me suive.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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
