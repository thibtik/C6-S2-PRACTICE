<template>
    <div class="friend-card">
            <h3>Thib Tik</h3>
            <p>I am a good student</p>
        </div>
        <div class="friend-card">
            <h3>sreyne veen</h3>
            <p>I am a beautiful girl</p>
        </div>
</template>
<script>
export default {
  name:'friend_card',

};
</script>
<style>
.friend-card{
    background:rgb(232, 166, 166);
    width: 42%;
    height: 100px;
    margin: auto;
}
.friend-card h3,p{
   padding: 5px;
   margin-left: 20px;
   /* border-radius: 0.5rem; */

}
</style>