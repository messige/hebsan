<!-- DEBUG-VIEW START 134 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
Si iniquitates observaveris Domine,<br />
Domine quis sustinebit?<br />
Quia apud te propitiatio est, Deus Israel.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Si vous examinez les iniquités, Seigneur,<br />
Seigneur, qui subsistera ?<br />
Car près de vous est le pardon, Dieu d'Israël.</ion-text></ion-col> </ion-row></ion-grid>Ps. De profundis clamavi ad te, Domine :<br />
Domine, exaudi vocem meam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Des profondeurs j’ai lancé vers vous mon appel, Seigneur :<br />
Seigneur, exaucez ma voix.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Graduale</rubrique><br /><br />
Si ambulem in medio umbrae mortis,<br />
non timebo mala :<br />
quoniam tu mecum es, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Si je circule en pleine ombre de la mort,<br />
je ne craindrai aucun mal :<br />
car vous, vous êtes avec moi, Seigneur.</ion-text></ion-col> </ion-row></ion-grid>V./  Virga tua et baculus tuus,<br />
ipsa me consolata sunt.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Votre houlette et votre bâton :<br />
ce sont eux qui m’ont réconforté.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Ecce quam bonum et quam iucundum<br />
habitare fratres in unum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Voyez comme il est bon et comme il est agréable<br />
d’habiter en frères, d’un seul cœur !</ion-text></ion-col> </ion-row></ion-grid>V./  Sicut unguentum in capite,<br />
quod descendit in barbam, barbam Aaron.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">C’est comme un parfum sur la tête,<br />
qui ruisselle sur la barbe, la barbe d’Aaron.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Ecce quam bonum et quam iucundum<br />
habitare fratres in unum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Voyez comme il est bon et comme il est agréable<br />
d’habiter en frères, d’un seul cœur !</ion-text></ion-col> </ion-row></ion-grid>V./  Sicut unguentum in capite,<br />
quod descendit in barbam, barbam Aaron.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">C’est comme un parfum sur la tête,<br />
qui ruisselle sur la barbe, la barbe d’Aaron.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Qui timent Dominum,<br />
sperent in eum :<br />
adiutor et protector eorum est.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ceux qui craignent le Seigneur,<br />
qu'ils mettent en lui leur espérance :<br />
il est leur secours et leur protecteur.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Recordare mei, Domine,<br />
omni potentatui dominans :<br />
da sermonem rectum in os meum,<br />
ut placeant verba mea in conspectu principis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Souvenez-vous de moi, Seigneur,<br />
qui dominez sur toute puissance :<br />
mettez dans ma bouche un propos droit,<br />
que mes mots plaisent<br />
en présence du prince.</ion-text></ion-col> </ion-row></ion-grid>V./  Everte cor eius in odium repugnantium nobis<br />
et in eos, qui consentiunt eis:<br />
nos autem libera in manu tua,<br />
Deus noster, in aeternum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Portez son cœur à haïr ceux qui s'en prennent à nous<br />
et ceux qui conspirent avec eux :<br />
quant à nous, délivrez-nous par votre main,<br />
notre Dieu, à jamais.</ion-text></ion-col> </ion-row></ion-grid>V./  Recordare, quod steterim in conspectu tuo,<br />
ut loquerer pro eis bonum<br />
et averterem indignationem tuam ab eis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary"></ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Aufer a me opprobrium et contemptum,<br />
quia mandata tua exquisivi, Domine :<br />
nam et testimonia tua meditatio mea est.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ôtez de moi l’opprobre et le mépris :<br />
car j’ai recherché vos commandements, Seigneur :<br />
Et en effet, ma méditation, c’est vos révélations.</ion-text></ion-col> </ion-row></ion-grid>	
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

<!-- DEBUG-VIEW ENDED 134 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
