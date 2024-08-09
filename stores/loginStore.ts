export const useLoginStore = defineStore('useLoginStore', {
    state: () => ({
      user: 'Daptee',
      password: 'Daptee2024',
      snackbarColor: '',
      snackbarText: '',
      snackbarShow: false,
    }),
    actions: {
      async login(user:string, password:string) {

        const validateUser = async () => {

          if(user === this.user && password === this.password){
            return true       
          } else {
            return false
          }
  
        }

        try {

          const login = await validateUser()

          if(login){
            localStorage.setItem('daptee-gestion-is-logged', 'true');
            this.toggleSnackbar('green', 'Welcome', true)
            await navigateTo({ path: '/' })

          }else{
            localStorage.setItem('daptee-gestion-is-logged', 'false');
            this.toggleSnackbar('red', 'Not valid user', true)
          }

        } catch (error:any) {
            localStorage.setItem('daptee-gestion-is-logged', 'false');
            this.toggleSnackbar('red', error, true)
        }
        
      },
      async logout(){
        localStorage.setItem('daptee-gestion-is-logged', 'false');
        this.toggleSnackbar('green','Goodbye', true)
        await navigateTo({ path: '/login' })
      },
      toggleSnackbar(color:string, text:string, show:boolean){

        this.snackbarShow = false
        this.snackbarColor = color
        this.snackbarText = text 
        this.snackbarShow = show

      }
    }
  })
  