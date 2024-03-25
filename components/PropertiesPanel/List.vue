<script setup lang="ts">

const { selectedNode } = useFileEditor()

</script>

<template>
  <properties-panel-items-sizes/>
  <properties-panel-items-margin/>
  <properties-panel-items-border/>
  <properties-panel-items-border-radius/>
  <label class="block">
    <span class="block mb-1">Data Source</span>
    <textarea
      class="w-full border rounded-md p-2"
      v-model="(selectedNode as ListNode).dataSource"
    />
  </label>
  <properties-panel-items-colors/>
  <properties-panel-items-flexbox/>
</template>