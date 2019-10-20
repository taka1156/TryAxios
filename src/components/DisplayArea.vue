<template>
  <div class="DisplayArea">
    <div class="jumbotron">
      <div class="container">
        <h1 v-if="tag != null">{{ tag }}</h1>

        <div v-if="articleDatas === null">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <!--表示領域-->
        <span v-else class="mx-auto">
          <!--ページ送り-->
          <div class="d-flex justify-content-center">
            <p class="mr-3 h4" @click="prevPage()">
              &lt;
            </p>
            {{ page }}/{{ MaxPage }}
            <p class="ml-3 h4" @click="nextPage()">
              &gt;
            </p>
          </div>
          <!--ページ送り-->
          <!--表示テーブル-->
          <div v-for="(ArticleData, index) in SliceItems" :key="index">
            <h4>{{ index + 1 + (page - 1) * 5 }}</h4>
            <table class="text table table-hover">
              <thead>
                <tr>
                  <th colspan="2">
                    <a :href="ArticleData.url">{{ ArticleData.title }}</a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th width="10%">Writer</th>
                  <th>{{ ArticleData.user.name }}</th>
                </tr>
                <tr>
                  <th width="10%">Good</th>
                  <th>{{ ArticleData.likes_count }}</th>
                </tr>
                <tr>
                  <th width="10%">Created</th>
                  <th>{{ ArticleData.created_at }}</th>
                </tr>
                <tr v-if="ArticleData.created_at != ArticleData.updated_at">
                  <th width="10%">Updated</th>
                  <th>{{ ArticleData.updated_at }}</th>
                </tr>
                <tr>
                  <th width="10%">Comments</th>
                  <th>{{ ArticleData.comments_count }}</th>
                </tr>
                <tr>
                  <th width="10%">Other Tags</th>
                  <th>
                    <span v-for="(Tag, Index) in ArticleData.tags" :key="Index">
                      <div v-if="index < 6">{{ Tag.name }},</div>
                    </span>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <!--表示テーブル-->
          <!--ページ送り-->
          <div class="d-flex justify-content-center">
            <p class="mr-3 h4" @click="prevPage()">
              &lt;
            </p>
            {{ page }}/{{ MaxPage }}
            <p class="ml-3 h4" @click="nextPage()">
              &gt;
            </p>
          </div>
          <!--ページ送り-->
        </span>
        <!--表示領域-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayArea',
  props: {
    articleDatas: null,
    tag: null
  },
  data() {
    return {
      page: 1, //現在のページ番号
      perPage: 5 //1ページ毎の表示件数
    };
  },
  computed: {
    SliceItems() {
      if (this.articleDatas == null) return;
      return this.articleDatas.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
    MaxPage() {
      return Math.ceil(this.articleDatas.length / this.perPage); //総ページ数
    }
  },
  watch: {
    articleDatas: function() {
      this.page = 1;
      this.Sort();
    }
  },
  methods: {
    prevPage() {
      this.page = Math.max(this.page - 1, 1);
    },
    nextPage() {
      this.page = Math.min(this.page + 1, this.MaxPage);
    },
    Sort() {
      for (let i = 0; i < this.articleDatas.length; i++) {
        for (let j = i; j < this.articleDatas.length; j++) {
          if (
            this.articleDatas[i].likes_count < this.articleDatas[j].likes_count
          ) {
            let tmp = this.articleDatas[i];
            this.articleDatas[i] = this.articleDatas[j];
            this.articleDatas[j] = tmp;
          }
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width: 97%;
  margin: 0 auto;
}

table,
th,
tr {
  border: 1.5px solid #d3d3d3;
}

thead {
  background-color: #d3d3d3;
}
.text {
  word-wrap: break-word;
}
</style>
