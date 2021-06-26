import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw }                 from 'vue-router';
import Tabs                               from '@/views/Tabs.vue';
import Tab1                               from '@/views/Tab1.vue' ;

const routes: Array<RouteRecordRaw> = [
  { path: '/',
    redirect: '/tabs/tab1'} ,
  { path: '/tabs/',
    component: Tabs,
    children: [
      { path: '',
        redirect: 'tab1' } ,
      { path: 'tab1',
        name: 'Tab1' ,
        component: Tab1 } ,
      { path: 'tab2',
        name: 'Tab2' ,
        component: () => import ( '@/views/Tab2.vue' ) } ,
      { path: 'tab3',
        name: 'Tab3' ,
        component: () => import ( '@/views/Tab3.vue' ) } ,
      { path: 'tab4',
        name: 'Tab4' ,
        component: () => import ( '@/views/Tab4.vue' ) } ] } ,
     { path: '/PiecesForAFeast',
      name: 'PiecesForAFeast',
      component: () => import ( '@/views/PiecesForAFeast.vue' ) ,
      props: true } ,
      { path: '/HebdoSancta',
      name: 'HebdoSancta',
      component: () => import ( '@/views/HebdoSancta.vue' ) ,
      props: true } ,      
    { path: '/OfficeList',
      name: 'OfficeList',
      component: () => import ( '@/views/OfficeList.vue' ) ,
      props: true } ,      
     { path: '/Completorium',
      name: 'Completorium',
      component: () => import ( '@/views/Completorium.vue' ) ,
      props: true } ,
    { path: '/HoraMinor',
      name: 'HoraMinor',
      component: () => import ( '@/views/HoraMinor.vue' ) ,
      props: true } ,
    { path: '/HoraMajor',
      name: 'HoraMajor',
      component: () => import ( '@/views/HoraMajor.vue' ) ,
      props: true } ,
    { path: '/toni',
      name: 'Toni',
      component: () => import ( '@/views/Toni.vue' ) } 
    
    ]        

      const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
      })
      
      export default router