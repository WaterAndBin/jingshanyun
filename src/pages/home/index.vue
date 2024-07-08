<template>
  <div class="h-screen">
    <div v-if="userStore.token" class="h-full">
      <div class="h-full flex flex-col">
        <div class="flex-default flex-[0.25] flex-col">
          <span class="text-[26px]">今天</span>
          <span class="mt-3 text-[18px]">
            {{ timeStore.month }}月{{ timeStore.day }}日 {{ timeStore.weekDay }}
          </span>
          <div class="w-[85%]" @click="SearchDialogRef.show()">
            <van-search
              placeholder="快速搜索"
              input-align="left"
              :clearable="false"
              left-icon=""
              right-icon="search"
              class="w-full"
            />
          </div>
        </div>
        <div class="flex-[0.75]">
          <div v-for="(items, index) in taskList" :key="index">
            <TaskList :data="items"></TaskList>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex-default h-full flex-col text-[25px]">
      <span class="mb-3">请先登录</span>
      <button
        class="border-1 border-black rounded-4 border-solid bg-transparent p-4"
        @click="gotoLogin"
      >
        点击登录
      </button>
      <Login ref="loginRef"></Login>
    </div>
    <!-- 搜索弹框 -->
    <SearchDialog ref="SearchDialogRef"></SearchDialog>
  </div>
</template>

<script lang="ts" setup>
import type { TaskDataList } from '~/types/task';

/* 仓库 */
const userStore = useUserStore();
const timeStore = useTimeStore();

/* dom */
const loginRef = ref();
const SearchDialogRef = ref();

/* 事件列表 */
const taskList = ref<TaskDataList[]>([]);

const gotoLogin = (): void => {
  if (loginRef !== null) {
    loginRef.value.showLogin();
  }
};

onMounted(() => {
  timeStore.getTimeToday();
});
</script>
