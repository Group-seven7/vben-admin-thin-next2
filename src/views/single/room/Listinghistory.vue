<template>
  <PageWrapper>
    <div>
      <a-tabs v-model:activeKey="activeKey" type="card">
        <a-tab-pane key="1" tab="跟进记录">
          <div>
            <a-timeline>
              <a-timeline-item>
                <div>刘清晨</div>
                <div class="text-gray-500 text-sm">好的好的</div>
              </a-timeline-item>
            </a-timeline>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="租金修改记录">
          <div>
            <a-timeline>
              <a-timeline-item>
                <div class="flex">
                  <div>程贝</div>
                  <div class="ml-2">
                    <div class="text-gray-500 text-sm">
                      将房屋出租价由[1000元/月]修改为[2000元/每月]
                    </div>
                    <div> 编辑房型 </div>
                  </div>
                </div>
              </a-timeline-item>
              <a-timeline-item>
                <div class="flex">
                  <div>程贝</div>
                  <div class="ml-2">
                    <div class="text-gray-500 text-sm">
                      将房屋出租价由[0元/月]修改为[1000元/每月]
                    </div>
                    <div class="text-gray-500 text-sm"> 设置房屋租金低价：[3000元/月] </div>
                    <div class="text-gray-500 text-sm"> 配置房型-租金配置 </div>
                  </div>
                </div>
              </a-timeline-item>
            </a-timeline>
          </div>
        </a-tab-pane>
        <a-tab-pane key="3" tab="锁房记录">
          <a-timeline>
            <a-timeline-item>
              <div>刘清晨</div>
              <div class="text-gray-500 text-sm">将房间设置为[锁房]</div>
              <div class="text-gray-500 text-sm">锁房期限：永久锁房</div>
              <div class="text-gray-500 text-sm">锁房备注：</div>
            </a-timeline-item>
          </a-timeline>
        </a-tab-pane>
        <a-tab-pane key="4" tab="维护人修改记录">
          <div>
            <a-timeline>
              <a-timeline-item>
                <div class="flex">
                  <div>程贝</div>
                  <div class="ml-2">
                    <span class="text-gray-500 text-sm"> 将房源维护员由 </span>
                    <span>[彭无穷-12345689]</span>
                    <span class="text-gray-500 text-sm"> 修改为 </span>
                    <span>[刘清晨-12345689]</span>
                  </div>
                </div>
              </a-timeline-item>
              <a-timeline-item>
                <div class="flex">
                  <div>彭无穷</div>
                  <div class="ml-2">
                    <span class="text-gray-500 text-sm"> 将房源维护员由 </span>
                    <span>[程贝-12345689]</span>
                    <span class="text-gray-500 text-sm"> 修改为 </span>
                    <span>[彭无穷-12345689]</span>
                  </div>
                </div>
              </a-timeline-item>
            </a-timeline>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { ref } from 'vue';
  const activeKey = ref('1');
</script>
<style scoped></style>
