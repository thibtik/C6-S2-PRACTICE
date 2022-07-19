<template>
  <menu_view></menu_view>
  <friend_form></friend_form>
  <friend_card></friend_card>
</template>
<script>
import menu_view from './components/friendnav.vue'
import friend_form from './components/friendform.vue'
import friend_card from './components/friendcard.vue'
export default({
  name:'App',
  components:{
    menu_view,
    friend_form,
    friend_card,
    },
  // data() {
  //   return {
  //   }
  // },
})
</script>

<style>
   body {
    margin: 0;
    background: rgba(250, 250, 250, 0.933);
  }
</style>
