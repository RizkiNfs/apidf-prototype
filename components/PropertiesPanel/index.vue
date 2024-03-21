<script setup lang="ts">
import Sizes from './fragments/Sizes.vue'
import BorderRadius from './fragments/BorderRadius.vue'
import Border from './fragments/Border.vue'
import Text from './fragments/Text.vue'
import Flexbox from './fragments/Flexbox.vue'
import Colors from './fragments/Colors.vue'
import Margin from './fragments/Margin.vue'

const { selectedNode } = useFileEditor()

</script>

<template>
  <div class="overflow-auto" v-if="selectedNode">
    <Sizes />
    <Margin v-if="selectedNode?.type !== 'page'" />
    <Border v-if="selectedNode?.type !== 'page'" />
    <BorderRadius v-if="selectedNode?.type === 'view'" />
    <Colors class="mt-2" />
    <Flexbox v-if="selectedNode?.type === 'view' || selectedNode?.type === 'page'" class="mt-2" />
    <Text class="mt-2" />
  </div>
</template>