<template>
    <div class="main">
        <h1 class="main__title">Список постов</h1>
        <div v-if="loading" class="main__loader">
            Загрузка...
        </div>
        <div v-else class="main__posts">
            <Post v-for="post in paginatedData" :title=post.title :body=post.body :key="item" class="main__posts-item"></Post>
        </div>
        <div class="main__pagination">
            <button @click="prevPage" :disabled="currentPage === 1" class="main__pagination-btn">&larr;</button>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="main__pagination-btn"> &rarr;</button>
        </div>
    </div>
</template>
  
<script>
import Post from '../components/Post.vue';
import { mapState } from 'vuex';
    export default {
        data() {
            return {
                loading: true,
                itemsPerPage: 6, 
                currentPage: 1,
            };
        },
        computed: {
            totalPages() {
                return Math.ceil(this.posts.length / this.itemsPerPage);
            },
            paginatedData() {
                const start = (this.currentPage - 1) * this.itemsPerPage;
                const end = start + this.itemsPerPage;
                return this.posts.slice(start, end);
            },
            ...mapState(['posts']),
        },
        mounted() {
            this.loadDataFromServer();
        },

        methods: {
            loadDataFromServer() {
                fetch('https://jsonplaceholder.typicode.com/posts?_start=80&_end=105')
                    .then(response => response.json())
                    .then(response => {
                        this.$store.commit('addPosts', response);
                        this.loading = false;
                    })
                    .catch(error => {
                        console.error('Ошибка при запросе к серверу', error);
                    });
            },
            prevPage() {
                this.currentPage > 1 ? this.currentPage-- : null
            },
            nextPage() {
                this.currentPage < this.totalPages ? this.currentPage++ : null
            },
        },
        components: {
            Post,
        },
    };
</script>
  
<style>
    .main {
        width: 100%;
    }

    .main__posts {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .main__posts-item {
        margin-top: 11px;
    }

    .main__pagination {
        position: fixed;
        bottom: 10%;
        left: 50%;
    }

    .main__pagination-btn {
        width: 50px;
        transition: all .4s ease-in-out;
    }

    .main__pagination-btn:hover {
        background-color:thistle;
    }
</style>
  