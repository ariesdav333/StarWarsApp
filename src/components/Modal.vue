<template>
    <div>
        <div class="modal is-active" @close="$emit('close')">
  <div class="modal-background"></div>
        <p class="modal-card-title">Modal</p>
  <div class="modal-content">
      <div class="box"> 
          Test text
      </div> 
     <button class="delete" aria-label="close" @click="$emit('close')"></button>
  </div>
  <section class="modal-card-body">
     information where the api request will go
  </section>
  <footer class="modal-card-foot">
      <button class="modal-close is-large" @click="$emit('close')">Close</button>
  </footer>
  </div>
</div>
    
</template>



<script>
export default {
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
