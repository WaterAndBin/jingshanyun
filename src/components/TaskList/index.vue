<template>
  <div>
    <div class="h-[56px] flex items-center px-2" @click="showDetail = !showDetail">
      <div class="flex flex-1 items-center">
        <div
          class="mr-3 h-[22px] w-[22px] border-1 border-[rgba(0,122,255,1)] rounded-[11px] border-solid bg-[rgba(0,122,255,0.08)]"
        ></div>
        <div>
          <sapn v-if="_props.keywords">
            <van-highlight :keywords="_props.keywords" :source-string="_props.data.keywords" />
          </sapn>
          <span v-else>
            <span v-html="_props.data.keywords"></span>
          </span>
        </div>
      </div>
      <div class="h-full w-full flex-default flex-[0.1]">
        <nuxt-icon name="taskList/task" filled class="h-7 w-7" />
      </div>
    </div>
    <div v-if="showDetail">
      <div class="h-[48px] flex-default bg-blue-100">模拟拖拽</div>
      <div class="h-[50px] flex items-center">
        <span class="flex-1">快捷编辑该事项</span>
        <span class="flex">
          <nuxt-icon name="taskList/task" filled class="mx-1 h-7 w-7" />
          <div class="h-[30px] h-[30px] flex-default rounded-full bg-[rgba(90,200,250,1)]">
            <nuxt-icon name="taskList/update" filled class="mx-1 h-5 w-5" />
          </div>
          <div class="h-[30px] h-[30px] flex-default rounded-full bg-[rgba(255,59,48,1)]">
            <nuxt-icon name="taskList/delete" filled class="mx-1 mr-0 h-5 w-5" />
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TaskDataList } from '~/types/task';

const showDetail = ref<boolean>(false);

const _props = defineProps<{
  data: TaskDataList;
  keywords?: string | undefined;
}>();
</script>
