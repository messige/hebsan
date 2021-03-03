import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw }                 from 'vue-router';
import Tabs                               from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },

  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  } ,

  {
    path: '/OfficeList/:feast',
    name: 'OfficeList',
    component: () => import('@/views/OfficeList.vue'),
    props: true,
  } ,
  {
    path: '/CompletorHebSan/:feast',
    name: 'Completor',
    component: () => import('@/views/CompletorHebSan.vue'),
    props: true,
  } ,
  {
    path: '/CompletorTriduum/:feast',
    name: 'CompletorTriduum',
    component: () => import('@/views/CompletorTriduum.vue')
  } ,
  {
    path: '/CompletorPascha/:feast',
    name: 'CompletorPascha',
    component: () => import('@/views/CompletorPascha.vue')
  } ,
  {
    path: '/HoraMinor/:feast/:office',
    name: 'HoraMinor',
    component: () => import('@/views/HoraMinor.vue') ,
    props: true,
  } , 
  {
    path: '/HoraMinorTriduum/:feast/:office',
    name: 'HoraMinorTriduum',
    component: () => import('@/views/HoraMinorTriduum.vue') ,
    props: true,
  } , 
  {
    path: '/HoraMajor/:feast/:office',
    name: 'HoraMajor',
    component: () => import('@/views/HoraMajor.vue') ,
    props: true,
  } ,   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router