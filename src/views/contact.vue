<template>
    <div>
        <Header></Header>

        <div id="myCarousel" class="carousel slide">
            <!-- 轮播（Carousel）指标 -->
            <!-- <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            </ol>    -->
            <!-- 轮播（Carousel）项目 -->
            <div class="carousel-inner">
                <div class="item active">
                <img src="./../assets/images/aboutus_banner.png" alt="First slide" style="width:100%">
                </div>
            </div>
            <!-- 轮播（Carousel）导航 -->
            <!-- <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a> -->
        </div>

        <div class="news_list">
            <div class="container">
                <div class="row">
                    <div class="news_detail col-lg-4 col-md-6 col-sm-12" v-for="(item, index) in news_list" :key="index" @click="to_detail">
                        <img src="./../assets/images/14168866c0bbb19f2b788c10745ae8d5.png" style="width:100%">
                        <p class="news_title">{{item.title}}</p>
                        <p class="news_time">{{item.time}}</p>
                        <p class="news_desc">{{item.content}}</p>
                    </div>
                </div>
            </div>
        </div>

        <main class="show_met_21_6_12 page-content" m-id="12">
            <article class="met-show-body panel m-b-0" boxmh-mh>
                <div class="container">
                    <section class="met-editor clearfix">
                        <p style="text-align: center"><img src="./../assets/images/1552529097892818.jpg" title="1552529097892818.jpg" alt="1539247494867994.jpg"></p>
                    </section>
                </div>
            </article>
        </main>

        <main class="show_met_21_6_12 page-content" m-id="12">
            <article class="met-show-body panel m-b-0" boxmh-mh>
                <div class="container">
                    <section class="met-editor clearfix">
                        <p style="text-align: center"><img src="./../assets/images/1552529097892818.jpg" title="1552529097892818.jpg" alt="1539247494867994.jpg"></p>
                    </section>
                </div>
            </article>
        </main>

        <section class="message_form_met_16_1_26 animsition" m-id="26" m-type="nocontent">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-lg-6 offset-md-2 offset-lg-3 message_form message-list-no" m-id="26" m-type="message_form">
                        <div class="row">
                            <div class="met-message-submit panel panel-body m-b-0" boxmh-h>
                                <div class="met-form met-form-validation fv-form-bootstrap4 fv-form">
                                    <button type="submit" class="fv-hidden-submit" style="display: none; width: 0px; height: 0px;"></button>
                                    <input type="hidden" name="lang" value="cn">
                                    <div class="form-group"><input name="para1" class="form-control" type="text" placeholder="姓名" v-model="name"></div>
                                    <div class="form-group"><input name="para2" class="form-control" type="tel" placeholder="联系方式" v-model="tel"></div>
                                    <div class="form-group"><input name="para3" class="form-control" type="email" placeholder="Email" v-model="email"></div>
                                    <div class="form-group">
                                        <select name="para4" class="form-control" v-model="type">
                                            <option value='' disabled selected style='display:none;'>留言类型</option> 
                                            <option value="商务合作">商务合作</option>
                                            <option value="意见建议">意见建议</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <textarea name="para5" class="form-control" placeholder="留言内容" rows="5" v-model="desc"></textarea>
                                    </div>
                                    <div class="form-group m-b-0">
                                        <button type="submit" class="btn btn-primary btn-block btn-squared" style="background-color: #000" @click="submit">提交留言</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
         
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
    export default {
        components: {
            Header,
            Footer
        },
        data() {
            return {
                news_list: [
                    {
                    title: '当结构邂逅设计 发生了什么？',
                    time: '2020年04月17日',
                    content: '“9·30新政”对楼市的影响同样表现在学区房成交上。据中介机构统计数据显示，在选取的20个北京典型学区房样本成交价显示，目前学区房的整体涨势暂时得到遏制，近半学区房10月份的成交价未超出9月份高位。9-10月份的数据显示，中小户型学区房主流价格接近10万元/平方米，并相对稳定。热门优质学区房价格接近或超过15万元/平方米，局部房价上涨压力仍较明显。据学院南路一中介门店经纪人介绍，因为每年入学的孩子'
                    },
                    {
                    title: '当结构邂逅设计 发生了什么？',
                    time: '2020年04月17日',
                    content: '“9·30新政”对楼市的影响同样表现在学区房成交上。据中介机构统计数据显示，在选取的20个北京典型学区房样本成交价显示，目前学区房的整体涨势暂时得到遏制，近半学区房10月份的成交价未超出9月份高位。9-10月份的数据显示，中小户型学区房主流价格接近10万元/平方米，并相对稳定。热门优质学区房价格接近或超过15万元/平方米，局部房价上涨压力仍较明显。据学院南路一中介门店经纪人介绍，因为每年入学的孩子'
                    },
                    {
                    title: '当结构邂逅设计 发生了什么？',
                    time: '2020年04月17日',
                    content: '“9·30新政”对楼市的影响同样表现在学区房成交上。据中介机构统计数据显示，在选取的20个北京典型学区房样本成交价显示，目前学区房的整体涨势暂时得到遏制，近半学区房10月份的成交价未超出9月份高位。9-10月份的数据显示，中小户型学区房主流价格接近10万元/平方米，并相对稳定。热门优质学区房价格接近或超过15万元/平方米，局部房价上涨压力仍较明显。据学院南路一中介门店经纪人介绍，因为每年入学的孩子'
                    },
                    {
                    title: '当结构邂逅设计 发生了什么？',
                    time: '2020年04月17日',
                    content: '“9·30新政”对楼市的影响同样表现在学区房成交上。据中介机构统计数据显示，在选取的20个北京典型学区房样本成交价显示，目前学区房的整体涨势暂时得到遏制，近半学区房10月份的成交价未超出9月份高位。9-10月份的数据显示，中小户型学区房主流价格接近10万元/平方米，并相对稳定。热门优质学区房价格接近或超过15万元/平方米，局部房价上涨压力仍较明显。据学院南路一中介门店经纪人介绍，因为每年入学的孩子'
                    }
                ],
                name: '',
                tel: '',
                email: '',
                type: '',
                desc: ''

            }
        },
        methods: {
            to_detail() {
                this.$router.push('/new_detail');
            },
            submit() {
                if(!this.name) {
                    alert('请填写姓名');
                    return false;
                }
                if(!this.tel) {
                    alert('请填写联系方式')
                    return false;
                }
                if(!this.type) {
                    alert('请选择留言类型')
                    return false;
                }
                if(!this.desc) {
                    alert('请填写留言内容')
                    return false;
                }

                let data = {
                    name: this.name,
                    tel: this.tel,
                    email: this.email,
                    type: this.type,
                    desc: this.desc
                }
                console.log(data);
            }
        }
    }
</script>

<style scoped>
.carousel {
    margin-top:80px !important;
}
.news_list {
    margin-left:50px !important;
    margin-right:50px !important;
}
.news_detail {
    text-align:left !important;
}
</style>