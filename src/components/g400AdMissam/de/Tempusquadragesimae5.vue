<!-- DEBUG-VIEW START 274 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Iudica me, Deus,<br />
et discerne causam meam de gente non sancta :<br />
ab homine iniquo et doloso eripe me :<br />
quia tu es Deus meus,<br />
et fortitudo mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Verschaff mir Recht, o Gott,<br />
und führe meine Sache gegen ein treuloses Volk!<br />
Rette mich vor bösen und tückischen Menschen,<br />
denn du bist mein Gott<br />
und meine Kraft.</ion-text></ion-col> </ion-row></ion-grid>Ps. Emitte lucem tuam, et veritatem tuam:<br />
ipsa me deduxerunt,<br />
et adduxerunt in montem sanctum tuum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Sende dein Licht und deine Wahrheit,<br />
dass sie mich leiten,<br />
mich bringen zu deinem heiligen Berg.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Eripe me, Domine, de inimicis meis :<br />
doce me facere voluntatem tuam:<br />
quia Deus meus es tu.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, entreiß mich meinen Feinden!<br />
Lehr mich, deinen Willen zu tun,<br />
denn du bist mein Gott.</ion-text></ion-col> </ion-row></ion-grid>V./  Liberator meus, Domine, de gentibus iracundis:<br />
ab insurgentibus in me exaltabis me:<br />
a viro iniquo eripies me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Du bist mein Befreier, Herr, von zornigen Feinden, vor denen,<br />
die auf mich eindrängen wirst du mich erheben,<br />
dem Mann der Gewalt mich entreissen.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Tractus</rubrique><br /><br />
Saepe expugnaverunt me a iuventute mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Oft haben sie mich bedrängt von meiner Jugend an.</ion-text></ion-col> </ion-row></ion-grid>V./  Dicat nunc Israel:<br />
saepe expugnaverunt me a iuventute mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">So soll Israel sagen:<br />
Oft haben sie mich bedrängt von meiner Jugend an.</ion-text></ion-col> </ion-row></ion-grid>V./  Etenim non potuerunt mihi:<br />
supra dorsum meum fabricaverunt peccatores.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und sie haben mich dennoch nicht überwältigt:<br />
Auf meinem Rücken haben Sünder gepflügt.</ion-text></ion-col> </ion-row></ion-grid>V./  Prolongaverunt iniquitatem sibi:<br />
Dominus iustus concidet cervices peccatorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Sie haben ihre Ungerechtigkeit lang getrieben.<br />
Der Herr, der Gerechte, hat die Nacken der Gottlosen zerschlagen.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Confitebor tibi, Domine, in toto corde meo :<br />
retribue servo tuo :<br />
vivam, et custodiam sermones tuos :<br />
vivifica me secundum verbum tuum, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich will dich preisen, Herr, von ganzem Herzen.<br />
Vergilt deinem Knecht,<br />
ich werden leben und deine Worte beachten!<br />
Belebe mich nach deinem Wort, Herr.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Videns Dominus flentes sorores Lazari<br />
ad monumentum,<br />
<span class="fc">lacrimatus est</span> coram Iudaeis<br />
et clamabat :<br />
Lazare, veni foras :<br />
et prodiit ligatis manibus et pedibus,<br />
qui fuerat quatriduanus mortuus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Als der Herr die weinenden Schwestern des Lazarus<br />
am Grab sah,<br />
da weinte er vor den Juden<br />
und rief:<br />
„Lazarus, komm heraus!“.<br />
Und er kam heraus, mit gebundenen Händen und Füßen,<br />
der seit vier Tagen tot gewesen war.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Qui mihi ministrat,<br />
me sequatur:<br />
et ubi ego sum,<br />
illic et minister meus erit.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wer mir dienen will,<br />
der folge mir nach;<br />
und wo ich bin,<br />
dort wird auch mein Diener sein.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Nemo te condemnavit, mulier?<br />
Nemo, Domine.<br />
Nec ego te condemnabo :<br />
iam amplius noli peccare.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Keiner hat dich verurteilt, Frau?<br />
Keiner, Herr.<br />
Dann verurteile ich dich auch nicht!<br />
[Geh, und] sündige von nun an nicht mehr!</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 274 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
