<script setup lang="ts">

const storeData = useStoreData()

const search = ref('')

const route = useRoute()

watch( search, async () => {
    const type = route.path === '/' ? 'users' : 'products'
    await useAsyncData('items', () => storeData.filterData(type, search.value))
})

</script>

<template>
    <div>
        <v-text-field
            v-model="search"
            density="confortable"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            flat
            hide-details
            single-line
            width="10em"
            class="mx-3"
        ></v-text-field>
    </div>
    
</template>

<style lang="scss" scoped>

</style>