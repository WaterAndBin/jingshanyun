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
      <div class="h-[48px] flex-default bg-[rgba(0,122,255,1)]">
        <span
          class="relative h-full w-full overflow-hidden"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <div
            class="absoulte touch-none select-none bg-[rgba(227,240,255,1)] h-full w-[150%] flex items-center pl-3"
            :style="{ transform: `translateX(${boxPosition}px)` }"
          >
            <span
              class="text-white w-5 h-5 bg-[rgba(0,122,255,0.4)] rounded-full flex-default mr-2"
            >
              √
            </span>
            右划可以快捷完成事项
          </div>
        </span>
      </div>
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

const boxPosition = ref(300);
let isDragging = false;
let startX: number;
let startLeft: number;

/**
 * 拖拽开始
 * @param event
 */
const handleTouchStart = (event: any): void => {
  if (event.touches.length === 1) {
    isDragging = true;
    startX = event.touches[0].clientX;
    startLeft = boxPosition.value;
  }
};

/**
 * 拖拽移动
 * @param event
 */
const handleTouchMove = (event: any): void => {
  if (!isDragging || event.touches.length !== 1) return;

  const currentX = event.touches[0].clientX;
  const diffX = currentX - startX;
  const newLeft = startLeft + diffX;

  boxPosition.value = newLeft;
};

/**
 * 结束拖拽
 */
const handleTouchEnd = (): void => {
  isDragging = false;
};
</script>
