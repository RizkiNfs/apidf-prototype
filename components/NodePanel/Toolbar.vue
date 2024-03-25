<script setup lang="ts">
import { nanoid } from 'nanoid'
import type { Node, ListNode } from '@/composables/editor'
import { Icon } from '@iconify/vue'

const props = defineProps<{ selectedNode?: Node }>()

const { initialStyle } = useFileEditor()


const addView = () => {

  const value: ViewNode = {
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

  const value: TextNode = {
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


const addList = () => {

  const value: ListNode = {
    type: 'list',
    id: nanoid(),
    style: {
      ...initialStyle.common,
    },
    dataSource: '',
    children: []
  }

  if(Array.isArray((props.selectedNode)?.children)) {
    props.selectedNode.children?.push(value)
  }

}


const addImage = () => {

  const value: ImageNode = {
    type: 'image',
    id: nanoid(),
    style: {
      ...initialStyle.common,
    },
    src: '',
  }

  if(Array.isArray((props.selectedNode)?.children)) {
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
    <button class="hover:bg-neutral-200" @click="addImage">
      <Icon icon="radix-icons:image" />
    </button>
    <button class="hover:bg-neutral-200" @click="addList">
      <Icon icon="radix-icons:rows" />
    </button>
  </div>
</template>