<template>
  <div class="InputForm">
    <div class="jumbotron">
      <div class="container">
        <div class="d-flex flex-column">
          <!--keyword入力-->
          <label>KeyWord</label>
          <input
            v-model="KeyWord"
            type="text"
            class="col-4 mx-auto form-group form-control"
            plaseholder="vue"
            autocomplete="on"
            list="WordList"
          />
          <datalist id="WordList">
            <option v-for="(word, index) in KeyWordList" :key="index">{{
              word
            }}</option>
          </datalist>
          <!--keyword入力-->

          <!--最大ページ数入力-->
          <label>MaxIndex</label>
          <select
            v-model="MaxIndex"
            type="number"
            class="col-4 mx-auto form-group form-control"
            plaseholder="10"
          >
            <option
              v-for="(i, index) in [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]"
              :key="index"
              >{{ i }}</option
            >
          </select>
          <!--最大ページ数入力-->

          <input
            type="submit"
            class="col-4 mx-auto form-group btn btn-outline-primary"
            value="確定"
            @click="setWord()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WordList from '@/components/js/KeyWord.js';

export default {
  name: 'InputForm',
  data() {
    return {
      KeyWord: 'vue.js',
      MaxIndex: 10,
      KeyWordList: WordList.KeyWordList
    };
  },
  methods: {
    setWord() {
      this.$emit('setWord', this.KeyWord, this.MaxIndex);
    }
  }
};
</script>
