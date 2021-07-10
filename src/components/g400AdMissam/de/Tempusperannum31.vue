<!-- DEBUG-VIEW START 274 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
Ne derelinquas me, Domine, Deus meus,<br />
ne discedas a me :<br />
intende in adiutorium meum,<br />
Domine virtus salutis meae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Verlass mich nicht, Herr, mein Gott;<br />
weiche nicht von mir!<br />
Achte auf meine Hilfe,<br />
Herr, Kraft meines Heiles!</ion-text></ion-col> </ion-row></ion-grid>Ps. Domine, ne in furore tuo arguas me :<br />
neque in ira tua corripias me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, strafe mich nicht in deinem Zorn,<br />
züchtige mich nicht in deinem Grimm!</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Suscepimus, Deus,<br />
misericordiam tuam in medio templi tui.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Empfangen haben wir, Gott,<br />
dein Erbarmen inmitten deines Tempels.</ion-text></ion-col> </ion-row></ion-grid> Secundum nomen tuum, Domine (Deus),<br />
ita et laus tua in fines terrae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wie dein Name, Herr (Gott),<br />
so reicht dein Ruhm bis an die Enden der Erde.</ion-text></ion-col> </ion-row></ion-grid>V./  Sicut audivimus,<br />
ita et vidimus in civitate Dei nostri<br />
in monte sancto eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wie wir es gehört haben,<br />
so haben wir es gesehen in der Stadt des Herrn unsres Gottes,<br />
auf seinem heiligen Berg.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Verbo Domini caeli <span class="fc">firmati sunt</span><br />
et spiritu oris eius omnis virtus eorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Durch das Wort des Herrn wurden die Himmel geschaffen,<br />
ihr ganzes Heer durch den Hauch seines Mundes.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Verbo Domini caeli <span class="fc">firmati sunt</span><br />
et spiritu oris eius omnis virtus eorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Durch das Wort des Herrn wurden die Himmel geschaffen,<br />
ihr ganzes Heer durch den Hauch seines Mundes.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
O quam bonus et suavis est, Domine,<br />
Spiritus tuus in nobis!<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">O wie gut und wohltuend, Herr,<br />
ist dein Geist in uns.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Offertorium</rubrique><br /><br />
Benedic anima mea Domino,<br />
et noli oblivisci omnes retributiones eius :<br />
et renovabitur, sicut aquilae, iuventus tua.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lobe den Herrn, meine Seele,<br />
und vergiss nicht, was er dir Gutes getan hat;<br />
und wie dem Adler wird dir die Jugend erneuert.</ion-text></ion-col> </ion-row></ion-grid>V./  Qui propitiatur omnibus iniquitatibus tuis<br />
et redimet de interitu vitam tuam:<br />
qui coronat te in miseratione et misericordia.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der dir all deine Schuld vergibt<br />
und der dein Leben vor dem Untergang rettet;<br />
der dich mit Huld und Erbarmen krönt.</ion-text></ion-col> </ion-row></ion-grid>V./  Iustitia eius super filios filiorum<br />
custodientium testamentum eius et mandata eius,<br />
ut faciant ea.<br />
Dominus in caelo paravit sedem suam:<br />
et regnum eius omnium dominabitur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seine Gerechtigkeit währt bis zu den Kindeskindern bei denen,<br />
die seinen Bund bewahren und an seine Gebote gedenken,<br />
um sie zu tun.<br />
Der Herr hat seinen Thron errichtet im Himmel,<br />
seine königliche Macht beherrscht das All.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Notas mihi fecisti Domine vias vitae:<br />
adimplebis me laetitia cum vultu tuo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Du zeigtest mir die Wege zum Leben, Herr.<br />
Du wirst mich mich mit Freude erfüllen mit deinem Angesicht.</ion-text></ion-col> </ion-row></ion-grid>	
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
