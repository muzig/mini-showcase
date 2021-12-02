<template>
    <view>
        <uni-nav-bar left-text="我的衣橱" fixed="true">
            <view slot="left">
                <uni-icons type="settings"></uni-icons>
            </view>
            <view slot="right">
                <uni-icons
                    type="search"
                    style="margin: 0 40rpx 0 0"
                ></uni-icons>
                <uni-icons type="more"></uni-icons>
            </view>
        </uni-nav-bar>
        <uni-grid :column="3" :showBorder="true" :square="false">
            <uni-grid-item v-for="(v, k, i) in clothingList" :key="i">
                <view style="padding: 20rpx 20rpx 20rpx 20rpx">
                    <text class="text">{{ k }}</text>
                    <view>
                        <text class="text">1个</text>
                        <uni-icons type="list" style="float: right"></uni-icons>
                    </view>
                    <image
                        style="
                            background-color: red;
                            width: 100%;
                            height: 250rpx;
                        "
                        mode="aspectFill"
                        src="http://47.95.202.206/images/123.jpeg"
                    ></image>
                </view>
            </uni-grid-item>
        </uni-grid>
    </view>
</template>

<script>
import uniGridItem from '../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue'
export default {
    components: { uniGridItem },
    data() {
        return {}
    },
    computed: {
        clothingList() {
            let clothing = {}
            let arr = this.$store.state.clothingList
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index]
                clothing[element.class] = []
                clothing[element.class].push(element)
            }
            return clothing
        },
    },
    onLoad() {},
    methods: {},
}
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
