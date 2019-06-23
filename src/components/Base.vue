<template>
    <div class="Base">
        <h1>{{ msg }}</h1>
        <h2>{{title}}</h2>
        <InputForm
            @setWord="setWord"
        ></InputForm>
        <DisplayArea
            v-bind:ArticleDatas="dataObj"
            v-bind:tag="Word"
            v-bind:DataNum="DataNum"
        ></DisplayArea>
    </div>
</template>

<script>
import axios from 'axios'
import InputForm from '@/components/InputForm'
import DisplayArea from '@/components/DisplayArea'

const URL_BASE = 'http://ja.wikipedia.org/w/api.php?action=query&format=json&titles='
const DITAIL = '&prop=extracts&redirects=1&exchars=130&explaintext=1'

const URL_BASE_Qiita = 'https://qiita.com/api/v2/tags/'
const DITAIL_Qiita = '/items?page=1&per_page='



export default{
    components:{
        InputForm,
        DisplayArea
    },
    data(){
        return{
            msg:'Vue axios',
            title:'Qiita API V2',
            url:String,
            dataObj:Object,
            Word:String,
            DataNum:10
        }
    },
    watch:{
        url:async function(url){
            try{
                await axios.get(url)
                .then(response => ( this.dataObj = response.data));
                console.log("dataObj =" + this.dataObj);
                return
            }catch(e){
                console.error(e)
                return
            }
        }
    },
    methods:{
        setWord(Word,DataNum){
            this.Word = Word
            this.DataNum = DataNum
            this.url = URL_BASE_Qiita + Word + DITAIL_Qiita + DataNum
            console.log("url =" + this.url)
            console.log("DataNum =" + this.DataNum)
        }
    },
}
</script>