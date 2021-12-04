<template>
    <div class="iPad">
        <div class="container">
            <div class="gridBoxBack">
                <div class="gridBox">

                    <a href="https://ion.ua/" class="tv4k" target="_blank">
                        <span>Apple TV 4k</span>
                        <span>Домашние развлечения высокого разрешения.</span>
                        <span>От 7 899 грн. ⮚</span>
                    </a>

                    <a href="#" class="tvHouse">
                        <span>Дом</span>
                        <span>Умный дом, послушный дом.</span>
                        
                    </a>

                    <a href="#" class="tvAll">
                        <span>Все модели</span>
                        <span>Смотреть ⮚</span>
                    </a>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('updateTopper', 'TV')
  }
}
</script>

<style>
@import '../assets/tv.css';
</style>