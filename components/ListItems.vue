<script setup lang="ts">
    
    import type { IUser } from '../models/IUser'
    import type { IProduct } from '../models/IProduct'

    const props = defineProps<{
        users?: IUser,
        products?: IProduct
    }>()
    
    let item = ref()
    
    if(props.users){
        item.value = props.users
    } else {
        item.value = props.products
    }

</script>

<template>

    <v-list>
        <v-list-item>
            <v-row align="center" class="spacer" no-gutters >
                <v-col cols="4" md="1" sm="2" >
                    <v-avatar size="36px" >
                        <v-img alt="Avatar" :src="item.image" ></v-img>
                    </v-avatar>
                </v-col>

                <v-col class="hidden-xs-only text-left ms-2" md="3" sm="5" >
                    <strong v-html="item.name"></strong>
                </v-col>
                <v-col class="text-medium-emphasis text-truncate hidden-sm-and-down" >
                   {{ item.country }}
                </v-col>
                <v-col class="text-medium-emphasis text-truncate hidden-sm-and-down" >
                   {{ item.weight+' Kg.' }}
                </v-col>
                <v-col class="text-strong-emphasis text-truncate hidden-sm-and-down" >
                    {{ item.city || '$ '+item.price }}
                </v-col>
                <v-col>
                    <ItemOptions :id="item.id" />
                </v-col>
            </v-row>
          </v-list-item>
    </v-list>

</template>