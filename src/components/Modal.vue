<template>
    <div class>
        <div class="modal is-active" @close="$emit('close')">
            <div class="modal-background"></div>
  <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Star Wars Data</p>
         <button class="delete" aria-label="close"></button>
        </header>
  <section class="modal-card-body"> 
      <slot></slot>
  </section>
      </div> 
     <footer class="modal-card-foot">
      <button class="modal-close is-large" @click="$emit('close')">Close</button>
  </footer>
  </div>
  </div>
</template>


<script>
export default {
    props:{
        title: String
    },
    data() {
        return{ 
        }
    }  
}
</script>


<style>
.box{
    height: 600px;
    width: 600px;
}
</style>
