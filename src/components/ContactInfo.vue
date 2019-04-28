<template>
    <div class="container">
        <div class="row">
            <b>Email:</b> {{ emailAddress }}
            <b>Twitter:</b> {{ twitterHandle }}
           <b>Instagram:</b>{{ instagram }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactInfo',
    props: ['emailAddress', 'twitterHandle', 'instagram'],
};
</script>

<style>

</style>
