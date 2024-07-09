<template>
  <van-dialog
    v-model:show="showDialog"
    title=""
    class="p-2"
    :show-confirm-button="false"
    :close-on-click-overlay="true"
  >
    <div class="h-60 flex flex-col overflow-auto">
      <div class="min-h-12">
        <van-search
          v-model="keywords"
          placeholder="快速搜索"
          input-align="left"
          :clearable="false"
          left-icon=""
          right-icon="search"
          class="fixed w-full"
          @search="onSearch"
          @keyup.enter="onSearch"
        />
      </div>
      <div class="h-full flex-1">
        <div v-if="!isSearch" class="h-full flex-default flex-col">
          <span class="mb-1 text-[15px] text-[rgba(0,0,0,0.45)]">任务、标签、内容</span>
          <span class="mt-1 text-[15px] text-[rgba(0,0,0,0.45)]">在此都可搜索。</span>
        </div>
        <div v-else-if="searchData.length == 0" class="h-full flex-default">
          <span class="text-[24px] text-[rgba(0,0,0,0.2)]">适合安静的一天。</span>
        </div>
        <div v-else>
          <div v-for="(items, index) in searchData" :key="index">
            <TaskList :data="items" :keywords="keywords"></TaskList>
          </div>
        </div>
      </div>
    </div>
  </van-dialog>
</template>

<script lang="ts" setup>
import type { TaskDataList } from '~/types/task';

/* 仓库 */
const taskStore = useTaskStore();

const showDialog = ref<boolean>(false);
/* 搜索结果 */
const searchData = ref<TaskDataList[]>([]);
/* 搜索关键词 */
const keywords = ref<string>('');
/* 判断是否搜索了 */
const isSearch = ref<boolean>(true);

const onSearch = (): void => {
  searchData.value = taskStore.taskLists;
  isSearch.value = true;
};

const show = (): void => {
  showDialog.value = true;
  isSearch.value = false;
};

defineExpose({
  show
});
</script>
