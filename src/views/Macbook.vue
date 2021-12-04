<template>
    <div class="Macbook">
        <div class="container">
            <div class="gridBoxBack">
                <div class="gridBox">

                    <a href="https://ion.ua/" class="macbookPro" target="_blank">
                        <span>MacBook Pro</span>
                        <span>Суперсила профессионалов.</span>
                        <span>От 44 999 грн. ⮚</span>
                    </a>

                    <a href="#" class="macbookAir">
                        <span>MacBook Air</span>
                        <span>С новой силой.</span>
                        <span>От 32 999 грн. ⮚</span>
                    </a>

                    <a href="#" class="macbookAll">
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
    this.$store.commit('updateTopper', 'Macbook')
  }
}
</script>

<style>
@import '../assets/macbook.css';
</style>
