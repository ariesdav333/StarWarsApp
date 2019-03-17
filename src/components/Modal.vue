<template>
    <div>
        <div class="modal is-active" @close="$emit('close')">
  <div class="modal-background"></div>
        <p class="modal-card-title">Info</p>
  <div class="modal-content">
      <header class="modal-card-head">
                        <p class="modal-card-title">Info</p>
                    </header>
      <div class="box"> 
          Test text
      </div> 
    
     <footer class="modal-card-foot">
      <button class="modal-close is-large" @click="$emit('close')">Close</button>
  </footer>
  </div>

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
