<template>
    <div class="container footer">
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="flex_start" style="display:flex;align-items:flex-start;">
                    <p class="footer_content_title title_w">北京总部</p>
                    <div class="ml20">
                        <p>地址：北京市朝阳区仁安门6栋中视华章传媒</p>
                        <p>邮箱：mengde@zsmedia.com.cn</p>
                        <p>电话：17301337273</p>
                        <p>微信：17301337273</p>
                    </div>
                </div>

                <div class="flex_start" style="display:flex;align-items:flex-start;">
                    <p class="footer_content_title title_w">青岛总部</p>
                    <div class="ml20">
                        <p>地址：青岛市山东路177号鲁邦广场8栋中视华章传媒</p>
                        <p>邮箱：75541167@zsmedia.com.cn</p>
                        <p>电话：17301337273</p>
                        <p>微信：17301337273</p>
                    </div>
                </div>
               
            </div>
            <div class="clearfix visible-xs"></div>
            <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="flex_start">
                    <p class="footer_content_title">案例</p>
                    <p class="ml20">
                        <router-link to="/tvc"><span>宣传广告片</span></router-link> | 
                        <router-link to="/animate"><span>动画/短视频</span></router-link> | 
                        <router-link to="/tvc"><span>平面电脑</span></router-link>
                    </p>
                </div>

                <div class="flex_start">
                    <p class="footer_content_title">关于</p>
                    <p class="ml20">
                        <router-link to="/team"><span>关于我们</span></router-link> | 
                        <router-link to="/"><span>公司优势</span></router-link> | 
                        <router-link to="/"><span>工作流程</span></router-link> | 
                        <router-link to="/news"><span>新闻中心</span></router-link>
                    </p>
                </div>

                <div class="flex_start">
                    <p class="footer_content_title">联系</p>
                    <p class="ml20">
                        <router-link to="/contact"><span>联系我们</span></router-link> | 
                        <router-link to="/contact"><span>加入我们</span></router-link>
                    </p>
                </div>

                <div class="qr_code">
                    <img src="./../assets/images/qrcode.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.footer {
    width:100%;
    min-height:400px;
    background: url('./../assets/images/footer_bg.png') no-repeat;
    background-size:100% 100%;
    padding:50px 150px;
}
.footer_content {
    text-align: left;
    margin:50px;
    display: flex;
    justify-content: center;
}
.footer_content_title {
    font-size: 1.2em;
    font-weight: bold;
    color:#fff;
    text-align:left;
}
.qr_code {
    margin-top:30px;
    text-align:left;
}
.right {
    margin-left: 100px;
}
.flex_start {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom:20px;
    color:#fff;
}
.ml20 {
    margin-left:20px;
    text-align:left;
}
.title_w {
    width:80px;
}

@media (max-width: 767px) {
    .title_w {
        width:40px;
    }
}
</style>