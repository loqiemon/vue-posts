
<template>
    <div class="post">
        <h3 class="post__title">{{ title }}</h3>
        <p class="post__body">{{ body }}</p>
    </div>
</template>
  
<script>
    export default {
        props: {
            title: String,
            body: String,
        },
    };
</script>

<style>
    .post {
        width: 33%;
        padding: 10px;
    }

    .post__title {
        font-weight: 700;
    }
</style>
  