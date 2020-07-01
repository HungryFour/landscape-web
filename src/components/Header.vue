<template>
    <div class="header" style="z-index: 9 !important;" :class="navBarFixed == true ? 'navBarWrap' :''">
        <a class="header_logo" href="/home"></a>
        <div class="nav_con">
            <div class="nav_item"><a class="nav_item_a" :class="`${currentPath === '/tvc' ? 'active' : ''} ${navFontSize ? 'small_nav' : ''}`"
                                     href="/tvc">关于我们</a></div>
            <div class="nav_item"><a class="nav_item_a" :class="`${currentPath === '/animation' ? 'active' : ''} ${navFontSize ? 'small_nav' : ''}`"
                                     href="/animation">关于我们</a></div>
            <div class="nav_item"><a class="nav_item_a" :class="`${currentPath === '/activity' ? 'active' : ''} ${navFontSize ? 'small_nav' : ''}`"
                                     href="/activity">关于我们</a></div>
            <div class="nav_item"><a class="nav_item_a" :class="`${currentPath === '/aboutUs' ? 'active' : ''} ${navFontSize ? 'small_nav' : ''}`"
                                     href="/aboutUs">关于我们</a></div>
            <div class="nav_item"><a class="nav_item_a" :class="`${currentPath === '/news' ? 'active' : ''} ${navFontSize ? 'small_nav' : ''}`"
                                     href="/news">新闻中心</a></div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        navBarFixed: false,
        currentPath: '',
        navFontSize: false,
      }
    },
    mounted(){
      window.addEventListener('scroll', this.watchScroll);
      this.currentPath = this.$route.path;
    },
    methods:{
      watchScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        console.log("=========", scrollTop);
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 49) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        background:rgb(0,0,0);
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 84px;
        &:hover {
        }
    }

    .header_logo {
        margin-left: 157px;
        width: 141px;
        height: 44px;
        display: block;
        background: url("https://popwebsite.paquapp.com/popmartwww/pc/header_logo.png") no-repeat;
        background-size: 100%;
        margin-right: 100px;
    }

    .nav_con {
        display: flex;
        align-items: center;
        font-family: STHeiti;
        .nav_item {
            display: flex;
            align-items: center;
            position: relative;
            &:hover {
                .nav_item_a {
                    color: rgb(254, 186, 10);
                    .bottom_font {
                        border-color: rgb(254, 186, 10);
                        transform: rotate(225deg);
                    }
                }
            }
            .nav_item_a {
                text-decoration: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                padding: 30px;
                color: #fff;
                font-weight: 500;
                font-size: 20px; /*px*/
                font-family: STHeiti;
                &.small_nav{
                    font-size: 16px;
                }
                &.active{
                    color: rgb(254, 186, 10);
                }

                .bottom_font {
                    margin-left: 8px;
                    border: solid #fff;
                    border-width: 0 1px 1px 0;
                    display: inline-block;
                    padding: 3px;
                    transform: rotate(45deg);
                    transition: 0.2s all ease-in;
                }
            }
        }
    }

    .navBarWrap {
        position: fixed;
        top: 0;
        z-index: 999;
    }
</style>

