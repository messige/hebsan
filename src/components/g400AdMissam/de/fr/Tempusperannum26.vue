<!-- DEBUG-VIEW START 321 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<template v-if="annoABC == 'A'"><rubrique>Introitus</rubrique><br /><br />
In nomine Domini omne genu flectatur,<br />
caelestium, terrestrium et infernorum :<br />
quia Dominus factus oboediens usque ad mortem,<br />
mortem autem crucis :<br />
ideo Dominus Iesus Christus in gloria est Dei Patris.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Au nom du Seigneur, que tout genou fléchisse,<br />
aux cieux, sur terre et aux enfers :<br />
car le Seigneur s'est fait obéissant jusqu'à la mort,<br />
et la mort de la croix :<br />
voilà pourquoi le Seigneur Jésus-Christ est en la gloire de Dieu le Père.</ion-text></ion-col> </ion-row></ion-grid>Ps. Domine exaudi orationem meam<br />
et clamor meus ad te (per)veniat.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, exaucez ma prière,<br />
et que mon cri (par)vienne jusqu’à vous.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Introitus</rubrique><br /><br />
Omnia quae fecisti nobis, Domine,<br />
in vero iudicio fecisti,<br />
quia peccavimus tibi,<br />
et mandatis tuis non obedivimus :<br />
sed da gloriam nomini tuo,<br />
et fac nobiscum secundum multitudinem misericordiae tuae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Tout ce que vous nous avez fait, Seigneur,<br />
c’est en pleine justice que vous l’avez fait,<br />
car nous avons péché contre vous,<br />
et nous n’avons pas obéi à vos commandements :<br />
mais donnez gloire à votre nom,<br />
et traitez-nous selon l’abondance de votre miséricorde.</ion-text></ion-col> </ion-row></ion-grid>Ps. Beati immaculati in via :<br />
qui ambulant in lege Domini.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Heureux ceux qui sont irréprochables dans leur voie<br />et qui marchent selon la loi du Seigneur.</ion-text></ion-col> </ion-row></ion-grid>Ps. Magnus Dominus et laudabilis nimis,<br />
in civitate Dei (nostri), in monte sancto eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Grand est le Seigneur, et digne de louange infiniment,<br />
dans la cité de (notre) Dieu, sur sa montagne sainte.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'A'"><rubrique>Graduale</rubrique><br /><br />
Christus <span class="fc">factus est</span> pro nobis<br />
oboediens usque ad mortem,<br />
mortem autem crucis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Christ s'est fait pour nous<br />
obéissant jusqu'à la mort,<br />
et la mort de la croix.</ion-text></ion-col> </ion-row></ion-grid>V./  Propter quod et Deus exaltavit illum<br />
et dedit illi nomen,<br />
quod est super omne nomen.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">C'est pourquoi aussi Dieu l'a exalté<br />
et lui a donné le nom<br />
qui est au-dessus de tout nom.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Oculi omnium in te sperant, Domine :<br />
et tu das illis escam in tempore opportuno.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Les yeux de tous mettent en vous leur espérance, Seigneur :<br />
et vous, vous leur donnez leur nourriture au temps opportun.</ion-text></ion-col> </ion-row></ion-grid>V./  Aperis tu manum tuam:<br />
et imples omne animal benedictione.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous ouvrez vous-même la main :<br />
et vous comblez tout vivant de bénédiction.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Paratum cor meum, Deus, paratum cor meum :<br />
cantabo, et psallam tibi, gloria mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mon cœur est prêt, Dieu, mon cœur est prêt :<br />
je chanterai et psalmodierai pour vous, ma gloire.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Super flumina Babylonis,<br />
illic sedimus et flevimus :<br />
dum recordaremur tui, Sion.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Au bord des fleuves de Babylone, <br />
là-bas, nous nous sommes assis, et nous avons pleuré,<br />
tandis que nous nous souvenions de toi, Sion.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Memento verbi tui servo tuo, Domine,<br />
in quo mihi spem dedisti :<br />
haec me <span class="fc">consolata est</span> in humilitate mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Souvenez-vous de votre parole à votre serviteur, Seigneur,<br />
en laquelle vous m’avez donné espérance :<br />
c’est elle qui m’a consolé dans ma médiocrité.</ion-text></ion-col> </ion-row></ion-grid>	
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

<!-- DEBUG-VIEW ENDED 321 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
