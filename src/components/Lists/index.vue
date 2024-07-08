<template>
  <div class="index_box">
    <van-action-sheet
      v-model:show="showSheet"
      class="h-[48%]"
      title=""
      :close-on-click-overlay="true"
    >
      <div class="mt-4">
        <div
          v-for="(items, index) in listsData"
          :key="index"
          class="flex items-center my-1 h-[50px] px-4 text-[15px] hover:bg-gray-100"
          :class="index == listsData.length - 1 ? 'mt-8' : ''"
        >
          <i class="flex-[0.12]">
            <nuxt-icon :name="items.url" filled class="h-10 w-10" />
          </i>
          <span class="flex-[0.87]">{{ items.title }}</span>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script lang="ts" setup>
const showSheet = ref<boolean>(false);

interface IconsData {
  url: string;
  title: string;
}

const listsData: IconsData[] = [
  {
    url: 'lists/history',
    title: '历史'
  },
  {
    url: 'lists/list',
    title: '列表'
  },
  {
    url: 'lists/tags',
    title: '颜色标签'
  },
  {
    url: 'lists/bin',
    title: '回收站'
  },
  {
    url: 'lists/setting',
    title: '设置'
  }
];

const show = (): void => {
  showSheet.value = true;
};

defineExpose({
  show
});
</script>
