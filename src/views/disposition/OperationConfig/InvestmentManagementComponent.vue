<template>
  <PageWrapper>
    <!-- 对话框 -->
    <Modal
      v-model:visible="isVisible"
      title="提示"
      @ok="handleOk"
      @cancel="handleCancel"
      ok-text="保存"
      cancel-text="取消"
    >
      <div class="p-4">
        <p class="text-lg font-semibold mb-2 h-30">
          <span class="text-orange-500">⚠️</span> 当前设置将应用于「{{ selectedStoreName }}」门店
        </p>

        <!-- 复选框 -->
        <a-checkbox v-model:checked="applyToOthers">批量应用到其他门店</a-checkbox>

        <!-- 选择框，当复选框选中时显示 -->
        <div v-show="applyToOthers" class="mt-2">
          <a-select
            v-model:value="selectedShop"
            placeholder="请选择"
            style="width: 100%"
            mode="multiple"
            :options="shopOptions"
          />
          <!-- 全选和清除按钮 -->
          <div class="mt-2 flex justify-end">
            <button class="bg-blue-500 text-white px-2 py-1 rounded-md mr-2" @click="selectAll">
              全选
            </button>
            <button class="bg-gray-300 text-black px-2 py-1 rounded-md" @click="clearSelection">
              清除
            </button>
          </div>
        </div>
      </div>
    </Modal>
    <!-- 出厂设置完成提示 -->
    <Alert
      v-if="isAlertVisible"
      type="success"
      message="恢复默认配置成功！"
      class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
    />
    <header class="flex items-center px-4 py-2 border-b">
      <!-- 左侧选择框 -->
      <div class="flex justify-start mr-4">
        <Select
          ref="select"
          v-model:value="value1"
          style="width: 200px"
          @focus="focus"
          @change="handleChange"
        >
          <a-select-option value="E+SPACE">门店：E+SPACE</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
        </Select>
      </div>

      <!-- 居中的选项卡 -->
      <div class="flex-grow text-center">
        <Tabs type="card" v-model:activeKey="activeKey">
          <a-tab-pane key="1" tab="决策配置" />
          <a-tab-pane key="2" tab="默认字段配置" />
        </Tabs>
      </div>
    </header>

    <!-- 内容区域，根据activeKey动态显示内容 -->
    <div class="p-4">
      <div v-if="activeKey === '1'" class="border p-4 rounded-md">
        <!-- 决策配置内容第一个 -->
        <div class="mb-5 border-b-2 border-gray-300">
          <h3 class="text-lg font-semibold mb-2">私客不跟进自动转入公客池</h3>
          <p class="text-sm text-gray-600 mb-4 bg-gray-300">
            开启后私客在天内不跟进，自动转入公客池；自己录入的私客不跟进也会自动转入公客池
          </p>
          <!-- 单选按钮组 -->
          <div class="flex items-center mb-4">
            <label><input type="radio" name="status" value="开启" v-model="status" /> 开启</label>
            <!-- 天数输入框，仅在“开启”时显示 -->
            <div v-show="status === '开启'" class="flex items-center ml-4">
              <input
                type="text"
                v-model="days"
                placeholder="请输入天数"
                class="border border-gray-300 p-1 rounded-md w-20"
              />
              <span class="ml-2">天</span>
            </div>
            <label class="ml-4"
              ><input type="radio" name="status" value="关闭" v-model="status" /> 关闭</label
            >
          </div>

          <!-- 保存按钮，点击时编辑内容 -->
          <button @click="isVisible = true" class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
            >保存
          </button>
        </div>
        <!-- 决策配置内容第二个 -->
        <div class="mb-5 border-b-2 border-gray-300">
          <h3 class="text-lg font-semibold mb-2">私客自动转入公客池,是否发送消息</h3>
          <p class="text-sm text-gray-600 mb-4 bg-gray-300">
            租客天内未跟进，自动转入公客池后，消息将通知到资源负责人。
          </p>
          <div class="flex items-center mb-4">
            <label><input type="radio" name="message" value="通知" v-model="message" /> 通知</label>
            <label class="ml-4"
              ><input type="radio" name="message" value="不通知" v-model="message" /> 不通知</label
            >
          </div>
          <button @click="isVisible = true" class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
            >保存</button
          >
        </div>
        <!--   决策配置内容第三个 -->
        <div class="mb-5 border-b-2 border-gray-300">
          <h3 class="text-lg font-semibold mb-2">个人最多可以从公客转入自己私客池的数量</h3>
          <p class="text-sm text-gray-600 mb-4 bg-gray-300">
            限制后，每个人从公客池转入的线索资源 + 自己拥有的线索资源，不能超过该数量。
            自己拥有的私客线索状态为正常的数量少于限制数量，可继续从私客池转入(自己录入的私客线索不受限制)
          </p>
          <!-- 单选按钮组 -->
          <div class="flex items-center mb-4">
            <label><input type="radio" name="limit" value="限制" v-model="limit" /> 限制</label>
            <!-- 天数输入框，仅在“开启”时显示 -->
            <div v-show="limit === '限制'" class="flex items-center ml-4">
              <input
                type="text"
                v-model="days_limit"
                placeholder="请输入"
                class="border border-gray-300 p-1 rounded-md w-20"
              />
              <span class="ml-2">个</span>
            </div>
            <label class="ml-4"
              ><input type="radio" name="limit" value="不限制" v-model="limit" /> 不限制</label
            >
          </div>

          <!-- 保存按钮，点击时编辑内容 -->
          <button @click="isVisible = true" class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
            >保存
          </button>
        </div>
        <!-- 决策配置内容第四个 -->
        <div class="mb-5 border-b-2 border-gray-300">
          <h3 class="text-lg font-semibold mb-2">公客联系方式展示</h3>
          <p class="text-sm text-gray-600 mb-4 bg-gray-300">
            公客显示资源的手机号和其他联系方式是否隐藏部分；资源的联系方式只可查看部分[例：手机号：138****1234,微信/QQ/其他联系方式：*****]
          </p>

          <!-- 单选按钮组 -->
          <div class="flex items-center mb-4">
            <label><input type="radio" name="show" value="通知" v-model="show" /> 显示</label>
            <label class="ml-4"
              ><input type="radio" name="show" value="不通知" v-model="show" />隐藏</label
            >
          </div>

          <!-- 保存按钮，点击时编辑内容 -->
          <button @click="isVisible = true" class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
            >保存
          </button>
        </div>
        <!-- 决策配置内容第五个-->
        <div class="mb-5 border-b-2 border-gray-300">
          <h3 class="text-lg font-semibold mb-2"
            >指派租客线索给管家时,短时间内指派线索数量超过*个,给予提醒</h3
          >
          <p class="text-sm text-gray-600 mb-4 bg-gray-300">
            开启提醒并设置规定时间及线索数量后，在指派线索给出房管家时，超过设置的限制就提醒
          </p>
          <div class="flex items-center mb-4">
            <label
              ><input type="radio" name="title" value="开启提醒" v-model="title" /> 开启提醒</label
            >
            <div v-show="title === '开启提醒'" class="flex items-center ml-4">
              <input
                type="text"
                v-model="minute"
                placeholder="请输入"
                class="border border-gray-300 p-1 rounded-md w-20"
              />
              <span class="ml-2">分钟内超过</span>
              <input
                type="text"
                v-model="minute"
                placeholder="请输入"
                class="border border-gray-300 p-1 rounded-md w-20"
              />
              <span class="ml-2">个</span>
            </div>
            <label class="ml-4"
              ><input type="radio" name="title" value="关闭提醒" v-model="title" /> 关闭提醒</label
            >
          </div>
          <button @click="isVisible = true" class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
            >保存</button
          >
        </div>
        <!--决策配置第六个 -->
        <div class="mb-5 border-b-2 border-gray-300">
          <h3 class="text-lg font-semibold mb-2"
            >指派租客线索后，管家规定时间内未跟进，给予指派人消息提醒</h3
          >
          <p class="text-sm text-gray-600 mb-4 bg-gray-300">
            开启提醒并设置规定时间后，在指派线索给出房管家后，管家未在规定的时间内跟进，自动给予指派人消息提醒
          </p>
          <div class="flex items-center mb-4">
            <label
              ><input type="radio" name="reminder" value="开启提醒" v-model="reminder" />
              开启提醒</label
            >
            <div v-show="reminder === '开启提醒'" class="flex items-center ml-4">
              <a-select v-model:value="reminderTime" placeholder="请选择分钟数" class="w-20">
                <a-select-option value="5">5分钟</a-select-option>
                <a-select-option value="10">10分钟</a-select-option>
                <a-select-option value="15">15分钟</a-select-option>
                <a-select-option value="30">30分钟</a-select-option>
                <a-select-option value="60">60分钟</a-select-option>
                <a-select-option value="120">120分钟</a-select-option>
              </a-select>
              <span class="ml-2">分钟内未跟进</span>
            </div>
            <label class="ml-4"
              ><input type="radio" name="reminder" value="关闭提醒" v-model="reminder" />
              关闭提醒</label
            >
          </div>
          <button @click="isVisible = true" class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
            >保存</button
          >
        </div>
        <!--决策配置第七个 -->
        <div class="mb-5 border-b-2 border-gray-300">
          <h3 class="text-lg font-semibold mb-2">租客申请预约看房时，通知人员设置</h3>
          <p class="text-sm text-gray-600 mb-4 bg-gray-300">
            设置通知人员后，租客申请预约看房时，将通知给相应的人员。
          </p>
          <div class="flex items-center mb-4">
            <label>
              <input
                type="radio"
                name="notification"
                value="房源维护人"
                v-model="notificationSetting"
              />
              通知房源维护人
            </label>
            <label class="ml-4">
              <input
                type="radio"
                name="notification"
                value="统一客服"
                v-model="notificationSetting"
              />
              通知统一客服
            </label>

            <div v-if="notificationSetting === '统一客服'" class="flex">
              <a-select v-model:value="selectedCustomerService" placeholder="请选择客服">
                <a-select-option
                  v-for="option in customerServiceOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </a-select-option>
              </a-select>
            </div>
          </div>
          <button @click="isVisible = true" class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
            >保存</button
          >
        </div>
      </div>

      <div v-else-if="activeKey === '2'" class="border p-4 rounded-md">
        <header class="bg-gray-300 h-13 w-full flex items-center justify-center">
          <h1>添加招商线索默认字段配置</h1>
        </header>
        <div>
          <h1 class="text-lg font-semibold mt-4">基本信息</h1>
          <main class="grid grid-cols-5 gap-4 flex w-full">
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">姓名(公司名称)</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--1-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">性别</span>
                <hr class="mt-1 mb-2" />
                <select class="text-sm text-gray-400 bg-transparent border-none focus:outline-none">
                  <option value="" disabled selected>不支持默认设置</option>
                  <option value="option1">男</option>
                  <option value="option2">女</option>
                </select>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--2-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">手机</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--3-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">高新技术企业</span>
                <hr class="mt-1 mb-2" />
                <select class="text-sm text-gray-400 bg-transparent border-none focus:outline-none">
                  <option value="" disabled selected>不支持默认设置</option>
                  <option value="option1">男</option>
                  <option value="option2">女</option>
                </select>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--4-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">客户来源</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--5-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">标签</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--6-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">行业分类</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--7-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">*认知途径</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--8-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">*联系人姓名</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--9-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">联系人类型</span>
                <hr class="mt-1 mb-2" />
                <select class="text-sm text-gray-400 bg-transparent border-none focus:outline-none">
                  <option value="" disabled selected>不支持默认设置</option>
                  <option value="option1">法人</option>
                  <option value="option2">主要决策人</option>
                </select>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--10-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">现场办公地址</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--11-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">抗性关注点</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--12-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">购买原因</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--13-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">联系客户</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--14-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">备注</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--15-->
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">上传图片</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div> </div
            ><!--16-->
          </main>
          <h1 class="text-lg font-semibold mt-4">意向项目</h1>
          <main>
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">项目</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
                <!--              <span>不可修改</span>-->
              </div>
            </div>
          </main>
          <h1 class="text-lg font-semibold mt-4">根据信息</h1>
          <main class="grid grid-cols-5 gap-4">
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">意向级别</span>
                <hr class="mt-1 mb-2" />
                <select class="text-sm text-gray-400 bg-transparent border-none focus:outline-none">
                  <option value="" disabled selected>不支持默认设置</option>
                  <option value="option1">A</option>
                  <option value="option2">B</option>
                  <option value="option3">C</option>
                  <option value="option4">D</option>
                </select>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div>
            </div>
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">意向级别</span>
                <hr class="mt-1 mb-2" />
                <select class="text-sm text-gray-400 bg-transparent border-none focus:outline-none">
                  <option value="" disabled selected>不支持默认设置</option>
                  <option value="option1">主动拜访</option>
                  <option value="option2">去电</option>
                  <option value="option3">来电</option>
                  <option value="option4">来访</option>
                  <option value="option5">微信</option>
                </select>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div>
            </div>
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">跟进内容</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
                <!--              <span>不可修改</span>-->
              </div>
            </div>
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">上传图片</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
                <!--              <span>不可修改</span>-->
              </div>
            </div>
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">下次跟进时间</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
                <!--              <span>不可修改</span>-->
              </div>
            </div>
          </main>
          <h1 class="text-lg font-semibold mt-4">其他信息</h1>
          <main class="grid grid-cols-5 gap-4">
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">产业合作</span>
                <hr class="mt-1 mb-2" />
                <select class="text-sm text-gray-400 bg-transparent border-none focus:outline-none">
                  <option value="" disabled selected>不支持默认设置</option>
                  <option value="option1">选择</option>
                  <option value="option2">不选中</option>
                </select>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div>
            </div>
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">需求面积</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
                <!--              <span>不可修改</span>-->
              </div>
            </div>
            <div class="flex rounded-lg overflow-hidden bg-white">
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">备注</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
                <!--              <span>不可修改</span>-->
              </div>
            </div>
          </main>
          <div class="flex items-center bg-white p-6 rounded-lg shadow-lg justify-between">
            <span class="text-sm text-orange-600 mr-4"
              >⚠️ 请注意，您在此之前未进行任何设置，系统将使用默认参数。</span
            >
            <div class="flex gap-4">
              <button
                class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                @click="showModalDing"
                >修改设置</button
              >
              <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >确定</button
              >
            </div>
          </div>
        </div>
      </div>
      <Modal
        v-model:visible="isModalVisible"
        title="确定要恢复默认配置吗？"
        @ok="handleOks"
        @cancel="handleCancels"
      >
        <p>恢复默认配置后，此模块的默认字段配置信息将恢复成系统原有的配置</p>
      </Modal>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Select, Tabs, Modal, Alert } from 'ant-design-vue';

  const value1 = ref('E+SPACE'); // 默认选择项
  const activeKey = ref('1'); // 默认激活的选项卡
  //const fieldName = ref(''); // 用于存储“默认字段配置”的输入内容
  const status = ref('关闭'); // 用于控制开启和关闭状态
  const days = ref(''); // 存储天数输入框的值
  const message = ref('不通知'); // 用于控制是否发送消息
  const limit = ref('不限制'); // 用于控制限制状态
  const days_limit = ref(''); // 存储人数输入框的值
  const show = ref('不通知'); // 用于控制是否显示联系方式
  const minute = ref(''); // 存储分钟输入框的值
  const title = ref('关闭提醒'); // 用于控制提醒状态
  const reminder = ref('关闭提醒'); // 用于控制提醒状态
  const reminderTime = ref(''); // 存储提醒时间输入框的值
  const notificationSetting = ref('统一客服'); // 用于控制通知人员
  const selectedCustomerService = ref(null); // 存储选择的客服人员
  const customerServiceOptions = ref([
    { label: '客服A', value: 'customerA' },
    { label: '客服B', value: 'customerB' },
    // ...其他客服选项
  ]);
  const isVisible = ref(false); // 控制弹窗的显示状态
  const applyToOthers = ref(false); // 控制复选框的状态
  const selectedShop = ref([]); // 存储选中的门店
  const isModalVisible = ref(false);
  const isAlertVisible = ref(false);
  const showModalDing = () => {
    isModalVisible.value = true;
  };

  const handleOks = () => {
    isModalVisible.value = false;
    isAlertVisible.value = true;
    setTimeout(() => {
      isAlertVisible.value = false; // 几秒后自动隐藏提示
    }, 3000); // 3000毫秒后隐藏提示
  };

  const handleCancels = () => {
    isModalVisible.value = false;
  };
  const shopOptions = [
    { label: '精佳医疗公寓', value: '精佳医疗公寓' },
    { label: '创智基地', value: '创智基地' },
    { label: '创新基地', value: '创新基地' },
    { label: '公寓测试门店', value: '公寓测试门店' },
    { label: 'E+SPACE', value: 'E+SPACE' }, // 确保选项中包含E+SPACE
  ];

  // 计算属性，用于获取选中门店的名称
  const selectedStoreName = computed(() => {
    const selectedOption = shopOptions.find((option) => option.value === value1.value);
    return selectedOption ? `${selectedOption.label}` : '';
  });

  // 保存按钮点击后的处理
  const handleOk = () => {
    console.log('Selected Shops:', selectedShop.value);
    isVisible.value = false; // 关闭弹窗
    isAlertVisible.value = true; // 显示成功提示
  };

  const handleCancel = () => {
    isVisible.value = false; // 关闭弹窗
  };

  const focus = () => {
    console.log('Select focused');
  };

  const handleChange = (value: string) => {
    console.log(`Selected: ${value}`);
  };

  // Methods for buttons
  const selectAll = () => {
    selectedShop.value = shopOptions.map((option) => option.value); // 全选
  };

  const clearSelection = () => {
    selectedShop.value = []; // 清除选项
  };
</script>

<style scoped>
  /* 可以根据需要自定义样式 */
</style>
