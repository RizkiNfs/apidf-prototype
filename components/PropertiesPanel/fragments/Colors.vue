<script setup lang="ts">

const { selectedNode } = useFileEditor()

const properties = [ 
  'color', 'backgroundColor'
] as const

</script>

<template>
  <div>
    <p class="font-semibold mb-1">
      Colors
    </p>

    <div>
      <label
        class="flex items-center"
        v-for="item of properties"
        :key="item"
      >
        <span class="capitalize text-zinc-500 flex-1">
          {{ item }}
        </span>
        <span>
          <input
            class="w-12"
            type="color"
            v-model="selectedNode.style[item]"
          >
        </span>
      </label>
    </div>
  </div>
</template>