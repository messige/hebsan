<!-- DEBUG-VIEW START 269 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Oculi mei semper ad Dominum,<br />
quia ipse evellet de laqueo pedes meos :<br />
respice in me, et miserere mei,<br />
quoniam unicus et pauper sum ego.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mes yeux sont constamment tournés vers le Seigneur,<br />
car c’est lui qui dégagera du piège mes pieds :<br />
posez sur moi le regard, et ayez pitié de moi,<br />
car moi, je suis seul et malheureux.</ion-text></ion-col> </ion-row></ion-grid>Ps. Ad te, Domine, levavi animam meam :<br />
Deus meus, in te confido,<br />
non erubescam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vers vous, Seigneur, j’ai élevé mon âme :<br />
Mon Dieu, en vous je me confie ;<br />
que je n’aie pas à rougir !</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Introitus</rubrique><br /><br />
Dum sanctificatus fuero in vobis,<br />
congregabo vos de universis terris :<br />
et effundam super vos aquam mundam,<br />
et mundabimini ab omnibus inquinamentis vestris :<br />
et dabo vobis spiritum novum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Quand j'aurai manifesté en vous ma sainteté,<br />
je vous rassemblerai de toutes les terres,<br />
et je répandrai sur vous une eau pure,<br />
et vous serez purifiés de toutes vos souillures :<br />
et je vous donnerai un esprit nouveau.</ion-text></ion-col> </ion-row></ion-grid>Ps. Semper laus eius in ore meo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Toujours sa louange sera dans ma bouche.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Exsurge Domine,<br />
non praevaleat homo :<br />
iudicentur gentes in conspectu tuo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Levez-vous, Seigneur,<br />
que l’homme ne s’impose pas :<br />
que les nations soient jugées en votre présence.</ion-text></ion-col> </ion-row></ion-grid>V./  In convertendo inimicum meum retrorsum<br />
 infirmabuntur et peribunt a facie tua.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Quand mon ennemi sera renvoyé sur ses pas :<br />
ils chancelleront et périront devant votre face.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Tractus</rubrique><br /><br />
Ad te levavi oculos meos,<br />
qui habitas in caelis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vers vous, j’ai levé les yeux,<br />
qui habitez dans les cieux.</ion-text></ion-col> </ion-row></ion-grid>V./  Ecce sicut oculi servorum<br />
in manibus dominorum suorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Voici, comme les yeux des serviteurs<br />
sur les mains de leurs maîtres.</ion-text></ion-col> </ion-row></ion-grid>V./  Et sicut oculi ancillae in manibus dominae suae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et comme les yeux de la servante sur les mains de sa maîtresse.</ion-text></ion-col> </ion-row></ion-grid>V./  Ita oculi nostri ad Dominum Deum nostrum,<br />
donec misereatur nostri.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ainsi nos yeux vers le Seigneur notre Dieu,<br />
jusqu’à ce qu’il ait pitié de nous.</ion-text></ion-col> </ion-row></ion-grid>V./  Miserere nobis, Domine, miserere nobis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ayez pitié de nous, Seigneur, ayez pitié de nous.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Iustitiae Domini rectae, laetificantes corda,<br />
et dulciora super mel et favum :<br />
nam et servus tuus custodiet ea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Les arrêts du Seigneur sont droits, ils réjouissent les cœurs,<br />
et ils sont plus doux que le miel et qu’un rayon de miel :<br />
aussi votre serviteur les gardera-t-il.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Qui biberit aquam,<br />
quam ego do, dicit Dominus Samaritanae,<br />
fiet in eo fons aquae<br />
salientis in vitam aeternam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Celui qui boira de l'eau<br />
que moi je donne, dit le Seigneur à la Samaritaine,<br />
il surgira en lui une source d'eau<br />
jaillissante pour la vie éternelle.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Passer invenit sibi domum, et turtur nidum,<br />
ubi reponat pullos suos :<br />
altaria tua Domine virtutum,<br />
rex meus, et Deus meus :<br />
beati qui habitant in domo tua,<br />
in saeculum saeculi laudabunt te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le passereau se trouve une maison :<br />
et la tourterelle un nid où déposer ses petits :<br />
pour moi, j’ai vos autels, ô Seigneur des armées, <br />mon Roi et mon Dieu. <br />
heureux ceux qui habitent en votre maison,<br />
dans les siècles des siècles ils vous loueront.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 269 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
