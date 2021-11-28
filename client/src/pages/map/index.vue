<script lang="ts" setup>
/**
 * @description 模板容器组件
 * @author huahaoze
 * @date 2021-11-22
 */
import Taro from "@tarojs/taro";
import heart from "@/img/heart.png";
import irene from "@/img/irene.png";
import johnny from "@/img/johnny.png";
import phone from "@/img/phone.png";
import { onBeforeMount } from "@vue/runtime-core";
import { ref } from "vue";
const mapHeight = ref(250);
const imgInfo = {
  width: 750,
  height: 800,
};
onBeforeMount(() => {
  const { screenHeight, screenWidth } = Taro.getSystemInfoSync();
  mapHeight.value = screenHeight - screenWidth * 0.9375 - 55;
});

const target = {
  name: "喜缘国际宴会中心",
  phone: "0571-64729988",
  location: "浙江省杭州市建德市江滨中路1号新安大厦3楼",
  latitude: 29.470703,
  longitude: 119.284459,
};

const callPhone = (t: string) => {
  const callnum = {
    j: "15167108013",
    i: "15158112167",
  };
  Taro.makePhoneCall({
    phoneNumber: callnum[t],
  });
};
const markers = [
  {
    label: {
      bgColor: "#FFFFFF",
      color: "#000000",
      textAlign: "center",
      padding: 8,
      fontSize: 15,
      borderRadius: 8,
      content: "(杭州建德)\n喜源国际宴会中心",
    },
    iconPath: heart,
    id: 0,
    latitude: target.latitude,
    longitude: target.longitude,
    width: 30,
    height: 30,
    alpha: 0.8,
  },
];
const onMarkerTap = () => {
  console.log(123);
  openLocation();
};
const openLocation = () => {
  Taro.openLocation({
    latitude: target.latitude,
    longitude: target.longitude,
    name: target.name,
    scale: 18,
  });
};
</script>
<template>
  <div class="map-wrap">
    <div class="map-container">
      <div class="map-box">
        <div class="map-line-box"></div>
        <map
          id="map"
          :style="{ width: '100%', height: Taro.pxTransform(mapHeight) }"
          :longitude="target.longitude"
          :latitude="target.latitude"
          scale="15"
          :markers="markers"
          :polyline="[]"
          :show-location="true"
          @markertap="onMarkerTap"
          @labeltap="onMarkerTap"
        />
      </div>
    </div>
    <div
      class="map-address"
      :style="{ height: Taro.pxTransform(imgInfo.height) }"
    >
      <div class="map-address-bg"></div>
      <div class="map-contact">
        <div class="contact-top">
          <img @click="callPhone('i')" class="p-img" :src="irene" alt="" />
          <img @click="callPhone('j')" class="p-img" :src="johnny" alt="" />
        </div>
        <img :src="phone" alt="" />
      </div>
    </div>
  </div>
</template>
<style lang="less">
.map-wrap {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background: #fafafa;
  .map-container {
    padding: 20px;
  }
  .map-address-bg {
    position: absolute;
    height: 200px;
    width: 400px;
    top: 120px;
    right: 10px;
    /*  background: url(https://wedding-1302676061.cos.ap-shanghai.myqcloud.com/map-bg.png)
      top center / 100% auto no-repeat; */
  }
  .map-address {
    background: url(https://wedding-1302676061.cos.ap-shanghai.myqcloud.com/address.png)
      top left / 100% auto no-repeat #fafafa;
    position: relative;
  }
  .map-contact {
    position: absolute;
    top: 300px;
    right: 30px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    img {
      width: 60px;
      height: 60px;
      margin-right: 30px;
    }
    .p-img {
      width: 80px;
      height: 80px;
      border: 1px solid #000;
      border-radius: 50%;
    }
  }
  .map-line-box {
    width: 85%;
    height: 98%;
    border: 4px solid #050505;
    position: absolute;
    bottom: -20px;
    right: -20px;
    border-width: 0 4px 4px 0;
    background: transparent;
  }
  .map-box {
    position: relative;
    width: 98%;
    background: #fff;
    box-sizing: border-box;
    padding: 4px;
    margin-right: 30px;
    border: 4px solid #050505;
  }
}
</style>
