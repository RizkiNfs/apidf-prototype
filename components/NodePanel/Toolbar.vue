<script setup lang="ts">
import { nanoid } from 'nanoid'
import type { Node } from '@/composables/editor'
import { Icon } from '@iconify/vue'

const props = defineProps<{ selectedNode?: Node }>()

const { initialStyle } = useFileEditor()


const addView = () => {

  const value: Node = {
    type: 'view',
    id: nanoid(),
    style: {
      ...initialStyle.common,
      ...initialStyle.view,
    },
    children: []
  }

  if(Array.isArray(props.selectedNode?.children)) {
    props.selectedNode.children?.push(value)
  }

  
}

const addText = () => {

  const value: Node = {
    type: 'text',
    id: nanoid(),
    style: {
      ...initialStyle.common,
      ...initialStyle.text,
    },
    children: 'Text'
  }

  if(Array.isArray(props.selectedNode?.children)) {
    props.selectedNode.children?.push(value)
  }

}

</script>

<template>
  <div class="flex gap-x-2">
    <button class="hover:bg-neutral-200" @click="addView">
      <Icon icon="radix-icons:box" />
    </button>
    <button class="hover:bg-neutral-200" @click="addText">
      <Icon icon="radix-icons:text" />
    </button>
  </div>
</template>