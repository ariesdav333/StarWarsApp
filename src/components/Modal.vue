<template>
    <div class="my-modal">
        <div class="modal-background">
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">Information</p>
                <button class="delete" label="close"></button>
                </header>
                <section class="modal-card-body">  
                    Information coming from API Request goes here        
                </section>
                <footer class="modal-card-foot">
                    <button class="button">Cancel</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
           isComponentModalActive: false,
        }
    }  
}
</script>

<style>

</style>
