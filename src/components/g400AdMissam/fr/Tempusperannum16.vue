<!-- DEBUG-VIEW START 313 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Ecce Deus adiuvat me,<br />
et Dominus susceptor est animae meae :<br />
averte mala inimicis meis,<br />
in veritate tua disperde illos,<br />
protector meus Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Voici que Dieu vient à mon secours :<br />
et le Seigneur est le recours de mon âme .<br />
Faites retomber les maux sur mes ennemis :<br />
dans votre vérité, envoyez-les à leur perte,<br />
Seigneur, mon protecteur.</ion-text></ion-col> </ion-row></ion-grid>Ps. Deus in nomine tuo salvum me fac,<br />
et in virtute tua iudica me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dieu, par votre nom sauvez-moi :<br />
et par votre puissance jugez-moi.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Domine Dominus noster,<br />
quam admirabile est nomen tuum in universa terra.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, notre Seigneur,<br />
qu’il est admirable votre nom, sur la terre entière !</ion-text></ion-col> </ion-row></ion-grid>V./  Quoniam <span class="fc">elevata est</span> magnificentia tua super caelos.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Car votre magnificence est élevée au-dessus des cieux.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Si ambulem in medio umbrae mortis,<br />
non timebo mala :<br />
quoniam tu mecum es, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Si je circule en pleine ombre de la mort,<br />
je ne craindrai aucun mal :<br />
car vous, vous êtes avec moi, Seigneur.</ion-text></ion-col> </ion-row></ion-grid>V./  Virga tua et baculus tuus,<br />
ipsa me consolata sunt.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Votre houlette et votre bâton :<br />
ce sont eux qui m’ont réconforté.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Eripe me de inimicis meis, Deus meus :<br />
et ab insurgentibus in me<br /><details>
<summary>libera me.</summary>
<p>libera me, Domine.<br />libera me, Deus meus.</p></details><ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dégagez-moi de mes ennemis, mon Dieu :<br />
et de ceux qui se dressent contre moi,<br />
délivrez-moi (, Seigneur) (, mon Dieu).</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Iustitiae Domini rectae, laetificantes corda,<br />
et dulciora super mel et favum :<br />
nam et servus tuus custodiet ea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Les arrêts du Seigneur sont droits, ils réjouissent les cœurs,<br />
et ils sont plus doux que le miel et qu’un rayon de miel :<br />
aussi votre serviteur les gardera-t-il.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Acceptabis sacrificium iustitiae,<br />
oblationes et holocausta,<br />
super altare tuum, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous agréerez le sacrifice de justice,<br />
les oblations et les holocaustes,<br />
sur votre autel, Seigneur.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Optimam partem elegit sibi Maria,<br />
quae non auferetur ab ea in aeternum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Marie s'est choisi la meilleure part,<br />
qui ne lui sera pas enlevée, pour l'éternité.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 313 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
