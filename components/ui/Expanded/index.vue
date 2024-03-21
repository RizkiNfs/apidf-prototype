<script setup lang="ts" generic="T">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
import { Icon } from '@iconify/vue'

interface Props {
  items: T[]
  valueKey: keyof T
}

const props = defineProps<Props>()

</script>

<template>
  <AccordionRoot
    class="rounded-md"
    type="single"
    :collapsible="true"
  >
    <template v-for="item in props.items" :key="(item[props.valueKey] as string)">
      <AccordionItem class="mt-px overflow-hidden" :value="(item[props.valueKey] as string)">
        <AccordionHeader class="flex">
          <div class="flex-1">
            <slot v-bind="item"></slot>
          </div>
          <AccordionTrigger class="px-2 hover:bg-neutral-100 rounded">
            <Icon icon="radix-icons:chevron-down" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="overflow-hidden">
          <slot
            name="content"
            v-bind="item"
          />
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>