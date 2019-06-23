<template>
  <div class="InputForm">
    <div class="jumbotron">
      <div class="container">
        <div class="d-flex flex-column">
            <label>KeyWord</label>
            <input type ="text" class="col-4 mx-auto form-group form-control" 
              v-model="KeyWord" plaseholder="vue" autocomplete="on" list="WordList"/>
              <datalist id="WordList">
                <option v-for="word in KeyWordList">{{word}}</option>
              </datalist>

            <label>MaxIndex</label>
            <select type="number"  class="col-4 mx-auto form-group form-control" 
             v-model="DataNum"　plaseholder="10">
              <option v-for="Index in [10,20,30,40,50,60,70,80,90,100]">{{Index}}</option>
            </select>
            
            <input type ="submit" class="col-4 mx-auto form-group btn btn-outline-primary"  value="確定" @click="setWord()">
            <span>{{KeyWord}}</span>
            <span>{{DataNum}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WordList from '@/components/js/KeyWord.js'

export default {
  name:'InputForm',
  data() {
    return {
      KeyWord:'vue',
      DataNum:10,
      KeyWordList:WordList.KeyWordList
    }
  },
  methods:{
    setWord(){
      console.log("Input Word=" + this.Word);
      this.$emit('setWord',this.KeyWord,this.DataNum);
    }
  }
}
</script>
