export default defineNuxtPlugin(() => { 

    addRouteMiddleware('global-middleware', (to, from) => {

      const isLogged = localStorage.getItem('daptee-gestion-is-logged');

      if( to.path != '/login' && (!isLogged || isLogged === 'false')){
        return navigateTo('/login')
      } 
      
      },
      { global: true }
    )
  })