<template>
    <ion-row>
        <ion-col>
            <template v-if="office == '1' || office == '2'">
                <router-link :to=" { name: 'HoraMajor' , 
                        params: { office: thisOffice } }">
                        {{officeName}}
                </router-link>
            </template>
            <template v-else-if="office  == '3' || office == '6' || office == '9'">
                <router-link :to="{ name: 'HoraMinor' , 
                        params: { office: thisOffice }}">
                        {{officeName}}
                </router-link>
            </template>
            <template v-else-if="office  == '0'">
                <router-link :to="{ name: 'Completorium' } ">
                        {{officeName}}
                </router-link>
            </template>
        </ion-col>
        <template v-if="state.language == 'fr'">
            <ion-col> 
            <template v-if="office == '1' || office == '2'">                 
                <router-link :to="{ name: 'HoraMajorTR' , 
                        params: { office: thisOffice , language: 'FR' }}">
                        FR       
                </router-link>
            </template>
            <template v-else-if="office  == '3' || office == '6' || office == '9'">
                <router-link :to="{ name: 'HoraMinorTR' , 
                        params: { office: thisOffice , language: 'FR' }}">
                        FR       
                </router-link>
            </template>
            <template v-else-if="office  == '0'">
                <router-link :to="{ name: 'CompletoriumTR' , 
                        params: { language: 'fr' }}">
                        FR
                </router-link>  
            </template>            
            </ion-col>
        </template> 
        <template v-if="state.language == 'de'">
            <ion-col>  
            <template v-if="office == '1' || office == '2'">                  
                <router-link :to="{ name: 'HoraMajorTR' , 
                        params: { office: thisOffice , language: 'DE' }}">
                        DE      
                </router-link>
            </template>
            <template v-else-if="office  == '3' || office == '6' || office == '9'">
                <router-link :to="{ name: 'HoraMinorTR' , 
                        params: { office: thisOffice , language: 'DE' }}">
                        DE      
                </router-link>
            </template>
            <template v-else-if="office  == '0'">
                <router-link :to="{ name: 'CompletoriumTR' , 
                        params: { language: 'de' }}">
                        DE
                </router-link>  
            </template>              
            </ion-col>
        </template>
        <ion-col>                
        </ion-col>
        <ion-col>                
        </ion-col>
        <ion-col>                
        </ion-col>           
    </ion-row>
</template>
<script>
    import { defineComponent }  from 'vue';
    import { useState }         from '../store/store';
    export default defineComponent ( {
        name: 'OfficeType' ,
        props: {
            feast:  { type: String } ,
            office: { type: String }
        } ,
        setup ( props ) {
            const state         = useState ( ) ;
            let thisOffice        = '1' ;            
            let officeName        = "" ;
            if (  props.office == '1' ) {
                thisOffice        = '1' ,
                officeName        = "Ad Laudes" }
            else if ( props.office == '2' ) { 
                thisOffice        = '2' ,
                officeName = "Ad Vesperas" }  
            else if ( props.office == '3' ) { 
                thisOffice        = '3' ,
                officeName = "Ad Tertiam" }
            else if ( props.office == '6' ) { 
                thisOffice        = '6' ,
                officeName = "Ad Sextam" }   
            else if ( props.office == '9' ) { 
                thisOffice        = '9' ,
                officeName = "Ad Nonam" } 
            else if ( props.office == '0' ) {
                thisOffice        = '0' ,
                officeName = "Ad Completorium" } 
            return { state , thisOffice , officeName }
        } 
    } )
</script>