<script setup lang="ts">
import type { ListNode } from '@/composables/editor'
import { get } from 'lodash'
import { safeJSONparse } from '@/utils/common'

const props = defineProps<{ 
  node: ListNode
  parentNode?: Node
  data?: unknown
}>()

const { state } = useFileEditor()

const data = computed(() => {
  const exampleData = safeJSONparse(state.value.exampleData);

  const dataSource =  get({...exampleData}, props.node.dataSource ? props.node.dataSource : '')

  if(Array.isArray(dataSource)) {
    return dataSource
  }
  return [dataSource]
})

</script>

<template>
  <div>
    <div
      :style="(props.node.style as any)" 
      class="hover:outline-2 hover:outline cursor-pointer"
      v-for="(item, index) in data"
      :key="item?.id+index"
    >
        <template v-for="(node, index) in props.node.children" :key="node.id+index">
          <ui-node
            :node="node"
            :data="item"
          />
        </template>
    </div>
  </div>
</template>