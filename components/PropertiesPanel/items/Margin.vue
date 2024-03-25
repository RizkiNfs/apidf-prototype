<script setup lang="ts">
import type { Style } from '@react-pdf/types'

const { selectedNode } = useFileEditor()

type styleKey = keyof Style

const items: Array<{key: styleKey, properties: styleKey[]}> = [
  {
    key: 'margin',
    properties: [
      'marginTop',
      'marginBottom',
      'marginLeft',
      'marginRight',
    ]
  }, 
  {
    key: 'padding',
    properties: [
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
    ]
  }
]


</script>

<template>
  <div v-if="selectedNode">
    <ui-expanded :items="items" valueKey="key">
      <template #default="slotProps">
        <label class="flex items-center flex-1">
          <span class="text-zinc-500 w-36 capitalize">
            {{ slotProps.key }}
          </span>
          <ui-input-unit
            class="w-12"
            placeholder="0"
            v-model="selectedNode.style[slotProps.key]"
          />
        </label>
      </template>
      <template #content="slotProps">
        <label
          class="flex items-center ml-2"
          v-for="(style, idx) of slotProps.properties"
          :key="idx"
        >
          <span class="text-zinc-500 flex-1">
            {{ style.replace(/[A-Z]/g, letter => ` ${letter}`).split(' ').slice(1).join(' ') }}
          </span>
          <ui-input-unit
            class="w-12"
            placeholder="-"
            v-model="selectedNode.style[style]"
          />
        </label>
      </template>
    </ui-expanded>
  </div>
</template>