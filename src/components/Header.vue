<template>
    <div>
        <header class="met-head navbar-fixed-top" m-id="1" m-type="head_nav">
            <nav class="navbar navbar-default box-shadow-none head_nav_met_21_11_1">
                <div class="container">
                    <div class="row">
                        <h1 hidden>华章视觉影视</h1>
                        <!-- 一层导航 -->
                        <nav class="lh-header navlist">
                            <a href class="lh-logo">
                                <img src="./../assets/images/1538152069.png" alt="华章视觉影视" class="hidden-sm-down">
                                <img src="./../assets/images/1538152069.png" alt="华章视觉影视" class="hidden-md-up">
                            </a>
                            <ul class="lh-header-nav lh-flex"> 
                                <li :class="[currentPath === item.url ? 'active' : '']" v-for="(item,index) in nav_list" :key="index" @click="change_nav(index)">
                                    <router-link :to="item.url">
                                        <h2 style="padding-top: 30px;font-size:18px;font-weight:400;font-family:'STFangsong'">{{item.name}}</h2>
                                        <span></span>
                                    </router-link>
                                </li>
                            </ul>
                            <div class="lh-map-btn" @click="openMenu">
                                <span></span>
                            </div>
                        </nav>
                        <!-- 二层导航 -->
                        <section class="lh-map" :class="[Menu_1 ? 'on' : '']">
                            <div class="lh-map-main">
                                <div class="lh-map-logo">
                                    <img src="./../assets/images/1538152069.png" alt="文化艺术公司响应式网站模板" title="文化艺术公司响应式网站模板">
                                </div>
                                <nav class="lh-map-nav clearfix lh-flex">
                                    <dl v-for="(item, index) in nav_list.slice(1)" :key="index">
                                        <dt><router-link :to="item.url"><span style>{{item.name}}</span></router-link></dt>
                                    </dl>
                                </nav>
                                <div class="lh-map-cont clearfix">
                                    <div class="lh-map-l left">
                                        <h2 class="lh-fonts">为合作伙伴创造价值</h2>
                                        <h3>
                                            <span>商务合作：17301337273</span>
                                            <b class="lh-fonts">
                                                <a href="tel:" target="_self">
                                                </a>
                                            </b>
                                        </h3>
                                    </div>
                                    <div class="lh-map-r right clearfix">
                                        <div class="left">
                                            <img src="./../assets/images/1538211733.png" alt="微信公众号">
                                            <h2>微信公众号</h2>
                                        </div>
                                        <!-- <div class="left">
                                            <img src="./../assets/images/1538212066.png" alt="微博公众号">
                                            <h2>微博公众号</h2>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="lh-map-line"><i></i><span></span></div>
                            </div>
                            <div class="lh-map-close" @click="Menu_1 = false">CLOSE<i></i></div>
                            <!-- 会员注册登录 -->
                            <div class="met-nav-langlist">
                                <!-- 会员注册登录 -->
                            </div>
                        </section>
                        <!-- 三层导航 -->
                        <ul class="lh-moblie-nav" :class="[Menu_2 ? 'on' : '']">
                            <li v-for="(item, index) in nav_list" :key="index">
                                <h2><router-link :to="item.url">{{item.name}}</router-link></h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Menu_1: false,
                Menu_2: false,
                active_index: 0,
                nav_list: [
                    {
                        name: '网站首页',
                        url: '/'
                    },
                    {
                        name: 'TVC/宣传片',
                        url: '/tvc'
                    },
                    {
                        name: '动画/纪录片',
                        url: '/animate'
                    },
                    {
                        name: '活动/运营',
                        url: '/activity'
                    },
                    {
                        name: '关于团队',
                        url: '/team'
                    },
                    {
                        name: '新闻中心',
                        url: '/news'
                    },
                ],
                currentPath: '',
            }
        },
        mounted() {
            this.currentPath = this.$route.path;
        },
        methods: {
            openMenu() {
                let windowWidth = document.body.clientWidth;
                if(windowWidth >= 1024) {
                    this.Menu_1 = true;
                }
                else {
                    this.Menu_2 = !this.Menu_2;
                }
            },
            change_nav(index) {
                this.active_index = index;
            }
        }
       
    }
</script>

<style scoped>
@import "../assets/css/basic.css";
@import "../assets/css/index_cn.css";

.active{
    background: #dc372b;
}
    .active h2{
        color: #ffffff !important;
    }
</style>