<!-- DEBUG-VIEW START 320 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Salus populi ego sum, dicit Dominus :<br />
de quacumque tribulatione clamaverint ad me,<br />
exaudiam eos :<br />
et ero illorum Dominus in perpetuum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Das Heil des Volkes bin ich, spricht der Herr.<br />
In jeder Not, aus der sie zu mir rufen,<br />
will ich sie erhören.<br />
Ich will ihr Herr sein in Ewigkeit.</ion-text></ion-col> </ion-row></ion-grid>Ps. Attendite popule meus legem meam :<br />
inclinate aurem vestram in verba oris mei.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Höre, mein Volk, meine Lehre;<br />
neigt euer Ohr zu den Worten meines Mundes!</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Graduale</rubrique><br /><br />
Prope est Dominus omnibus invocantibus eum :<br />
omnibus qui invocant eum in veritate.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr ist allen, die ihn anrufen, nahe,<br />
allen, die zu ihm aufrichtig rufen.</ion-text></ion-col> </ion-row></ion-grid>V./  Laudem Domini loquetur os meum:<br />
et benedicat omnis caro nomen sanctum eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mein Mund verkünde das Lob des Herrn.<br />
Alles was lebt, preise seinen heiligen Namen.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Dirigatur oratio mea<br />sicut incensum in conspectu tuo, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wie ein Rauchopfer steige mein Gebet vor dir (deinem Angesicht) auf, Herr.</ion-text></ion-col> </ion-row></ion-grid>V./  Elevatio manuum mearum sacrificium vespertinum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Das Erheben meiner Hände sei ein abendliches Opfer.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Quis sicut Dominus Deus noster,<br />
qui in altis habitat :<br />
humilia respicit in caelo et in terra?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wer ist wie der Herr, unser Gott,<br />
der in der Höhe wohnt,<br />
der auf das Niedere schaut im Himmel und auf Erden?</ion-text></ion-col> </ion-row></ion-grid>V./  Suscitans a terra inopem,<br />
et de stercore erigens pauperem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der den Armen von der Erde aufrichtet,<br />
und den Elenden erhebt, der im Mist liegt.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Confitemini Domino,<br />
et invocate nomen eius :<br />
annuntiate inter gentes opera eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dankt dem Herrn!<br />
Ruft seinen Namen an!<br />
Macht unter den Völkern seine Taten bekannt!</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Si ambulavero in medio tribulationis,<br />
vivificabis me, Domine :<br />
et super iram inimicorum meorum extendes manum tuam,<br />
et salvum me fecit dextera tua.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wenn ich mitten durch die Bedrängnis gehe,<br />
so wirst du mich am Leben erhalten, Herr;<br />
gegen den Zorn meiner Feinde wirst du deine Hand ausstrecken,<br />
und deine Rechte wird mich retten.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Tu mandasti mandata tua custodiri nimis :<br />
utinam dirigantur viae meae,<br />
ad custodiendas iustificationes tuas.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Du hast deine Befehle gegeben, dass man sie genau beachte.<br />
O dass doch meine Wege dahin gerichtet,<br />
deine Anweisungen zu befolgen!</ion-text></ion-col> </ion-row></ion-grid>	
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

<!-- DEBUG-VIEW ENDED 320 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
