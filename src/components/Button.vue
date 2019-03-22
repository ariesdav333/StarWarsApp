<template>
    <div>
        <button @click="onClick" class="button is-black">
            <slot>Button</slot>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        onClick: {
            type: Function,
            required: true
        }
    }
 
}
</script>

<style>

</style>
