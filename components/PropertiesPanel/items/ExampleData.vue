<script setup lang="ts">

const { selectedNode } = useFileEditor()

</script>

<template>
  <label class="block">
    <span class="block mb-1">Example Data</span>
    <textarea
      class="w-full border rounded-md p-2"
      v-model="(selectedNode as ListNode).dataSource"
    />
  </label>
</template>