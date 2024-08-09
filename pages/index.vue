<script setup lang="ts">

const storeData = useStoreData()

await useAsyncData('items', () => storeData.fetchData('users'))

const { data } = storeToRefs(storeData) 

</script>

<template>
    <v-container class="ma-auto" >
        <p class="text-center" >Users</p>
        <ListItems v-for="item in data" :users="item" :key="item.id" />
    </v-container>
</template>