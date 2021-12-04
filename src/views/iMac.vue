<template>
  <div class="iMac">
      <div class="container">
            <div class="gridBoxBack">
                <div class="gridBox">

                    <a href="https://ion.ua/" class="imac24" target="_blank">
                        <span>24 дюйма. Знакомьтесь.</span>
                        <span>От 49 999 грн. ⮚</span>
                    </a>

                    <a href="#" class="imac27">
                        <span>27 дюймов. Готов к свершениям.</span>
                        <span>От 63 999 грн. ⮚</span>
                    </a>

                    <a href="#" class="imacAll">
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
    this.$store.commit('updateTopper', 'iMac')
  }
}
</script>

<style>
@import '../assets/imac.css';
</style>
