<template>
    <div class="iPhone">
        <div class="container">
            <div class="gridBoxBack">
                <div class="gridBox">

                    <a href="https://ion.ua/" class="iphone13pro" target="_blank">
                        <span>Просто.</span>
                        <span>Нереально.</span>
                        <span>От 38 499 грн. ⮚</span>
                    </a>

                    <a href="#" class="iphone13">
                        <span>Сильный мира всего.</span>
                        <span>От 29 999 грн. ⮚</span>
                    </a>

                    <a href="#" class="iphoneAll">
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
    this.$store.commit('updateTopper', 'iPhone')
  }
}
</script>

<style>
@import '../assets/iphone.css';
</style>
