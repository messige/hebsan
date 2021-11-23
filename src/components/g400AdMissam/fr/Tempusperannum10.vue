<!-- DEBUG-VIEW START 301 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Dominus illuminatio mea, et salus mea,<br />
quem timebo?<br />
Dominus defensor vitae meae,<br />
a quo trepidabo?<br />
qui tribulant me inimici mei, <span class="fc">infirmati sunt</span>,<br />
et ceciderunt.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur est la lumière qui m’inonde, et mon salut,<br />
qui craindrai-je ?<br />
Le Seigneur est le défenseur de ma vie,<br />
devant qui tremblerai-je ?<br />
Mes ennemis qui me persécutent ont chancelé,<br />
et ils sont tombés.</ion-text></ion-col> </ion-row></ion-grid>Ps. Si consistant adversum me castra :<br />
non timebit cor meum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Si des camps prennent quartier contre moi,<br />
mon cœur ne craindra pas.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Propitius esto Domine peccatis nostris :<br />
ne quando dicant gentes :<br />
ubi est Deus eorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Soyez indulgent, Seigneur, pour nos péchés :<br />
de peur que les nations ne disent d’aventure :<br />
Où est leur Dieu ?</ion-text></ion-col> </ion-row></ion-grid>V./  Adiuva nos, Deus salutaris noster :<br />
et propter honorem nominis tui Domine, libera nos.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Venez à notre secours, Dieu notre sauveur :<br />
et en raison de l'honneur de votre nom, Seigneur, délivrez-nous.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Exaltabo te Domine,<br />
quoniam suscepisti me,<br />
nec delectasti inimicos meos super me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je chanterai vos grandeurs, Seigneur,<br />
car vous m’avez recueilli :<br />
et vous n’avez pas réjoui mes ennemis à mon sujet.</ion-text></ion-col> </ion-row></ion-grid>V./  Domine Deus meus, clamavi ad te<br />
et sanasti me:<br />
Domine, abstraxisti ab inferis animam meam,<br />
salvasti me descendentibus in lacum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, mon Dieu, j’ai lancé vers vous mon appel,<br />
et vous m’avez guéri :<br />
Seigneur, vous avez fait sortir mon âme du séjour des morts,<br />
vous m’avez sauvé de ceux qui descendent dans l’abîme.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Deus, qui sedes super thronum,<br />
et iudicas aequitatem,<br />
esto refugium pauperum in tribulatione:<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dieu qui siégez sur le trône,<br />
et qui jugez ce qui est équitable,<br />
soyez le refuge des pauvres dans la détresse :</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Illumina oculos meos, nequando obdormiam in morte:<br />
nequando dicat inimicus meus :<br />
praevalui adversus eum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Illuminez mes yeux,<br />
que jamais je ne m’endorme dans la mort :<br />
que mon ennemi ne vienne un jour à dire :<br />
J’ai prévalu sur lui.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Dominus firmamentum meum,<br />
et refugium meum, et liberator meus :<br />
Deus meus adiutor meus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur est mon assise,<br />
et mon refuge, et mon libérateur :<br />
mon Dieu est mon secours.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Quicumque fecerit voluntatem Patris mei,<br />
qui in caelis est :<br />
ipse meus frater, soror, et mater est,<br />
dicit Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Quiconque fait la volonté de mon Père<br />
qui est dans les cieux :<br />
celui-là est mon frère, ma sœur, et ma mère,<br />
dit le Seigneur.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 301 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
