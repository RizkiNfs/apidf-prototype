<script setup lang="ts">
import type { Style } from '@react-pdf/types'

const { selectedNode } = useFileEditor()

const properties = [
  'Top', 'Bottom', 'Left', 'Right'
] as const

const items: Array<{key: keyof Style, properties: typeof properties}> = [
  {
    key: 'border',
    properties
  },
]

</script>

<template>
  <div>
    <ui-expanded :items="items" valueKey="key">
      <template #default>
        <div class="flex items-center flex-1">
          <span class="text-zinc-500 w-36 capitalize">
            Border
          </span>
          <ui-input-unit
            class="w-12"
            placeholder="0"
            v-model="selectedNode.style['borderWidth']"
          />
          <input
            class="w-12 ml-1"
            type="color"
            v-model="selectedNode.style[`borderColor`]"
          >
        </div>
      </template>
      <template #content="slotProps">
        <div
          class="flex items-center ml-2"
          v-for="item of slotProps.properties"
          :key="item"
        >
          <span class="capitalize text-zinc-500 flex-1">
            {{ item }}
          </span>
          <ui-input-unit
            class="w-12"
            placeholder="0"
            v-model="selectedNode.style[`border${item}Width`]"
          />
          <input
            class="w-12 ml-1"
            type="color"
            v-model="selectedNode.style[`border${item}Color`]"
          >
        </div>
      </template>
    </ui-expanded>
  </div>
</template>
