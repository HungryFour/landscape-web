<template>
    <div>
        <Header></Header>

        <div id="myCarousel" class="carousel slide">
            <div class="carousel-inner">
                <div class="item active">
                <img src="./../assets/images/action_banner.png" alt="First slide" style="width:100%">
                </div>
            </div>
        </div> 

        <section class="action_about_us">
            <div class="container">
                <div class="action_about_us_list">
                    <p><span>58</span>名</p>
                    <p>主创团队，知名导演，</p>
                    <p>制作人，摄影师</p>
                </div>
                <div class="action_about_us_list">
                    <p><span>200</span>场</p>
                    <p>成功策划过200多个</p>
                    <p>知名品牌</p>
                </div>
                <div class="action_about_us_list">
                    <p><span>300</span>部</p>
                    <p>拍摄制作超过300多部</p>
                    <p>影片作品</p>
                </div>
                <div class="action_about_us_list">
                    <p><span>180</span>个</p>
                    <p>累积服务过180家</p>
                    <p>国内外企业</p>
                </div>
            </div>
        </section>

        <section class="product_list_met_36_7_41 met-index-body best-room" m-id="41" id="showlist">
            <div class="container">
                <div class="best-room-carousel">
                    <ul class="best-room_ul no-space imagesize index-product-list tab-pane active animation-scale-up row">
                        <li class="best-room_li col-lg-4 col-md-4 col-sm-12" v-for="(item, index) in list" :key="index">
                            <div class="best-room_img">
                                <img :src="item.video_cover_pic" alt="" style="object-fit:cover">
                                <div class="best-room_overlay" @click="preview(item.video)">
                                    <div class="overlay_icn">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </section>

        <div class="pop" v-if="pop_close">
            <div class="close_btn" @click="pop_close = false">关闭</div>
            <div class="poition_center" v-html="video"></div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import list from '@/assets/json/huazhang_video_data.json'
    export default {
        components: {
            Header,
            Footer
        },
        data() {
            return {
                list: list.business,
                pop_close: false,
                video: ''
            }
        },
        mounted() {
            console.log(list);
        },
        methods: {
            to_jump(url) {
                window.open(url);
            },
            preview(video) {
                console.log(video);
                this.pop_close = true;
                this.video = video;
            },
            selectStyle(item) {
                let that = this;
                that.list.forEach(function (item) {
                    that.$set(item,'active',false);
                });
                that.$set(item,'active',true);
            },
            outStyle() {
                let that = this;
                that.list.forEach(function (item) {
                    that.$set(item,'active',false);
                });
            }
            
        }
    }
</script>

<style scoped>
@import "../assets/css/basic.css";
@import "../assets/css/index_cn.css";
.carousel {
    margin-top:70px !important;
}
.mt_10 {
    margin-bottom:20px;
}
.pop {
    width:100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    background: rgba(0,0,0,0.8);
    z-index:3000;
}
.close_btn {
    color:#fff;
    font-size:14px;
    float: right;
    margin:40px;
    cursor: pointer;
}
.poition_center {
    position: absolute;
    top:50%;
    left:50%;
    transform:translateX(-50%) translateY(-50%);
}
.video_box {
    width:100%;
    height:200px;
    position: relative;
}
.video_info {
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    position: absolute;
    text-align:center;
    line-height: 200px;
    top:0;
    left:0;
    color:#fff;
    cursor: pointer;
}
.product_list_met_36_7_41 .best-room_img img {
    height:150px;
}
.product_h3 {
    cursor: pointer;
}
@media (max-width: 767px) {
    /deep/ iframe {
      width: 400px !important;
      height: 200px !important;
    } 
}
</style>