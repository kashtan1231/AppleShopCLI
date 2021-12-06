<template>
    <div v-show="visibleSlide === index" class="Slide">
        <slot></slot>
    </div>
</template>

<style>

</style>

<script>
export default {
    props: ['visibleSlide', 'index'],
    data: () => ({
        
    }),
}
</script>