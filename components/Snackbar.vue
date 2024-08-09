<script setup lang="ts">

const loginStore = useLoginStore()  

const { snackbarColor, snackbarText, snackbarShow } = storeToRefs(loginStore)

</script>

<template>
    <v-snackbar
      :timeout="2000"
      :color="snackbarColor"
      rounded="pill"
      v-model="snackbarShow"
    >
      <template v-slot:activator="{ props }">
      </template>
      {{ snackbarText }}
    </v-snackbar>
</template>