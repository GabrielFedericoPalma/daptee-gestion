<script setup lang="ts">
  const storeData = useStoreData();

  const props = defineProps<{
    id: string;
  }>();

  let dialog = ref(false);

  const item: any = storeData.data.filter((el: any) => el.id === props.id);

  if (item) {
    dialog.value = true;
  } else {
    dialog.value = false;
  }
</script>

<template>
  <v-dialog v-model="dialog" width="250">
    <v-card :title="item[0].name" :text="item[0].country">
      <v-img height="200px" :src="item[0].image" cover></v-img>
      <template v-slot:actions>
        <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
