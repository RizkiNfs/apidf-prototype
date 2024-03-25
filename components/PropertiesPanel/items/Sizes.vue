<script setup lang="ts">
import type { Style } from '@react-pdf/types'

const { selectedNode } = useFileEditor()


</script>

<template>
  <ul class="flex flex-col gap-y-1">
    <li
      class="flex items-center"
    >
      <span class="capitalize text-zinc-500 flex-1">
        Width
      </span>
      <ui-input-unit
        class="w-12"
        placeholder="0"
        v-model="selectedNode.style[`width`]"
      />
    </li>
    <div
      class="flex items-center"
    >
      <span class="capitalize text-zinc-500 flex-1">
        Height
      </span>
      <ui-input-unit
        class="w-12"
        placeholder="0"
        v-model="selectedNode.style[`height`]"
      />
    </div>
  </ul>
</template>
