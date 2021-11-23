import { reactive, provide, inject } from 'vue' ;
export const stateSymbol    = Symbol ( 'state' ) ;
export const createState    = () => reactive ( { language: 'fr' } ) ;
export const useState       = () => inject ( stateSymbol ) ;
export const provideState = () => provide (
   stateSymbol , 
   createState ( ) ) ;
