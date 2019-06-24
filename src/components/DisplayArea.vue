<template>
  <div class="DisplayArea">
    <div class="jumbotron">
      <div class="container">
        <h1 v-if="tag!=null">{{ tag }}</h1>
        <!--表示領域-->
        <span class="mx-auto" v-if="ArticleDatas!=null">
          <!--ページ送り-->
          <button type="button" class="btn btn-outline-dark" @click="prevPage()"><</button>
          {{ page }}/{{ MaxPage }}
          <button type="button" class="btn btn-outline-dark" @click="nextPage()">></button>
          <!--ページ送り-->
          <!--表示テーブル-->
          <div v-for="(ArticleData,index) in SliceItems":key="index">
            <h4 class="mx-auto">{{ (index+1)+(page-1)*5 }}</h4>
            <table class="table table-hover">
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
                  <tr><th width="10%">Other Tags</th><th><span v-for=" tag in ArticleData.tags">{{ tag.name }},</span></th></tr>
                </tbody>
            </table>
            </div>
            <!--表示テーブル-->
            <!--ページ送り-->
            <button type="button" class="btn btn-outline-dark" @click="prevPage()"><</button>
            {{ page }}/{{ MaxPage }}
            <button type="button" class="btn btn-outline-dark" @click="nextPage()">></button>
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
    DataNum:null//データの総数
  },
  data(){
    return{
      page:1,//現在のページ番号
      perPage:5,//1ページ毎の表示件数
      SortArray:null,
    }
  },
  watch:{
    ArticleDatas:function(){
      this.page = 1;
      this.SortArray = this.ArticleDatas;
      this.Sort();
    }
  },
  computed:{
    DisplayArray(){
        return this.SortArray;
    },
    SliceItems(){
      console.log("page="+this.page);
      return this.DisplayArray.slice((this.page - 1) * this.perPage, this.page * this.perPage);
    },
    MaxPage(){
      return this.DataNum/this.perPage;//総ページ数
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
      for(var i=0;i<this.SortArray.length;i++){
        for(var j=i;j<this.SortArray.length;j++){
          if(this.SortArray[i].likes_count<this.SortArray[j].likes_count){
              var tmp = this.SortArray[i];
              this.SortArray[i] = this.SortArray[j];
              this.SortArray[j] = tmp;
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
</style>
