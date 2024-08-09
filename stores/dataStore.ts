import { ApiUrl } from '~/models/IApi'

const { apiUrl } = ApiUrl

export const useStoreData = defineStore('dataStore', {
    state: () => ({
      search: '',
      data: [],
      apiUrl,
      loading: false
    }),
    actions: {
      async fetchData(type:string) {
        this.getData(type)
      },
      async filterData(type:string, searchValue: string) {
        this.getData(type, searchValue)
      },
      getData(type:string, searchValue?:string){

        this.loading = true
        this.data = []
        
        const url = new URL(`${apiUrl}${type}`)
        
        if(searchValue){
          url.searchParams.append('name', searchValue)
        }

        fetch(url, {
          method: 'GET',
          headers: {'content-type':'application/json'},
        }).then(res => {
          if (res.ok) {
            return res.json();
          }
        }).then(data => {
          this.data = data
        }).catch(error => {
          console.log(error);
        }).finally( () =>
          this.loading = false
        )

      },
      deleteItem(id:string){
          this.data = this.data.filter(function(el:any) { return el.id != id; });
      }
    }
  })
  