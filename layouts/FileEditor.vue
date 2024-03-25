<script setup>

const { state, selectedNode } = useFileEditor()

const route = useRoute()

const handleDownload = () => {
  $fetch(`/api/create/${route.params.id}`, {
    method: 'POST',
    body: {
      schema: state.value
    }
  }).then((res) => {
    download(res, state.value.id)
  })
}

</script>

<template>
  <div class="">
    <header class="h-12 border-b p-2 fixed top-0 w-full bg-white z-10 flex items-center justify-between">
      <h1>apidf</h1>
      <div>
        <ui-button @click="handleDownload">
          Download
        </ui-button>
      </div>
    </header>
    <div class="flex h-screen">
      <aside 
        class="w-60 p-2 fixed left-0 top-12 border-r overflow-auto"
        :style="{height: 'calc(100vh - 48px)'}"
      >
        <node-panel :nodes="state.children" />
      </aside>
      <main class="flex-1 p-4 flex justify-center py-12" @click.stop="selectedNode=null">
        <slot />
      </main>
      <aside 
        class="w-80 p-2 fixed right-0 top-12 border-l overflow-auto"
        :style="{height: 'calc(100vh - 48px)'}"
      >
        <properties-panel v-if="selectedNode" />
        <app-panel v-else />
      </aside>
    </div>
  </div>
</template>