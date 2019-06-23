<template>
  <div class="DisplayArea">
    <div class="jumbotron">
      <div class="container">
        <h1 v-if="tag!=null">{{ tag }}</h1>
        <span v-if="ArticleDatas!=null">
          <div class="d-flex justify-content-center">
          <button type="button" class="col-1 btn btn-outline-dark" @click="prevPage()"><</button>
          <span class="col-1">{{ page }}/{{ MaxPage }}</span>
          <button type="button" class="col-1 btn btn-outline-dark" @click="nextPage()">></button>
          </div>
          <div v-for="(ArticleData,index) in SliceItems":key="index">
            <h4>{{ (index+1)+(page-1)*5 }}</h4>
            <table class="table table-bordered table-hover">
                <thead class="thead-dark">
                  <tr><th width="10%">title</th><th><a :href="ArticleData.url">{{ ArticleData.title }}</a></th></tr>
                </thead>
                <tbody>
                  <tr><th width="10%">Writer</th><th>{{ ArticleData.user.name }}</th></tr>
                  <tr><th width="10%">Good</th><th><span>{{ ArticleData.likes_count }}</span></th></tr>
                  <tr><th width="10%">Viwer</th><th><span>{{ ArticleData.page_views_count }}</span></th></tr>
                  <tr><th width="10%">Comments</th><th><span>{{ ArticleData.comments_count }}</span></th></tr>
                  <tr><th width="10%">Other Tags</th><th><span v-for=" tag in ArticleData.tags":key="tag.id">{{ tag.name }}, </span></th></tr>
                </tbody>
            </table>
            </div>
            <button type="button" class="btn btn-outline-dark" @click="prevPage()"><</button>
            <span>{{ page }}/{{ MaxPage }}</span>
            <button type="button" class="btn btn-outline-dark" @click="nextPage()">></button>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
//v-for="ArticleData in ArticleDatas"

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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

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
