<template>
    <Header></Header>
    <RouterView>
    </RouterView>
</template>

<script>
import Header from '~/components/Header';
export default{
    data(){

    },
    components : {
        Header
    }
}
</script>

<style lang="scss">
@import '~scss/main';
</style>