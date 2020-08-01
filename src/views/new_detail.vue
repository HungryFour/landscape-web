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

        <div class="location_met_16_1_47 met-crumbs" m-id="47">
            <div class="container">
                <div class="row">
                    <ol class="breadcrumb m-b-0 subcolumn-crumbs">
                        <li class="breadcrumb-item">
                            <router-link to="/"><em class="icon wb-home"></em> 网站首页</router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link to="/news">新闻动态</router-link>
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        <main class="news_list_detail_met_16_1_29 met-shownews animsition     left">
            <div class="container">
                <div class="row sm0">
                    <div class="col-md-9 met-shownews-body" m-id="29">
                        <div class="row">
                            <section class="details-title border-bottom1">
                                <h1 class="m-0">{{this.$route.query.title}}</h1>
                                <div class="info font-weight-300">
                                    <span>{{this.$route.query.date}}</span>
                                    <!-- <span>
                                            <i class="icon wb-eye m-r-5" aria-hidden="true"></i>
                                            10 </span> -->
                                </div>
                            </section>
                            <section class="met-editor clearfix">
                                {{this.$route.query.content}}
                            </section>
                            <!-- <div class="met-page p-y-30 border-top1">
                                <div class="container p-t-30 ">
                                    <ul class="pagination block blocks-2 text-xs-center text-sm-left">
                                        <li class="page-item m-b-0 disable">
                                            <a href="/index/index/newsinfo/id/3" title="当结构邂逅设计 发生了什么？" class="page-link text-truncate">
                                                上一篇 <span aria-hidden="true" class="hidden-xs-down">: 当结构邂逅设计 发生了什么？</span>
                                            </a>

                                        </li>
                                        <li class="page-item m-b-0 ">
                                            <a href="/index/index/newsinfo/id/5" title="电影产业市场规模分析" class="page-link pull-xs-right text-truncate">
                                                下一篇 <span aria-hidden="true" class="hidden-xs-down">: 电影产业市场规模分析</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div> -->
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="row m0">
                            <aside class="sidebar_met_16_1_30 met-sidebar panel panel-body m-b-0" boxmh-h m-id="30" m-type="nocontent">
                                <div class="sidebar-search" data-placeholder="search">
                                    <form method="post" class="page-search-form" role="search" action="/index/index/news" m-id="search_column" m-type="nocontent">
                                        <input type="hidden" name="lang" value="cn">
                                        <input type="hidden" name="stype" value="0">
                                        <input type="hidden" name="search" value="search"><input type="hidden" name="class1" value="4">
                                        <div class="input-search input-search-dark">
                                            <button type="submit" class="input-search-btn"><i class="icon wb-search" aria-hidden="true"></i></button>
                                            <input type="text" class="form-control input-lg" name="content" placeholder="search">
                                        </div>
                                    </form>
                                </div>
                                <ul class="sidebar-column list-icons">
                                    <li>
                                        <a href="https://show.91mb.com.cn/mui334/news/" title="新闻动态" class="    					active
                            " target="_self">新闻动态</a>
                                    </li>
                                </ul>
                                <div class="sidebar-news-list recommend">
                                    <h3 class="font-size-16 m-0">为你推荐</h3>
                                    <ul class="list-group list-group-bordered m-t-10 m-b-0">
                                        <li class="list-group-item" v-for="(item, index) in news_list.slice(0,3)" :key="index">
                                            <p @click="to_detail(item)">{{item.title}}</p>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </aside>
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
import news from '@/assets/json/huazhang_article.json'
    export default {
        components: {
            Header,
            Footer
        },
        data() {
            return {
                news_list: news
            }
        },
        mounted() {
            console.log(this.$route.query)
        },
        methods: {
            to_detail(item) {
                this.$router.push({path: '/new_detail',query:{title: item.title, data: item.date, content: item.content}});
            }
        }
    }
</script>

<style scoped>
@import "../assets/css/shownews_cn.css";
.carousel {
    margin-top:80px !important;
}
</style>