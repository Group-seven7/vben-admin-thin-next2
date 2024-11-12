<template>
  <div class="dashboard">
    <div 
      class="card" 
      v-for="(item, index) in cards" 
      :key="index" 
      @click="handleButtonClick(index)" 
    >
      <img :src="item.image" :alt="item.title" class="card-image" />
      <div class="card-header">
        <h3 class="card-title">{{ item.title }}</h3>
        <button 
          @click.stop="handleButtonClick(index)" 
          :style="{ backgroundColor: item.buttonColor, color: item.fontColor }"
        >
          {{ item.buttonText }}
        </button>
      </div>
      <p class="card-description">{{ item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'; // 引入 useRouter
import img1 from '../img/1.png';
import img2 from '../img/5.png'; 
import img3 from '../img/2.png';
import img4 from '../img/3.png';
import img5 from '../img/5.png';

export default defineComponent({
  name: 'Dashboard',
  data() {
    return {
      cards: [
        { image: img1, title: "财务台账", description: "财务收款相关报表信息", 
          buttonText: "财务", buttonColor:"#FFF3E4",fontColor: "#FFAB55" },
        { image: img2, title: "租贷台账", description: "展示资产项目的周期租赁详情", 
          buttonText: "租贷", buttonColor: "#41EA1738", fontColor: "#41EA17" },
        { image: img3, title: "欠租欠款", description: "展示资产租赁财务的欠租欠款明细", 
          buttonText: "财务", buttonColor: "#FFF3E4", fontColor: "#FFAB55" },
        { image: img4, title: "招商数据报表", description: "查看招商明细数据", 
          buttonText: "客户", buttonColor: "#E6F3FE", fontColor: "#1780EA" },
        { image: img5, title: "招商客户画像", description: "招商客户用户画像分析", 
          buttonText: "客户", buttonColor: "#E6F3FE", fontColor: "#1780EA" },
      ],
    };
  },
  setup() {
    const router = useRouter(); // 使用 Router
    return { router };
  },
  methods: {
    handleButtonClick(index: number) {
      switch (index) {
        case 0:
          this.router.push({ name: 'Financial ledgers' }); // 使用编程式导航
          break;
        case 1:
          this.router.push({ name: 'Lease ledger' });
          break;
        case 2:
          this.router.push({ name: 'Investment data' });
          break;
        case 3:
          this.router.push({ name: 'Rent arrears' });
          break;
        case 4:
          this.router.push({ name: 'Attract customers' });
          break;
        default:
          break;
      }
    },
  },
});
</script>
<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background: #e0e0e0;
  border: 1px solid #b0d9ff;
  border-radius: 8px;
  padding: 20px;
  text-align: left; /* 将整个卡片内的文本左对齐 */
  cursor: pointer; /* 鼠标悬停时显示手型光标 */
  transition: transform 0.3s, box-shadow 0.3s; /* 增加过渡效果 */
}

.card:hover {
  transform: scale(1.05); /* 鼠标悬停时放大效果 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* 添加阴影效果，营造立体感 */
}
.card-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px; /* 图片与标题之间的间距 */
}

/* 更新了标题和按钮的容器 */
.card-header {
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中对齐 */
}

.card-title {
  font-size: 16px; /* 设置标题字体大小 */
  color: #333;      /* 设置标题字体颜色 */
  font-weight: bold; /* 加粗标题字体 */
  margin-right: 20px; /* 增加 20px 的右边距 */
}

.card-description {
  font-size: 12px; /* 设置描述字体大小 */
  color: #666;     /* 设置描述字体颜色 */
  margin-bottom: 12px; /* 设置描述与按钮之间的间距 */
}

button {
  padding: 4px 6px; /* 调整按钮内边距以增加按钮大小 */
  border: none; /* 隐藏按钮的默认边框 */
  border-radius: 0px; /* 设置按钮圆角 */
  cursor: pointer; /* 鼠标悬停时显示手型光标 */
  font-weight: bold; /* 加粗字体 */
  font-size: 8px; /* 调整字体大小 */
  display: inline-block; /* 在按钮上应用块状模型特性以便调整 */
  transition: background-color 0.3s; /* 添加过渡效果 */
}

button:hover {
  filter: brightness(0.9); /* 鼠标悬停时按钮变暗 */
}

@media (max-width: 600px) {
  .dashboard {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .dashboard {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
