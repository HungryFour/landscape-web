<template>
    <div class="footer">
        <a href="/home" class="footer-logo"></a>
        <div class="footer-con">
            <div class="footer-right-icon">
                <a class="footer_icon1">
                    <div class="ewm">
                        <i></i>
                    </div>
                </a>
                <a href="https://weibo.com/popmart" target="_blank" class="footer_icon2"></a>
                <a href="https://www.instagram.com/popmartglobal/" target="_blank" class="footer_icon3"></a>
                <a href="https://www.facebook.com/popmartglobal" target="_blank" class="footer_icon4"></a>
                <a href="https://www.youtube.com/channel/UCkjDQKykLwCUwAwgP5WKRKg" target="_blank" class="footer_icon5"></a>
                <a href="https://twitter.com/POPMARTGlobal" target="_blank" class="footer_icon6"></a>
            </div>
<!--            <div class="footer-con-box">-->
<!--                <a class="footer-con-box-item" :class="currentPath === '/home/joinUs' ? 'active' : ''" href="/home/joinUs">{{$t('message.footerTxt1')}}</a>-->
<!--                <a class="footer-con-box-item" :class="currentPath === '/home/contact' ? 'active' : ''" href="/home/contact">{{$t('message.footerTxt2')}}</a>-->
<!--            </div>-->
<!--            <div class="footer-con-box2">-->
<!--                <div class="footer-con-box2-item">-->
<!--                    {{$t('message.footerTxt6')}}-->
<!--                </div>-->
<!--                <div class="footer-con-box2-item">-->
<!--                    4000232233@POPMART.COM-->
<!--                </div>-->
<!--            </div>-->
            <div class="footer-con-box2">
                <div class="footer-con-box2-item">
                    COPYRIGHT © 泡泡玛特 POPMART.COM ALL RIGHTS RESERVED
                </div>
                <div class="footer-con-box2-item">
                    <a target="_blank" href="http://www.beian.miit.gov.cn">京 ICP 备 11028233 号 - 3</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    data(){
      return {
        currentPath: ''
      }
    },
    mounted() {
      this.currentPath = this.$route.path;
    }
  }
</script>

<style lang="scss" scoped>
    .footer{
        width: 100%;
        height: 110px;
        background: #383838;
        display: flex;
        justify-content: center;
        padding-top: 74px;
    }
    .footer-logo{
        width: 156px;
        height: 49px;
        background: url("https://popwebsite.paquapp.com/popmartwww/pc/header_logo.png") no-repeat;
        background-size: 100% 100%;
        display: block;
    }
    .footer-con{
        margin-left: 6%;
        margin-right: 4%;
        .footer-con-box{
            display: flex;
            margin-bottom: 10px;
            .footer-con-box-item{
                font-size: 16px;
                color: #fff;
                font-family: STHeiti;
                border-right: 2px solid #fff;
                padding: 0 28px;
                line-height: 16px;
                text-decoration: none;
                cursor: pointer;
                &.active{
                    color: #FF4D4D;
                }
                &:last-child{
                    border-right: none;
                }
            }
        }
        .footer-con-box2{
            display: flex;
            margin-bottom: 5px;
            .footer-con-box2-item{
                font-size: 16px;
                color: #A9A9A9;
                border-right: 1px solid #A9A9A9;
                padding: 0 28px;
                line-height: 1.5;
                a{
                    color: #A9A9A9;
                    text-decoration: none;
                }
                &:last-child{
                    border-right: none;
                }
            }
        }
    }
    .footer-right-icon{
        width: 244px;
        height: 27px;
        display: flex;
        margin-bottom: 20px;
        margin-left: 28px;
        a{
            width: 30px;
            height: 30px;
            margin-right: 17px;
            cursor: pointer;
        }
        .footer_icon1{
            background: url("https://popwebsite.paquapp.com/popmartwww/pc/footer_icon1.png") no-repeat;
            background-size: 100%;
            position: relative;
            .ewm{
                display: none;
                position: absolute;
                top: -126px;
                left: -45px;
                width: 110px;
                height: 110px;
                z-index: 9;
                border-radius: 2px;
                box-shadow: 0 0 5px 1px #ccc, 0 -1px 5px 1px #eee;
                transition: opacity .5s ease;
                i{
                    display: block;
                    width: 110px;
                    height: 110px;
                    background: url("https://popwebsite.paquapp.com/popmartwww/pc/wx_bg.jpg") no-repeat;
                    background-size: 100%;
                }
                i:after{
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -16px;
                    margin: auto;
                    width: 14px;
                    height: 14px;
                    background-color: #fff;
                    transform: translateY(-10px) rotate(45deg);
                    box-shadow: 0 0 5px 1px #ccc, 0 0 3px 1px #eee;
                    z-index: -1;
                }
            }

            &:hover{
                .ewm{
                    display: block;
                }
            }
        }
        .footer_icon2{
            background: url("https://popwebsite.paquapp.com/popmartwww/pc/footer_icon2.png") no-repeat;
            background-size: 100%;
        }
        .footer_icon3{
            background: url("https://popwebsite.paquapp.com/popmartwww/pc/footer_icon3.png") no-repeat;
            background-size: 100%;
        }
        .footer_icon4{
            background: url("https://popwebsite.paquapp.com/popmartwww/pc/footer_icon4.png") no-repeat;
            background-size: 100%;
        }
        .footer_icon5{
            background: url("https://popwebsite.paquapp.com/popmartwww/pc/footer_icon5.png") no-repeat;
            background-size: 100%;
        }
        .footer_icon6{
            background: url("https://popwebsite.paquapp.com/popmartwww/pc/footer_icon6.png") no-repeat;
            background-size: 100%;
        }

    }
</style>
