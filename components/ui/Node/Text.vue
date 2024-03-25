<script setup lang="ts">
import mustache from 'mustache'

const props = defineProps<{ 
  node: TextNode
  parentNode?: Node
  data?: unknown 
}>()

const { selectedNode, state } = useFileEditor()

const text = computed(() => {
  try {
    return mustache.render(props.node.children || '', {...(props.data || {}), ...safeJSONparse(state.value.exampleData)})
  } catch {
    return props.node.children
  }
})


</script>

<template>
  <p
    @click.stop="selectedNode = props.node"
    :style="(props.node.style as any)" 
    class="hover:outline-2 hover:outline cursor-pointer oke"
  >
    {{ text }}
  </p>
</template>