<script setup lang="ts">

const { state } = useFileEditor()
const selectedNode = useSelectedNode()

const pageSizes = {
  A4: {
    width: 595,
    height: 842
  }
}

</script>

<template>
  <div>
    <div
      v-for="(page, index) of state.children"
      @click="selectedNode = page"
      :key="index"
      :style="{...((page?.style as any) || {}), width: `${pageSizes.A4.width}px`, height: `${pageSizes.A4.height}px`}"
      class="outline outline-1 outline-slate-300 relative mt-6 pdf-page"
    >
      <template
        v-for="node of page.children" 
        :key="node.id" 
      >
        <ui-node :node="node" :parent-node="page">  
        </ui-node>
      </template>
    </div>
  </div>
</template>