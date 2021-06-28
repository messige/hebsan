<template>
<ion-tabs>
<ion-tab-bar>
  <ion-tab-button><ion-button fill="clear" strong router-link="/">Back to home</ion-button></ion-tab-button> 
  <ion-tab-button> 
    <ion-button fill="clear" strong router-link="/officeList/{{feastIndex}}">Back to Feria {{feastRoman}}</ion-button>  
  </ion-tab-button>
  <ion-tab-button><ion-back-button default-href="/"></ion-back-button></ion-tab-button>  
</ion-tab-bar>
</ion-tabs>
</template>