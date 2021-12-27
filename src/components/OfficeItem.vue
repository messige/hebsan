<template>
    <ion-item v-if="officeItem" :routerLink="officeItem.linkTo" :detail="false" class="list-item">
      <routerLink :to=" { name: officeItem.linkTo , 
                          params: { office:  officeItem.linkParams } }"> 
        <ion-label class="ion-text-wrap">
          <h2>{{ officeItem.officeName }} <ion-icon :icon="chevronForward"></ion-icon></h2>
        </ion-label>
      </routerLink>
    </ion-item>
</template>
<script lang="ts">
import { IonLabel }         from '@ionic/vue';
import { chevronForward }   from 'ionicons/icons';
import { defineComponent }  from 'vue';

export default defineComponent ( {
  name: 'OfficeItem' ,
  components: { IonLabel } ,
  props: {
    officeItem: Object
  },
  data() {
    return { chevronForward }
  }
} ) ;
</script>
