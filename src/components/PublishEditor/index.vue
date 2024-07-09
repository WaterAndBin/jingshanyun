<template>
  <div class="index_box">
    <van-action-sheet
      v-model:show="showSheet"
      class="h-[78%]"
      title=""
      :close-on-click-overlay="true"
    >
      <div class="box-border w-full overflow-hidden p-2 pt-4">
        <!-- 标题 -->
        <div class="w-full text-[18px]">
          <div class="mb-2 flex items-center">
            <input v-model="mainContent.title" placeholder="请输入标题" class="flex-1" />
            <nuxt-icon name="time" filled class="mr-1 h-6 w-6" />
          </div>
          <div class="h-[1px] w-full bg-[rgba(219,219,219,1)]"></div>
        </div>
        <!-- 富文本编辑器 -->
        <div class="mt-3">
          <ClientOnly>
            <initToolbar
              style="border-bottom: 1px solid #ccc"
              :editor="editorRef"
              :default-config="toolbarConfig"
              mode="default"
            />
            <initEditor
              v-model="mainContent.content"
              style="height: 500px; overflow-y: hidden"
              :default-config="editorConfig"
              mode="default"
              @on-created="handleCreated"
            />
          </ClientOnly>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css'; // 引入 css

const showSheet = ref<boolean>(false);

const mainContent = reactive({
  title: '',
  content: ''
});

const show = (): void => {
  showSheet.value = true;
};
const toolbarConfig = {};
const editorConfig = { MENU_CONF: {} };

defineExpose({
  show
});

const initEditor = ref();
const initToolbar = ref();
if (process.client) {
  const { Editor, Toolbar } = await import('@wangeditor/editor-for-vue');
  initEditor.value = Editor;
  initToolbar.value = Toolbar;
}

const editorRef = ref();

onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor: any): void => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>
