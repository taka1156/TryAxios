<template>
  <div class="Base">
    <h1>Vue axios</h1>
    <h2>Qiita API V2</h2>
    <InputForm @setWord="setWord"></InputForm>
    <DisplayArea :articles="articles" :tag="tag" :status="status"></DisplayArea>
  </div>
</template>

<script>
import axios from 'axios';
import InputForm from '@/components/InputForm';
import DisplayArea from '@/components/DisplayArea';

export default {
  components: {
    InputForm,
    DisplayArea,
  },
  data() {
    return {
      articles: [],
      status: false,
      tag: '',
    };
  },
  methods: {
    setWord(word, maxIndex) {
      this.articles = [];
      this.status = false;
      this.tag = word;
      const URL = `https://qiita.com/api/v2/tags/${word}/items?page=1&per_page=${maxIndex}`;
      this.getArticle(URL);
    },
    async getArticle(url) {
      try {
        await axios.get(url).then(response => {
          this.articles = response.data;
          this.sort();
          this.status = true;
        });
      } catch (e) {
        console.error(e);
        return;
      }
    },
    sort() {
      this.articles.sort((a, b) => {
        return b.likes_count - a.likes_count;
      });
    },
  },
};
</script>
