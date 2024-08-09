<script setup lang="ts">

const dataStore = useStoreData()  

</script>

<template>
    <aside 
    class="position-fixed w-100 h-100 d-flex justify-center items-center" 
    v-if="dataStore.loading"
    >
      <v-progress-circular
      color="purple"
      indeterminate
      ></v-progress-circular>
  </aside>
</template>