<template>
    <div class="container">
        <Header></Header>
        <div class="content-container"></div>
        <Footer></Footer>
    </div>
</template>

<script>
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";

  export default {
    components: {Header, Footer},
    name: "Index",
    data() {
      return {tip: "我是哈哈哈12312312"}
    },
    methods: {
      click() {
        console.log("hahahah");
      }
    }
  }
</script>

<style scoped>
    .container {
        position: relative;
    }
    .content-container {
        position: relative;
        display: flex;
        margin-top: 84px;
        width: 100%;
        height: 1000px;
    }

</style>
