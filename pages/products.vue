<script setup lang="ts">

    const storeData = useStoreData()

    await useAsyncData('items', () => storeData.fetchData('products'))

    const { data } = storeToRefs(storeData)

</script>

<template>
    <v-container class="ma-auto" >
        <p class="text-center" >Products</p>
        <ListItems v-for="item in data" :products="item" :key="item.id" />
    </v-container>
</template>