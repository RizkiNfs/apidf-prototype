<script setup lang="ts">
import type { Style } from '@react-pdf/types'

const { selectedNode } = useFileEditor()

const properties = [
  'TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'
] as const

const items: Array<{key: keyof Style, properties: typeof properties}> = [
  {
    key: 'borderRadius',
    properties
  },
]

</script>

<template>
  <div>
    <ui-expanded :items="items" valueKey="key">
      <template #default>
        <label class="flex items-center flex-1">
          <span class="text-zinc-500 w-36 capitalize">
            Border Radius
          </span>
          <ui-input-unit
            class="w-12"
            placeholder="0"
            v-model="selectedNode.style['borderRadius']"
          />
        </label>
      </template>
      <template #content="slotProps">
        <label
          class="flex items-center ml-2"
          v-for="item of slotProps.properties"
          :key="item"
        >
          <span class="capitalize text-zinc-500 flex-1">
            {{ item }}
          </span>
          <span class="w-36">
            <ui-input-unit
              class="w-12"
              placeholder="0"
              v-model="selectedNode.style[`border${item}Radius`]"
            />
          </span>
        </label>
      </template>
    </ui-expanded>
  </div>
</template>