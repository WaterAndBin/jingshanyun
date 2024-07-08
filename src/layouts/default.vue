<template>
  <div class="items-center justify-center">
    <NuxtPage></NuxtPage>
    <!-- 标签 -->
    <van-tabbar active-color="#7d7e80">
      <!-- 列表 -->
      <van-tabbar-item>
        <client-only>
          <nuxt-icon name="list" class="h-6 w-6" @click="ListsRef.show()" />
        </client-only>
      </van-tabbar-item>
      <van-tabbar-item></van-tabbar-item>
      <!-- 发布 -->
      <van-tabbar-item>
        <client-only>
          <nuxt-icon filled name="add" class="h-6 w-6" />
        </client-only>
      </van-tabbar-item>
      <van-tabbar-item></van-tabbar-item>
      <!-- 用户 -->
      <van-tabbar-item>
        <nuxt-img
          :src="userStore.userHeader"
          class="h-10 rounded-full"
          @click="UserInfoRef.show()"
        />
      </van-tabbar-item>
    </van-tabbar>

    <!-- 列表 -->
    <Lists ref="ListsRef"></Lists>
    <!-- 用户信息 -->
    <UserInfo ref="UserInfoRef"></UserInfo>
    <!-- 富文本编辑器 -->
    <!-- <Editor></Editor> -->
  </div>
</template>

<script lang="ts" setup>
/* 仓库 */
const userStore = useUserStore();

/* dom */
const ListsRef = ref();
const UserInfoRef = ref();
</script>
