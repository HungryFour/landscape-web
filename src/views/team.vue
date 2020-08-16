<template>
    <div>
        <Header></Header>

        <div id="myCarousel" class="carousel slide">
            <div class="carousel-inner">
                <div class="item active">
                <img src="./../assets/images/about_banner.png" alt="First slide" style="width:100%">
                </div>
            </div>
        </div>

        <main class="show_met_21_6_12 page-content" m-id="12">
            <div class="container">
                <div class="row">
                    <div class="show_item">
                        <div class="show_item_left col-sm-6 animation-slide-right50 appear-no-repeat" data-plugin="appear" data-animate="slide-right50"
                            data-repeat="false">
                            <div class="show_item_left_bor">
                                <img src="./../assets/images/1538192407.jpg" class="animation-slide-left50 appear-no-repeat" alt="关于我们" data-plugin="appear"
                                    data-animate="slide-left50" data-repeat="false">
                            </div>
                        </div>
                        <div class="show_item_right col-lg-6 col-md-6 col-sm-12 animation-slide-bottom50 appear-no-repeat" data-plugin="appear" data-animate="slide-bottom50" data-repeat="false">
                            <div class="met-editor">
                                <p><span style="font-weight: 700; font-size: 24px; font-family: 微软雅黑, MicrosoftYaHei; color: rgb(192, 0, 0);"><br></span>
                                </p>
                                <p><span style="font-weight: 700; font-size: 24px; font-family: 微软雅黑, MicrosoftYaHei; color: rgb(192, 0, 0);">About us</span><br>
                                </p>
                                <p><span style="font-weight: 700; font-size: 24px; font-family: 微软雅黑, MicrosoftYaHei; color: rgb(192, 0, 0);">华章视觉</span><br>
                                </p>
                                <p><span style="font-family:微软雅黑, MicrosoftYaHei;"><br></span></p>
                                <p><span style="font-family:微软雅黑, MicrosoftYaHei;">中视华章（北京）影视文化有限公司，是一家集创意、拍摄、后期制作为一体的全流程视觉服务专业机构。致力于为中国以及全球客户提供全面、专业的视频相关服务，艺术影像服务和视频制作公司。</span> </p>
                                <p><span style="font-family:微软雅黑, MicrosoftYaHei;"><br></span></p>
                                <p><span style="font-family:微软雅黑, MicrosoftYaHei;">中视华章投身于视觉，专情于影像。业务范围覆盖运动品牌运营、广告宣传片、栏目纪录片、商用短视频、病毒视频，视频直播，商用短视频、平面电商等等，已深耕制作视频领域十多年。</span></p>
                                <p><span style="font-family:微软雅黑, MicrosoftYaHei;"><br></span></p>
                                <p><span style="font-family:微软雅黑, MicrosoftYaHei;"></span></p>
                                <p style="white-space:normal;">中视华章拥有3个专业影棚以及自有专业摄影设备。</p>
                                <p><br></p>
                            </div>
                        </div>
                    </div>
                    <!-- 时间线 -->
                    <div class="time_axis">
                        <div class="time_axis_top">
                            <p style="font-size:24px;">核心团队</p>
                        </div>
                        <div class="ad-zt">
                            <div class="col-sm-12 col-xs-12  appear-no-repeat" :class="[index%2 === 0 ? 'animation-slide-left50': 'animation-slide-right50']" data-plugin="appear" :data-animate="index%2 === 0 ? 'slide-left50' : 'slide-right50'"
                                data-repeat="false" v-for="(item, index) in list" :key="index" ref="lightBtn">
                                <div class="col-sm-6 col-xs-12 ad-zt-txt" :class="[index%2 === 0 ? 'pull-left' : 'pull-right']" style="height: 474px; line-height: 474px;">
                                    <h3 class="ad-zt-txt-02">{{item.name}}</h3>
                                </div>
                                <div class="time-btns">
                                    <div class="time-btn">
                                        <i class="icon fa-calendar" aria-hidden="true" style="font-size: 25px;"></i>
                                    </div>
                                </div>
                                <div v-if="item.canSee" class="col-sm-6 col-xs-12 ad-zt-img img_left" :class="[ (index%2 === 0) ?'pull-left':'pull-right']">
                                    <div :class="[index%2 === 0 ? 'ml50' : 'mr50']">
                                        <img :src="item.avatar" alt="Kate" class="img-responsive" style="max-width:100%;">
                                        <p>{{item.name}}</p>
                                        <p>{{item.title1}}</p>
                                        <p>{{item.title2}}</p>
                                        <p>{{item.case}}</p>
                                        <p>{{item.introduce}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="time_axis_top">
                            <div></div>
                        </div>
                    </div>

                </div>
            </div>
        </main>

        <main>
            
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import list from '@/assets/json/huazhang_director.json'
    export default {
        components: {
            Header,
            Footer
        },
        data() {
            return {
                list: list
            }
        },
        mounted(){
            window.addEventListener('scroll', this.getScroll);
        },
        destroyed(){
            window.removeEventListener('scroll', this.getScroll);
        },
        methods: {
            getScroll(){
                for(let listIndex in this.list) {
                    if(this.$refs.lightBtn[listIndex].getBoundingClientRect().top < 500){
                        this.list[listIndex].canSee = true;
                        
                    }
                }
                console.log(this.list)
            }
        }
    }
</script>

<style scoped>
@import "../assets/css/basic.css";
@import "../assets/css/show_cn.css";
@import "../assets/css/news_cn.css";
  .carousel {
    margin-top:70px !important;
  }
  .show_item {
      text-align: left !important;
  }
  .mr50 {
      margin-right: 50px;
  }
  .ml50 {
      margin-left: 50px;
  }
    .pull-right{
        animation-fill-mode: none;
        animation-name: getoutRight;
        animation-duration: 0.6s;
        animation-timing-function: ease-out;
    }

    @keyframes getoutRight{
    0% {
        opacity: 0;
        -webkit-transform: translate3d(50%,0,0);
        transform: translate3d(50%,0,0);
    }

    100% {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
  }

    .pull-left{
        animation-fill-mode: none;
        animation-name: getoutRight;
        animation-duration: 0.6s;
        animation-timing-function: ease-out;
    }

    @keyframes getoutRight{
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-50%,0,0);
        transform: translate3d(-50%,0,0);
    }

    100% {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
  }
</style>