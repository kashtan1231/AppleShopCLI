<template>
    <div class="Watch">
        <div class="container">
            <div class="gridBoxBack">
                <div class="gridBox">

                    <a href="https://ion.ua/" class="watch7" target="_blank">
                        <span>SERIES 7</span>
                        <span>Показывают максимум.</span>
                        <span>От 14 999 грн. ⮚</span>
                        <img src="../images/watch/watchLogo.png" alt="watchLogo">   
                    </a>

                    <a href="#" class="watchSE">
                        <span>SERIES 7</span>
                        <span>Мало не покажут.</span>
                        <span>От 14 999 грн. ⮚</span>
                        <img src="../images/watch/watchLogo.png" alt="watchLogo">
                    </a>

                    <a href="#" class="watchAll">
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
    this.$store.commit('updateTopper', 'Watch')
  }
}
</script>

<style>
@import '../assets/watch.css';
</style>
