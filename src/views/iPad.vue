<template>
    <div class="iPad">
        <div class="container">
            <div class="gridBoxBack">
                <div class="gridBox">

                    <a href="https://ion.ua/" class="ipadOriginal" target="_blank">
                        <span>iPad</span>
                        <span>Легкий путь к большим возможностям.</span>
                        <span>От 38 499 грн. ⮚</span>
                    </a>

                    <a href="#" class="ipadMini">
                        <span>iPad mini</span>
                        <span>Мегамощь.</span>
                        <span>Миниразмер.</span>
                        <span>От 17 999 грн. ⮚</span>
                    </a>

                    <a href="#" class="ipadAll">
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
    this.$store.commit('updateTopper', 'iPad')
  }
}
</script>

<style>
@import '../assets/ipad.css';
</style>
