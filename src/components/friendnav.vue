<template>
  <div class="friend-nav">
      <ul >
       <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Register</a></li>
      </ul>
  </div>
</template>

<script>
export default {
  name:'menu_view',

};
</script>

<style scoped>
* {
    box-sizing: border-box;
  }
  
  html {
    font-family: 'Jost', sans-serif;
  }
  

  
  
  #app ul {
    margin: 0;
    padding: 0;
    list-style: none;
    background:rgb(228, 119, 137);
    display: flex;
  }
  
#app li {
    margin: 15px;
}
a{
  color: antiquewhite;
  text-decoration: none;
}

</style>
