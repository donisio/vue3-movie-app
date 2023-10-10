<template>
    <Headlink />
    <Search />
    <MovieList />
</template>

<script>
import Headlink from '~/components/Headlink';
import Search from '~/components/Search';
import MovieList from '~/components/MovieList';
export default {
    components:{
        Headlink,
        Search,
        MovieList
    }
}
</script>