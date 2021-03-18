<template>
  <div>
    <van-nav-bar title="首页" />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="2500" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img :src="$preImg + item.img" alt />
      </van-swipe-item>
    </van-swipe>

    <van-tabs v-model="active">
      <van-tab title="热门推荐">
        <van-card tag="标签" v-for="item in goodsList[0].content" :key="item.id" :price="item.price" :title="item.goodsname" :thumb="$preImg + item.img">
          <template #footer>
            <van-button type="primary" size="small" icon="cart-o"></van-button>
          </template>
        </van-card>
      </van-tab>
      <van-tab title="发现新品">
        <van-card tag="标签" v-for="item in goodsList[1].content" :key="item.id" :price="item.price" :title="item.goodsname" :thumb="$preImg + item.img">
          <template #footer>
            <van-button type="primary" size="small" icon="cart-o"></van-button>
          </template>
        </van-card>
      </van-tab>
      <van-tab title="全部商品">
        <van-card v-for="item in goodsList[2].content" :key="item.id" :price="item.price" :title="item.goodsname" :thumb="$preImg + item.img">
          <template #footer>
            <van-button type="primary" size="small" icon="cart-o"></van-button>
          </template>
        </van-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getBanner ,getGoodsList} from "../utils/request"; //banner图
export default {
  data() {
    return {
      active: 0,
      bannerList: [],
      goodsList:[{content:[]},{content:[]},{content:[]}]
    };
  },
  methods: {
    //banner图
    requestBanner() {
      // 发起获取轮播图请求
      getBanner().then((res) => {
        this.bannerList = res.data.list;
      });
    },
    // 商品列表
    requestGoodsList(){
      getGoodsList().then(res=>{
        // console.log(res);
        this.goodsList = res.data.list;
      })
    }
  },
  mounted() {
    // banner图
    this.requestBanner();

    // 商品列表
    this.requestGoodsList();
  },
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /* line-height: 150px; */
  text-align: center;
  /* background-color: #39a9ed; */
}
img {
  width: 100%;
  height: 200px;
}
.van-card{
  margin-bottom: 50px;
}
</style>