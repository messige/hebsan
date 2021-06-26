<!-- DEBUG-VIEW START 131 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
Salus populi ego sum, dicit Dominus :<br />
de quacumque tribulatione clamaverint ad me,<br />
exaudiam eos :<br />
et ero illorum Dominus in perpetuum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le salut de mon peuple, c’est moi, dit le Seigneur :<br />
de quelque détresse qu’ils crient vers moi,<br />
je les exaucerai :<br />
et je serai leur Seigneur à jamais.</ion-text></ion-col> </ion-row></ion-grid> Salus <b>tua</b> ego sum<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary"></ion-text></ion-col> </ion-row></ion-grid>Ps. Attendite popule meus legem meam :<br />
inclinate aurem vestram in verba oris mei.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Soyez attentifs, mon peuple, à ma loi :<br />
prêtez l’oreille aux paroles de ma bouche.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Graduale</rubrique><br /><br />
Prope est Dominus omnibus invocantibus eum :<br />
omnibus qui invocant eum in veritate.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur est proche pour tous ceux qui l’invoquent :<br />
pour tous ceux qui l’invoquent en vérité.</ion-text></ion-col> </ion-row></ion-grid>V./  Laudem Domini loquetur os meum:<br />
et benedicat omnis caro nomen sanctum eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ma bouche dira la louange du Seigneur ;<br />
et que toute chair bénisse son saint nom.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Dirigatur oratio mea sicut incensum in conspectu tuo, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que ma prière soit portée comme de l’encens en votre présence, Seigneur.</ion-text></ion-col> </ion-row></ion-grid>V./  Elevatio manuum mearum sacrificium vespertinum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">L’élévation de mes mains est un sacrifice du soir.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Quis sicut Dominus Deus noster,<br />
qui in altis habitat :<br />
humilia respicit in caelo et in terra?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Qui est semblable au Seigneur notre Dieu<br />
qui habite dans les hauteurs,<br />
et qui pose le regard sur ce qui est humble dans le ciel et sur la terre ?</ion-text></ion-col> </ion-row></ion-grid>V./  Suscitans a terra inopem,<br />
et de stercore erigens pauperem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lui qui ramasse par terre l’indigent,<br />
et qui, du fumier, relève le pauvre.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Confitemini Domino,<br />
et invocate nomen eius :<br />
annuntiate inter gentes opera eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Acclamez le Seigneur,<br />
et invoquez son nom :<br />
annoncez ses œuvres parmi les nations.</ion-text></ion-col> </ion-row></ion-grid> Cantate ei et psallite ei<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary"></ion-text></ion-col> </ion-row></ion-grid> Laudamini in nomine<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary"></ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Si ambulavero in medio tribulationis,<br />
vivificabis me, Domine :<br />
et super iram inimicorum meorum extendes manum tuam,<br />
et salvum me fecit dextera tua.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Si je marche au milieu de la détresse,<br />
vous me vivifierez, Seigneur :<br />
et sur la colère de mes ennemis,<br />
vous étendrez la main, et votre droite m’a sauvé.</ion-text></ion-col> </ion-row></ion-grid>V./  In quacumque die invocavero te,<br />
exaudi me, Domine:<br />
multiplicabis in anima mea virtutem tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">En quelque jour que je vous invoque,<br />
exaucez-moi. Seigneur,<br />
vous augmenterez votre puissance en mon âme.</ion-text></ion-col> </ion-row></ion-grid>V./  Adorabo ad templum sanctum tuum<br />
et confitebor nomini tuo, Domine,<br />
super misericordia tua et veritate tua.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">J’adorerai dans votre saint Temple,<br />
et j’acclamerai votre nom, Seigneur<br />
pour votre miséricorde, et votre vérité.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Tu mandasti mandata tua custodiri nimis :<br />
utinam dirigantur viae meae,<br />
ad custodiendas iustificationes tuas.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous, vous avez commandé de garder vos commandements, à fond :<br />
puissent mes voies être dirigées<br />
à observer vos justes dispositions !</ion-text></ion-col> </ion-row></ion-grid>	
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

<!-- DEBUG-VIEW ENDED 131 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
