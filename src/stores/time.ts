/* 用户的仓库 */
const useTimeStore = defineStore('time', {
  persist: true,
  state: () => {
    return {
      month: -1,
      day: -1,
      weekDay: ''
    };
  },
  actions: {
    /* 获取当天的时间 */
    getTimeToday() {
      // 创建一个表示当前日期和时间的Date对象
      const today = new Date();
      // 获取月份，注意月份是从0开始的，所以要加1
      this.month = today.getMonth() + 1;
      // 获取日期
      this.day = today.getDate();
      const daysOfWeek = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
      this.weekDay = daysOfWeek[today.getDay()];
    }
  }
});

export default useTimeStore;
