

<template>
    <div class="container">
        <h1>Добавление поста</h1>
        <form @submit.prevent="submitForm" class="form">
            <label for="title">Заголовок</label>
            <input 
                type="text"
                id="title"
                v-model="postData.title"
                required
                class="form-input"
                placeholder="Заголовок"
            >
            <label for="body">Текст</label>
            <input 
                type="text"
                class="form-input"
                id="text"
                v-model="postData.text"
                required 
                placeholder="Текст"
            >
            <button type="submit">Добавить</button>
        </form>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            postData: {
                title: '',
                text: '',
            },
        };
    },
    methods: {
        ...mapMutations(['addPost']),
        submitForm() {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: this.postData.title,
                    body: this.postData.text,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    this.addPost(json);
                    console.log(json)
                    this.$router.push('/');
                });    
        },
    },
};


</script>

<style>
    .form {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
</style>