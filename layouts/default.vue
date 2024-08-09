<template>
  <v-card>
    <v-layout>
      <v-app-bar color="surface-variant" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>

        <v-toolbar-title class="logo">
          <nuxt-icon name="logo" filled />
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <search />
          <div class="mr-4 ml-2" > 
            <v-menu>
              <template v-slot:activator="{ props }">
                <div v-bind="props" class="cursor-pointer" >
                  <v-icon icon="mdi-account" ></v-icon>
                  <small class="px-1" >{{ loginStore.user }}</small>
                </div>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title><small>Mi cuenta</small></v-list-item-title>
                </v-list-item>
                <v-list-item @click="loginStore.logout" >
                  <v-list-item-title><small>Cerrar sesión</small></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </template>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary>

        <MenuNav v-for="item in items" :key="item.id" :item="item" />

      </v-navigation-drawer>

      <v-main>
        <v-card-text>
          <slot />
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>

    <Loading />  
  
</template>

<script setup >
  import { NavItems } from '~/models/INav' 

  const loginStore = useLoginStore()

  const items = NavItems
  const group = ref(null)
  const drawer = ref(false)

</script>
