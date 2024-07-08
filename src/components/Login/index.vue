<template>
  <div class="index_box">
    <van-action-sheet v-model:show="show" class="h-[90%]" title="" :close-on-click-overlay="true">
      <div class="h-full flex flex-col">
        <div class="flex-default flex-1 flex-col">
          <div
            class="h-[82px] w-[82px] border-[0.5px] border-[rgb(0,0,0,0.09)] rounded-[16px] border-solid shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)] flex-default mb-5"
          >
            TODO
          </div>
          <div class="text-[18px] leading-[30.41px] mt-5 text-center">
            <div>登录之后，</div>
            <div>即刻体验TODO</div>
          </div>
        </div>
        <div class="flex flex-[0.6] flex-col items-center justify-around">
          <div class="button_style">
            <nuxt-icon name="wechat" filled class="absolute left-[30px] h-6 w-6" />
            <span class="flex-default flex-1 text-[15px]" @click="gotoLogin">使用微信登录</span>
          </div>
          <div class="button_style">
            <nuxt-icon name="zhifubao" filled class="absolute left-[30px] h-6 w-6" />
            <span class="flex-default flex-1 text-[15px]" @click="gotoLogin">使用支付宝登录</span>
          </div>
          <div class="button_style">
            <nuxt-icon name="apple" filled class="absolute left-[30px] h-6 w-6" />
            <span class="flex-default flex-1 text-[15px]" @click="gotoLogin">使用AppleID登录</span>
          </div>
          <div class="text-center text-[12px] text-[rgba(0,0,0,0.24)] underline">
            <span class="cursor-pointer">用户隐私与用户协议</span>
          </div>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script lang="ts" setup>
const show = ref<boolean>(false);
const userStore = useUserStore();

const gotoLogin = (): void => {
  show.value = false;
  showNotify({ type: 'success', message: '登录成功' });
  userStore.setToken('cookie.....');
};

const showLogin = (): void => {
  show.value = true;
};

defineExpose({ showLogin });
</script>

<style lang="scss" scoped>
.index_box {
  &:deep(.van-action-sheet) {
    max-height: 100% !important;
  }
}

.button_style {
  @apply flex-default relative h-[48px] w-[96%] rounded-[24px] bg-[rgba(245,245,245,1)] cursor-pointer;
}
</style>
