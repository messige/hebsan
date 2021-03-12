<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Calendar</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Calendar</ion-title>
                </ion-toolbar>
            </ion-header>

            <p><center>Calendar - 2021</center></p>
            <center>
                <table id="tablepad">
                    <tr>
                        <td><rubrique>Sat. 27/03/2021</rubrique></td>
                        <td><rubrique>Sabbato in Palmis</rubrique></td>
                    </tr>
                    <tr>
                        <td><rubrique>Sun. 28/03/2021</rubrique></td>
                        <td><rubrique>Domenica in Palmis</rubrique></td>
                    </tr>               
                    <tr>
                        <td><rubrique>Mon. 29/03/2021</rubrique></td>
                        <td><rubrique>Hebdomada Sancta Feria II</rubrique></td>
                    </tr>   
                    <tr>
                        <td><rubrique>Tue. 30/03/2021</rubrique></td>
                        <td><rubrique>Hebdomada Sancta Feria III</rubrique></td>
                    </tr>  
                    <tr>
                        <td><rubrique>Wed. 31/03/2021</rubrique></td>
                        <td><rubrique>Hebdomada Sancta Feria IV</rubrique></td>
                    </tr> 
                    <tr>
                        <td><rubrique>Thu. 1/04/2021</rubrique></td>
                        <td><rubrique>Hebdomada Sancta Feria V - In Cena Domini</rubrique></td>
                    </tr> 
                    <tr>
                        <td><rubrique>Fri. 2/04/2021</rubrique></td>
                        <td><rubrique>Hebdomada Sancta Feria VI - In Parasceve</rubrique></td>
                    </tr> 
                    <tr>
                        <td><rubrique>Sat. 3/04/2021</rubrique></td>
                        <td><rubrique>Hebdomada Sancta Sabbato Sancto</rubrique></td>
                    </tr> 
                    <tr>
                        <td><rubrique>Sun. 4/04/2021</rubrique></td>
                        <td><rubrique>Resurrectio Domini</rubrique></td>
                    </tr> 
                </table>  
            </center>                      
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
    export default {
        name: 'Tab2',
        components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
    }
</script>

<style scoped>
#container {
  position: absolute;
  left: 10%;
  right: 0;
  top: 2%;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 20;
}

#container a {
  text-decoration: none;
}
    #tablepad {
        border-collapse: collapse;
    }
    #tablepad td, #tablepad th {
        border: 1px solid #ddd;
        padding: 12px;
      }
</style>
