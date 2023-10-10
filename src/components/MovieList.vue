<template>
    <div class="container">
        <div class="message">
            {{ message }}
        </div>
        <div class="inner">
            <Movieitem 
                v-for="movie in movies" 
                :key="movie.imdbID"
                :movie="movie"
            />
        </div>
    </div>
</template>

<script>
    import Movieitem from '~/components/Movieitem';
    export default{
        components: {
            Movieitem
        },
        data(){
            return {
                movies: [],
            };
        },
        computed: {
            movies(){
                return this.$store.state.movie.movies;
            },
            message(){
                return this.$store.state.movie.message;
            },
        }
    }
</script>