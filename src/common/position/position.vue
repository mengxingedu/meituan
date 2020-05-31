<template>
    <div class="msg-bg" v-show="isShow">
        <div class="msg-confirm">
            <div class="msg-bd">
                <p style="text-align:center">检测到您目前所在城市是{{address}}<br>是否要切换</p>
            </div>
            <div class="msg-ft cf">
                <span class="msg-btn msg-btn-ok" @click='handleClickOk'>确定</span>
                <span class="msg-btn msg-btn-cancel" @click='handleClickCancel'>取消</span>
            </div>
        </div>

        <baidu-map class="map" @ready="handler"></baidu-map>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    name : 'position',
    data (){
        return {
            address : '',
            isShow : false
        }
    },
    methods : {
        handleClickOk () {
            this.setCities(this.address)
            this.isShow = false
        },
        handleClickCancel () {
            this.isShow = false
        },
        ...mapMutations(['increment', 'setCities']),

         //获取当前地址
        handler({ BMap }) {
            console.log(1231313)
            let _this = this;
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(
                function(r) {
                    if (this.getStatus() == 0) {
                        console.log(_this.cities == r.address.city)
                        if(_this.cities !=  r.address.city){
                            _this.isShow = true;
                            _this.address = r.address.city;
                        }
                    } else {
                        console.log("failed" + this.getStatus());
                    }
                },
                { enableHighAccuracy: true }
            );
        }

    }
}
</script>

<style lang='stylus' scoped>
.msg-bg
    position absolute 
    top 0
    right 0
    bottom 0
    left 0
    background rgba(0, 0, 0, .5)
    .msg-confirm
        position fixed
        left .3rem
        right .3rem
        bottom 45%
        border-radius .06rem
        background #fff
        overflow hidden
        z-index 4;
        .msg-bd
            font-size .34rem
            padding .43rem
            border-bottom 1px solid #D8D8D8
        .msg-ft
            display: -ms-flexbox;
            display: -webkit-box;
            font-size: .34rem;
            .msg-btn
                display: block;
                -webkit-box-flex: 1;
                -ms-flex: 1;
                margin-right: -1px;
                border-right: 1px solid #D8D8D8;
                height: .88rem;
                line-height: .88rem;
                text-align: center;
                color: #FE8C00;
            .msg-btn:last-child
                border-right: 0;
</style>