<template>
  <div class="home">
    <Header></Header>

    <div class="video_box">
      <video src="https://huazhang-web.oss-cn-beijing.aliyuncs.com/home_video.mp4" autoplay muted loop preload x5-playsinline="" playsinline="" webkit-playsinline='' style="width:100%" id="video_data"/>
      <img src="https://huazhang-web.oss-cn-beijing.aliyuncs.com/home_cover.png" class="video_img"/>
    </div>

    <main class="show_met_21_6_12 page-content" m-id="12">
        <div class="container">
            <div class="row">
                <div class="show_item">
                    <div class="show_item_left  col-lg-6 col-md-6 col-sm-12 animation-slide-right50 appear-no-repeat" data-plugin="appear" data-animate="slide-right50" data-repeat="false">
                        <div class="show_item_left_bor">
                            <img src="./../assets/images/1538192407.jpg" class="animation-slide-left50 appear-no-repeat" alt="关于我们" data-plugin="appear" data-animate="slide-left50" data-repeat="false" style="width:100%">
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
            </div>
        </div>
    </main>

    <section class="service_list_met_16_8_5 text-xs-center noswiper background" m-id="5" data-hash data-title>
      <div class="container">
          <div class="row">
              <div class="head col-lg-2">
                  <h3 class="title">STAR</h3>
                  <span class="line">公司优势</span>
                  <div class="line-bg"></div>
              </div>
              <div class="col-lg-10">
                  <ul class="service_list ulstyle blocks-md-3">
                      <li class="li" v-for="(item, index) in list" :key="index">
                        <div class="table-content">
                            <div class="table-left col-lg-3">
                                <img src="./../assets/images/1538208134.png" v-if="index === 0">
                                <img src="./../assets/images/1538208813.png" v-if="index === 1">
                                <img src="./../assets/images/1538208386.png" v-if="index === 2">
                                <img src="./../assets/images/1538208821.png" v-if="index === 3">
                                <img src="./../assets/images/1538208400.png" v-if="index === 4">
                                <img src="./../assets/images/1538208629.png" v-if="index === 5">
                            </div>
                            <div class="table-right col-lg-9 col-sm-12">
                                <p class="font-size-12">{{item.title_en}}</p>
                                <div class="line-bg"></div>
                                <p class="m-t-20 font-size-20">{{item.title}}</p>
                            </div>
                        </div>
                        <div class="showbg">
                            <div class="show2">
                                <p class="t3">{{item.title}}</p>
                                <div class="line-bg"></div>
                                <p class="t4">{{item.desc}}</p>
                            </div>
                        </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </section>

    <section class="product_list_met_36_7_41 met-index-body best-room" m-id="41" id="showlist">
      <div class="container container_bg">
          <!-- <div class="title-main">
              <h2 class="m-t-0 font-weight-300 mytitle" data-plugin="appear" data-animate="slide-top" data-repeat="false">
                The iconic works of ourcompany
              </h2>
              <h5 class="m-t-0 font-weight-300 mytitle" data-plugin="appear" data-animate="slide-top" data-repeat="false" style="text-align: center;">
                企业宣传片/动画/TVC广告 /商业视频/病毒视频/访谈篇/纪录片/微电影
              </h5>
          </div> -->
          <div class="title-main product_title" style="display:flex;justify-content:space-around;padding:0 80px;">
              <h3 class="product_h3" >[企业宣传片]</h3>
              <h3 class="product_h3" >[动画]</h3>
              <h3 class="product_h3" >[纪录片]</h3>
              <h3 class="product_h3" >[TVC广告]</h3>
              <h3 class="product_h3" >[商业视频]</h3>
          </div>
          <div class="best-room-carousel">
              <ul class="best-room_ul no-space imagesize index-product-list tab-pane active animation-scale-up row">
                  <li class="best-room_li col-lg-4 col-md-4 col-sm-12" v-for="(item, index) in video_list.slice(0,6)" :key="index">
                      <div class="best-room_img">
                          <img class="best-room_img_image" :src="item.video_cover_pic" alt="" style="object-fit:cover">
                          <div class="best-room_overlay" style="display: flex; flex-direction: column; justify-content: center;"
                               @click="preview(item.video)">
                              <div style="margin-left: 1.5rem; font-size: 16px; color: white; font-weight: bold">
                                  <div style="display: flex; flex-direction: row;">
                                      <div style="color: #33FF33">名称：</div>
                                      {{item.info}}
                                  </div>
                                  <div style="display: flex; flex-direction: row;">
                                      <div style="color: #33FF33">导演：</div>
                                      {{item.director ? item.director : '孟德'}}
                                  </div>
                                  <div style="display: flex; flex-direction: row;">
                                      <div style="color: #33FF33">制作：</div>
                                      华章影视
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
          <!-- 按钮 -->
          <a class="btn btn-brand pill" title="业务领域" target="_self" @click="to_case">更多案例</a>
          <!-- /按钮 -->
      </div>
    </section>

    <section class="service_scope">
      <div class="container">
          <div class="service_scope_title">
              <span class="title_line"></span>
              <span class="title_text"><span style="font-weight: bold;">NEWS服务</span>范围</span>
              <span class="title_line"></span>
          </div>
          <div class="service_scope_list row">
              <div class="service_scope_detail col-lg-4 col-md-4 col-sm-12">
                  <div class="img_border">
                      <img src="./../assets/images/server1.png" style="width:100%">
                  </div>
                  <div class="service_scope_text">
                      <p class="eng">————ADVERTISING FILM</p>
                      <p class="title">宣传广告片作品</p>
                      <p class="content">美在于发现，挖掘品牌故事，</p>
                      <p class="content">用国内外最先进的影视互动技术，</p>
                      <p class="content">为您带来最领先的视觉体验。</p>
                      <p class="content">强大的“传播性”的“营销力”。</p>
                      <p class="content">适用于：品牌宣传、官方网站视频、</p>
                      <p class="content">产品宣传营销、网络平台广告、电视</p>
                      <p class="content">台广告等</p>
                  </div>
              </div>
              <div class="service_scope_detail col-lg-4 col-md-4 col-sm-12">
                  <div class="img_border">
                      <img src="./../assets/images/server2.png" style="width:100%">
                  </div>
                  <div class="service_scope_text">
                      <p class="eng">————ANIMATION&COMMERCIAL SHORT FILM</p>
                      <p class="title">动画及商用短片作品</p>
                      <p class="content">以声、像、色兼备，听、视、说并举，</p>
                      <p class="content">雕琢动画作品的每一个细节，达到</p>
                      <p class="content">企业作品与受众间的持续化</p>
                      <p class="content">深度沟通。</p>
                      <p class="content">适用于：项目洽谈、会展活动</p>
                      <p class="content">开场视频、病毒传播、招商、产品</p>
                      <p class="content">发布会、趣味短片、工业用场景等。</p>
                  </div>
              </div>
              <div class="service_scope_detail col-lg-4 col-md-4 col-sm-12">
                  <div class="img_border">
                      <img src="./../assets/images/server3.png" style="width:100%">
                  </div>
                  <div class="service_scope_text">
                      <p class="eng">————PHOTOGRAPHS</p>
                      <p class="title">平面、电商作品</p>
                      <p class="content">汇聚业界顶尖人才，针对不同产品</p>
                      <p class="content">需求打造高品质画面，一目了然、</p>
                      <p class="content">栩栩如生。不同风格，量身打造，</p>
                      <p class="content">深度产品转化营销品牌！</p>
                      <p class="content">适用于：电商产品头图、产品宣传</p>
                      <p class="content">画册、公司商务宣传图、</p>
                      <p class="content">个人公司形象等。</p>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <div class="split_images">
      <img src="./../assets/images/split_img1.png" style="width: 56.5%;">
      <img src="./../assets/images/split_img2.png" style="width: 43%;">
    </div>

    <section class="partner">
      <div style="width: 100%;text-align:center;margin-top:50px;">
          <div class="partner_title">
              <div class="title_line"></div>
              <div class="title_text"><span style="font-weight: bold;">LOGO服务范围</span></div>
              <div class="title_line"></div>
          </div>
          <img src="./../assets/images/partner.png" style="width: 80%;margin-top:20px;">
      </div>
    </section>

    <!-- <div class="news_list">
      <div class="container">
          <div class="row">
              <div class="news_detail col-lg-4 col-md-6 col-sm-12" v-for="(item, index) in news_list.slice(0,3)" :key="index" @click="to_detail(item)">
                  <img src="./../assets/images/14168866c0bbb19f2b788c10745ae8d5.png" style="width:100%">
                  <p class="news_title">{{item.title}}</p>
                  <p class="news_time">{{item.date}}</p>
                  <p class="news_desc">{{item.content}}</p>
              </div>
          </div>
      </div>
    </div> -->

    <div class="new_list">
      <div class="new_list_item">
        <div class="new_list_item_div">
          <div class="new_list_item_image" style="background-image: url(//17855688.s61i.faiusr.com/4/AD0IyOnBCBAEGAAgxMDA3gUo2dqgqQUwvAU4sAQ.png);"></div>
        </div>
        <div class="new_list_item_title">构建娱产业融合</div>
        <div class="new_list_item_time">2020-8-16</div>
        <div class="new_list_item_content">《白皮书》显示，2017年泛娱乐核心产业产值约为5484亿元，同比增长32%，预计占数字经济的比重将会超过1/5，...</div>
        <div class="new_list_item_icon">首页新闻</div>
      </div>
      
      <div class="new_list_item">
        <div class="new_list_item_div">
          <div class="new_list_item_image" style="background-image: url(//17855688.s61i.faiusr.com/4/AD0IyOnBCBAEGAAgw8DA3gUo6oKgugUwvAU4sAQ.png);"></div>
        </div>
        <div class="new_list_item_title">中国电视剧市场发展特征</div>
        <div class="new_list_item_time">2020-8-15</div>
        <div class="new_list_item_content">随着赴美留学的学生越来越多，学生无法完成学业的情况也时有发生。那么 想要顺利完成学业， 哪些坏习惯必须彻底甩掉呢？...</div>
        <div class="new_list_item_icon">首页新闻</div>
      </div>
      
      <div class="new_list_item">
        <div class="new_list_item_div">
          <div class="new_list_item_image" style="background-image: url(//17855688.s61i.faiusr.com/4/AD0IyOnBCBAEGAAgwsDA3gUou_iP_QcwvAU4sAQ.png);"></div>
        </div>
        <div class="new_list_item_title">全国巡展不一样的科技感</div>
        <div class="new_list_item_time">2020-8-14</div>
        <div class="new_list_item_content">活动策划是提高市场占有率的有效行为，一份可执行、可操作、创意突出的活动策划案，可有效提升企业的知名度及品牌美誉度。...</div>
        <div class="new_list_item_icon">首页新闻</div>
      </div>
      
      <div class="new_list_item">
        <div class="new_list_item_div">
          <div class="new_list_item_image" style="    background-image: url(//17855688.s61i.faiusr.com/4/AD0IyOnBCBAEGAAgxMDA3gUos6rh9QQwvAU4sAQ.png);"></div>
        </div>
        <div class="new_list_item_title">电影市场规模分析</div>
        <div class="new_list_item_time">2020-8-13</div>
        <div class="new_list_item_content">去年2015年全国电影总票房为440.69亿元，比2014年增长48.7％，创下“十二五”以来较高年度增幅，同时是...</div>
        <div class="new_list_item_icon">首页新闻</div>
      </div>
    </div>
    <div class="pop" v-if="pop_close">
        <div class="close_btn" @click="pop_close = false">关闭</div>
        <div class="row">
          <div class="poition_center col-lg-12 col-md-12 col-sm-12" v-html="video"></div>
        </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import list_data from '@/assets/json/huazhang_video_data.json'
import news from '@/assets/json/huazhang_article.json'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      list: [
        {
          title: 'TVC广告',
          title_en: 'Exhibition',
          desc: 'tvc广告的优势在于它的覆盖面比较大、普及范围较广，而且一款优秀的TVC广告片具有很强的感染力可以在消费者的脑海中留下深刻印象的同时塑造企业的品牌形象，可以极大的提升品牌的知名度！'
        },
        {
          title: '宣传片',
          title_en: 'Museum scene',
          desc: '宣传片是以电视、电影的表现手法, 是对企业内部的各个层面有重点、有针对、有秩序地进行声色并茂地凸现企业独特的风格面貌、彰显企业实力，让社会不同层面的人士对企业产生良好的印象，从而建立对该企业的信任度。'
        },
        {
          title: '纪录片',
          title_en: 'Culture',
          desc: '纪录片是以真实生活为创作素材，以真人真事为表现对象，并对其进行艺术的加工与展现的，以展现真实为本质，并用真实引发人们思考的电影或电视艺术形式。纪录片的核心为真实。'
        },
        {
          title: '商业活动',
          title_en: 'Mural',
          desc: '活动方组织的活动，是以真实现场为创作题材，记录组织方这场活动的盛大，以及真人的感情流露，对现场的满意度。并用与长期保存留档，以及作为成功案例进行展示。'
        },
        {
          title: '平面拍摄',
          title_en: 'Planning',
          desc: '静物商业摄影,美食商业摄影，一站式服务,华章传媒拥有强大的视觉设计团队,产品商业摄影，先进的设备，高品质拍摄，全方位服务，快捷高效，收费合理，拥有专业'
        },
        {
          title: '抖音制作/运营',
          title_en: 'Sand table',
          desc: '抖音视频制作+运营”可以被视作 “病毒传播”的最新形态。小成本大效益，我们运营团队可以借助电子邮件、视频博客以及YouTube这样的视频托管网站，视频片段在互联网上得到大面积的传播。来提高客户品牌的传播度。'
        }
      ],
      news_list: news,
      video_list: list_data.propaganda,
      active_index: 1,
      pop_close: false,
      video: ''
    }
  },
  mounted() {
    setTimeout(()=>{
      document.getElementById("video_data").play();
    },1000)

  },
  methods: {
    preview(video) {
      this.pop_close = true;
      this.video = video;
    },
    to_detail(item) {
      this.$router.push({path: '/new_detail',query:{title: item.title, data: item.date, content: item.content}});
    },
    to_tab(index) {
      switch(index) {
        case 1:
          this.active_index = 1;
          this.video_list = list_data.propaganda;
          break;
        case 2:
          this.active_index = 2;
          this.video_list = list_data.cartoon;
          break;
        case 3:
          this.active_index = 3;
          this.video_list = list_data.documentary;
          break;
        case 4:
          this.active_index = 4;
          this.video_list = list_data.tvc;
          break;
        case 5:
          this.active_index = 5;
          this.video_list = list_data.business;
          break;
      }
    },
    to_case() {
      switch(this.active_index) {
        case 1:
          this.$router.push('/tvc')
          break;
        case 2:
          this.$router.push('/animate')
          break;
        case 3:
          this.$router.push('/animate')
          break;
        case 4:
          this.$router.push('/tvc')
          break;
        case 5:
          this.$router.push('/activity')
          break;
      }
    }
  }
}
</script>
<style scoped>

@import "../assets/css/basic.css";

  .carousel {
    margin-top:80px !important;
  }
  .news_list {
    margin-left:50px !important;
    margin-right:50px !important;
  }
  .page-content {
    text-align:left !important;
  }
  .news_detail {
    text-align:left !important;
  }
  .news_desc {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .best-room_img {
      overflow: hidden;
  }

.best-room_img img {
      height:200px;
      width: 355px;
      transition:all .4s;
      -moz-transition:all .4s;
      -webkit-transition:all .4s;
      -o-transition:all .4s;
  }

/* .best-room_img img:hover {
    transform: scale(1.2);
} */

  .product_h3 {
    cursor: pointer;
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
    height:800px;
    width:100%;
    position: relative;
    margin-top:70px;
  }
  .video_img {
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    object-fit: contain;
  }
  @media (max-width: 767px) {
    /deep/ iframe {
      width: 400px !important;
      height: 200px !important;
    }
  }

  .container_bg{
    background: url("./../assets/images/container_bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    min-height: 800px;
  }

  .product_title{
    font-family: MFShangYa_Noncommercial;
    margin-top: 130px;
  }

  .new_list{
    margin:0 auto;
    display:flex;
    justify-content: center;
  }
  .new_list_item{
    margin: 30px;
    width:362px;
    height:386px;
    position: relative;
    padding: 10px 0;
  }
  .new_list_item_div{
    width:326px;
    height:148px;
    overflow: hidden;
    margin: 0 auto;
  }
  .new_list_item_image{
    width: 100%;
    height: 100%;
    
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .new_list_item_title{
    width:326px;
    font-size: 16px;
    font-weight: 400;
    margin: 10px auto 0;
    text-align: left;
    color: #333;
    line-height: 24px;
  }
  .new_list_item_time{
    width:326px;
    font-size: 14px;
    margin: 0 auto;
    text-align: left;
    color: #999;
  }
  .new_list_item_content{
    width:326px;
    
    margin: 18px auto 0;
    text-align: left;
    font-size: 14px;
    color: #666;
    line-height: 1.7;
  }
  .new_list_item_icon{
    display: inline-block;
    position: absolute;
    bottom: 20px;
    left:20px;
    height: 26px;
    line-height: 26px;
    max-width: 100%;
    padding: 0 8px;
    border: 1px solid #e5e5e5;
    
    
    border-radius: 5px;
    color: #999;
    font-size: 12px;
    word-break: keep-all;
    overflow: hidden;
    z-index: 2;
  }
  .new_list_item:hover{
    transition: all .4s ease-out;
    box-shadow: 0 0 4px gray;
  }
  .new_list_item:hover .new_list_item_image{
    transform: scale(1.2);
    transition: all .4s ease-out;
  }
  .new_list_item:hover .new_list_item_title{
    color:rgb(65, 119, 219);
  }
</style>
