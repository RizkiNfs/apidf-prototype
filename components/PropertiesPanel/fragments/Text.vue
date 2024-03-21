<script setup lang="ts">
import type { Style } from '@react-pdf/types'

const { selectedNode } = useFileEditor()

type TextProperty = Record<keyof Style, {
  input: any,
  props?: Record<string, any>
}>

const textProperties: Partial<TextProperty> = {
  fontSize: {
    input: resolveComponent('ui-input-unit'),
    props: { unit: 'px' }
  },
  lineHeight: {
    input: resolveComponent('ui-input-unit')
  },
  letterSpacing: {
    input: resolveComponent('ui-input-unit'), 
    props: { unit: 'px', placeholder: '0' }
  },
  textAlign: {
    input: resolveComponent('ui-select'),
    props: {
      placeholder: 'left',
      options: ['left', 'center','right']
    }
  },
  textDecoration: {
    input: resolveComponent('ui-select'),
    props: {
      placeholder: 'none',
      options: ['none', 'line-through', 'underline', 'line-through underline', 'underline line-through']
    }
  },
} 

</script>

<template>
  <div v-if="selectedNode?.type === 'text'">
    <p class="font-semibold mb-1">
      Text
    </p>
    <textarea
      class="w-full border rounded-md p-2"
      v-model="selectedNode.children"
    />
    <ul class="flex flex-col gap-y-1">
      <li
        v-for="([key, value], index) of Object.entries(textProperties)"
        :key="index"
      >
        <label class="flex items-center">
          <span class="capitalize text-zinc-500 flex-1">
            {{ key.replace(/[A-Z]/g, letter => ` ${letter.toLowerCase()}`) }}
          </span>
          <component
            class="w-36"
            :is="value.input"
            v-model="selectedNode.style[key as keyof Style]"
            v-bind="value.props"
          />
        </label>
      </li>
    </ul>
  </div>
</template>