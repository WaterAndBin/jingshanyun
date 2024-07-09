import type { TaskDataList } from '~/types/task';

const useTaskStore = defineStore('task', {
  persist: false,
  state: () => {
    return {
      taskLists: [
        {
          keywords: '你好啊',
          id: 1
        },
        {
          keywords: '<p style="color:red">这个一种颜色的字体</p>',
          id: 2
        },
        {
          keywords: 'Hallo , world',
          id: 3
        }
      ] as TaskDataList[]
    };
  },
  actions: {}
});

export default useTaskStore;
