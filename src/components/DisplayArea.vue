<template>
  <div class="DisplayArea">
    <div class="jumbotron">
      <div class="container">
        <h1 v-if="tag!=null">{{ tag }}</h1>
        
        <div v-if="ArticleDatas === null">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <!--表示領域-->
        <span class="mx-auto" v-else>
          <!--ページ送り-->
          <button type="button" class="btn btn-outline-dark" @click="prevPage()">&lt;</button>
          {{ page }}/{{ MaxPage }}
          <button type="button" class="btn btn-outline-dark" @click="nextPage()">&gt;</button>
          <!--ページ送り-->
          <!--表示テーブル-->
          <div v-for="(ArticleData,index) in SliceItems" :key="index">
            <h4>{{ (index+1)+(page-1)*5 }}</h4>
            <table class="text table table-hover">
                <thead>
                  <tr><th colspan="2"><a :href="ArticleData.url">{{ ArticleData.title }}</a></th></tr>
                </thead>
                <tbody>
                  <tr><th width="10%">Writer</th><th>{{ ArticleData.user.name }}</th></tr>
                  <tr><th width="10%">Good</th><th>{{ ArticleData.likes_count }}</th></tr>
                  <tr><th width="10%">Created</th><th>{{ ArticleData.created_at }}</th></tr>
                  <tr v-if="ArticleData.created_at!=ArticleData.updated_at">
                    <th width="10%">Updated</th><th>{{ ArticleData.updated_at }}</th>
                  </tr>
                  <tr><th width="10%">Comments</th><th>{{ ArticleData.comments_count }}</th></tr>
                  <tr><th width="10%">Other Tags</th>
                    <th>
                      <span v-for=" (tag,index) in ArticleData.tags" :key = "index">
                        <div v-if="index<6">{{ tag.name }},</div>
                      </span>
                    </th>
                  </tr>
                </tbody>
            </table>
          </div>
          <!--表示テーブル-->
          <!--ページ送り-->
          <button type="button" class="btn btn-outline-dark" @click="prevPage()">&lt;</button>
          {{ page }}/{{ MaxPage }}
          <button type="button" class="btn btn-outline-dark" @click="nextPage()">&gt;</button>
          <!--ページ送り-->
        </span>
          <!--表示領域-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'display',
  props:{
    ArticleDatas:null,
    tag:null,
  },
  data(){
    return{
      page:1,//現在のページ番号
      perPage:5,//1ページ毎の表示件数
    }
  },
  watch:{
    ArticleDatas:function(){
      this.page = 1;
      this.Sort();
    }
  },
  computed:{
    SliceItems(){
      console.log("page="+this.page);
      if(this.ArticleDatas == null)return;
      return this.ArticleDatas.slice((this.page - 1) * this.perPage, this.page * this.perPage);
    },
    MaxPage(){
      return this.ArticleDatas.length/this.perPage;//総ページ数
    },
  },
  methods:{
    prevPage(){
      this.page = Math.max(this.page- 1, 1);
    },
    nextPage(){
      this.page = Math.min(this.page+ 1, this.MaxPage);
    },
    Sort(){
      for(let i=0;i<this.ArticleDatas.length;i++){
        for(let j=i;j<this.ArticleDatas.length;j++){
          if(this.ArticleDatas[i].likes_count<this.ArticleDatas[j].likes_count){
              let tmp = this.ArticleDatas[i];
              this.ArticleDatas[i] = this.ArticleDatas[j];
              this.ArticleDatas[j] = tmp;
          }
        }
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

table{
    width:97%;
    margin: 0 auto;
}

table,th,tr{
    border:1.5px solid #d3d3d3;
}

thead{
    background-color: #d3d3d3;
}
.text{
    word-wrap: break-word;
}
</style>
