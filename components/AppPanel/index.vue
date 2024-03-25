<script setup lang="ts">

const { state } = useFileEditor()

</script>

<template>
  <label class="block">
    <span class="block mb-1">Example Data</span>
    <textarea
      class="w-full border rounded-md p-2"
      v-model="state.exampleData"
    />
  </label>
</template>