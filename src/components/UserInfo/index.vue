<template>
  <div class="index_box">
    <van-action-sheet
      v-model:show="showSheet"
      class="h-[100%]"
      title=""
      :close-on-click-overlay="true"
    >
      <div class="mt-12 w-full flex flex-col items-center">
        <div class="relative h-[100px] w-[100px] flex-default rounded-full">
          <nuxt-img :src="userStore.userHeader" class="relative h-[74px] rounded-full" />
          <div class="line" style="--offset: 0%; --opacity: 1"></div>
          <div class="line" style="--offset: 15%; --opacity: 0.4"></div>
          <div class="line" style="--offset: 30%; --opacity: 0.2"></div>
          <div class="line" style="--offset: 45%; --opacity: 0.1"></div>
        </div>
        <div class="mb-4 mt-6 text-[22px]">
          <span>卓君</span>
        </div>
        <div class="w-full">
          <div
            v-for="(items, index) in listsData"
            :key="index"
            class="h-[50px] w-full flex-default text-[15px] hover:bg-gray-100"
          >
            {{ items }}
          </div>
        </div>
        <div
          class="relative mt-6 h-[64px] w-full flex cursor-pointer items-center overflow-hidden border-1 border-gray-200 rounded-[8px] border-solid text-[rgba(0,118,255,1)] shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)]"
        >
          <span class="ml-6">VIP</span>
          <span class="ml-6">订阅高级版本</span>
          <div class="vip_line"></div>
          <div class="vip_line" style="--left: 16px; --size: 148px; --opacity: 0.6"></div>
          <div class="vip_line" style="--left: 0; --size: 180px; --opacity: 0.4"></div>
          <div class="vip_line" style="--left: -18px; --size: 216px; --opacity: 0.1"></div>
          <div class="w-[50%] flex justify-end">
            <nuxt-icon name="right" filled class="h-7 w-7" />
          </div>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script lang="ts" setup>
/* 仓库 */
const userStore = useUserStore();

const showSheet = ref<boolean>(false);

const listsData: string[] = ['服务与协议', '用户隐私', '清理缓存', '登出账号'];

const show = (): void => {
  showSheet.value = true;
};

defineExpose({
  show
});
</script>

<style lang="scss" scoped>
.line {
  position: absolute;
  width: calc(76% + var(--offset, 0));
  height: calc(76% + var(--offset, 0));
  border: 1px solid rgba(97, 97, 97, var(--opacity, 1));
  border-radius: 50%;
}

.vip_line {
  position: absolute;
  width: var(--size, 110px);
  height: var(--size, 110px);
  left: var(--left, 35px);
  border: 1px solid rgba(0, 122, 255, var(--opacity, 0.8));
  border-radius: 50%;
}
</style>
