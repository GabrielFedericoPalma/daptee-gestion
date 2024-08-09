<script setup lang="ts" >
    import type { INav } from '~/models/INav'

    const props = defineProps<{
        item: INav
    }>()

</script>

<template>
    <v-list>
      <v-list-item>
        <NuxtLink :to="item.link" class="text-primary" >{{ item.title }}</NuxtLink>
      </v-list-item>
    </v-list>
</template>
