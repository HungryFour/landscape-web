<template>
    <div>
        <Header></Header>
        <div id="myCarousel" class="carousel slide">
            <div class="carousel-inner">
                <div class="item active">
                <img src="./../assets/images/f1d443233e68ab71579816e5a279719c.jpg" alt="First slide" style="width:100%">
                </div>
            </div>
        </div> 

        <main class="news_list_page_met_21_3_14 met-news" m-id="14">
            <div class="container">
                <div class="row">
                    <div class="news-title-bor">
                        <div class>
                            <div class="news-title-con">
                                <span class="news-top">新闻动态</span>
                                <span class="news-hr"></span>
                                <p class="news-xs">News</p>
                            </div>
                        </div>
                    </div>

                    <div class="met-news-list">
                        <ul class="ulstyle met-pager-ajax imagesize animation-slide-bottom50 appear-no-repeat" data-scale="500x800" m-id="14" data-plugin="appear"
                            data-animate="slide-bottom50" data-repeat="false">
                            <li class="border-bottom1 news-jdf" v-for="(item, index) in news_list" :key="index" @click="to_detail(item)">
                                <div class="col-sm-3 news-left">
                                    <p class="time-day">{{item.date.substring(8)}}</p>
                                    <p class="time-my">
                                        <span>{{item.date.substring(5,8)}}</span>
                                        <span>{{item.date.substring(0,5)}}</span>
                                    </p>
                                    <span class="time-hr"></span>
                                    <p class="time-desc"></p>
                                </div>
                                <div class="news-right col-sm-9">
                                    <div class="news-img">
                                        <img src="./../assets/images/14168866c0bbb19f2b788c10745ae8d5.png" alt style>
                                    </div>
                                    <div class="news-text">
                                        <h4 class="news-title"><span style>{{item.title}}</span></h4>
                                        <span class="news-right-hr"></span>
                                        <p class="news-desc">{{item.content}}</p>
                                        <a class="news-btn" @click="to_detail(item)">查看详情</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="met_pager met-pager-ajax-link hidden-md-up invisible" data-plugin="appear" data-animate="slide-bottom" data-repeat="false"
                            m-type="nosysdata" style>
                            <button type="button" class="btn btn-primary btn-block btn-squared ladda-button" id="met-pager-btn" data-plugin="ladda"
                                    data-style="slide-left" data-url data-page="1"><span class="ladda-label">
                                        <i class="icon wb-chevron-down m-r-5" aria-hidden="true"></i>
                                    </span><span class="ladda-spinner"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import list from '@/assets/json/huazhang_article.json'
    export default {
        components: {
            Header,
            Footer
        },
        data() {
            return {
                news_list: list
            }
        },
        mounted() {
        },
        methods: {
            to_detail(item) {
                this.$router.push({path: '/new_detail',query:{title: item.title, data: item.date, content: item.content}});
            },
        }
    }
</script>

<style scoped>
@import "../assets/css/news_cn.css";
@import "../assets/css/basic.css";
.carousel {
    margin-top:80px !important;
}
.news-jdf {
    text-align: left;
}
.time-my span {
    font-weight: 500 !important;
}
.time-my span:nth-of-type(1) {
    margin-right:10px;
}
</style>