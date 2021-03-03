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

            <p><center>Calendar - not yet implemented</center></p>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
    import ExploreContainer from '@/components/ExploreContainer.vue';

    export default {
        name: 'Tab2',
        components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
    }
</script>
