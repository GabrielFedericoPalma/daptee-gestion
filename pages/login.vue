<script setup lang="ts">

  definePageMeta({
    layout: false
  })

  const loginStore = useLoginStore()

  const user = ref('')
  const password = ref('')

  const login = () => {
    loginStore.login(user.value, password.value)
  }

</script>

<template>
  <v-container fluid class="pa-0 bg-surface-variant" >
    <v-row no-gutters class="h-screen" >
      <v-col cols="12" sm="6" class="bg-white" >
        <v-sheet
        class="d-flex flex-direction-column align-center justify-center fill-height"
        >  
          <v-form fast-fail @submit.prevent="login" >
            <h3 class="text-center mb-3" >Login</h3>
            <v-text-field
              v-model="user"
              label="User"
              width="280px"
            >
            </v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              width="280px"
            >
            </v-text-field>

            <v-btn class="mt-2 bg-primary" type="submit" block >Login</v-btn>
          </v-form>
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="6" class="d-flex flex-direction-column align-center justify-center hidden-sm-and-down" >
        <nuxt-icon name="logo" filled class="logo" />
      </v-col>

    </v-row>

    <Snackbar />

  </v-container>
</template>

<style scoped>
.logo {
  font-size:155px
}
</style>
