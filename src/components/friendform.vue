<template>
   <div class="friend-form">
        <input type="text" placeholder="First Name" class="form-control">
        <input type="text" placeholder="Last Name" class="form-control">
        <input type="text" placeholder="Comment" class="form-control">
        <button class="btn">ADD</button>
    </div>
</template>
<script>
export default {
  name:'friend_form',

};
</script>
<style>
.friend-form{
    width: 40%;
    height: 250px;
    margin: auto;
    background:rgb(232, 166, 166);
    border-radius: 0.5rem;
    padding: 15px;
    margin-top: 20px;
}
input, .btn{
    width: 98%;
    padding: 15px;
    margin: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
}
.btn{
    background: rgb(39, 136, 39);
}
</style>