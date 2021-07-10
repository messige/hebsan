/* const store = new Store({
   state:{
      name: "Vue"
   }
})

export default store */



import { reactive, provide, inject } from 'vue' ;
//@typescript-eslint/explicit-module-boundary-types
export  const stateSymbol    = Symbol('state') ;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createState    = () => reactive ( { language: 'fr' } ) ;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useState       = () => inject ( stateSymbol ) ;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const provideState = () => provide (
   stateSymbol , 
   createState ( ) ) ;