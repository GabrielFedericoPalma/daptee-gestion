<script setup lang="ts">

    const storeData = useStoreData()

    const props = defineProps<{
        id: string
    }>()

    const showOptions = ref(false)
    const showDialog = ref(false)

</script>

<template>
    <div class="position-relative" >
        <v-btn icon="mdi-dots-vertical" variant="text" @click="showOptions = !showOptions" ></v-btn>
        <aside v-if="showOptions" class="position-absolute bg-surface-variant py-1 px-2 rounded" 
        style="top: 0; left: 33px" >
            <p class="cursor-pointer" @click="showDialog = !showDialog" >Ver</p>
            <p class="cursor-pointer" @click="storeData.deleteItem(id)" >Eliminar</p>
        </aside>
    </div>

    <Dialog :id="id" v-if="showDialog" />

</template>