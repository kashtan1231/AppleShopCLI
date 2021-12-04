<template>
    <div class="Airpods">
        <div class="container">
            <div class="gridBoxBack">
                <div class="gridBox">

                    <a href="https://ion.ua/" class="airpods3" target="_blank">
                        <span>3-го поколения</span>
                        <span>Абсолютно новые.</span>
                        <span>С пространственным аудио.</span>
                        <span>От 7 699 грн. ⮚</span>
                        <img src="../images/fixed/airLogo.png" alt="watchLogo">   
                    </a>

                    <a href="#" class="airpodsMax">
                        <span>MAX</span>
                        <span>Абсолютно оригинальная композиция.</span>
                        <span>От 14 999 грн. ⮚</span>
                        <img src="../images/fixed/airLogo.png" alt="watchLogo">
                    </a>

                    <a href="#" class="airpodsAll">
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
    this.$store.commit('updateTopper', 'Airpods')
  }
}
</script>

<style>
@import '../assets/airpods.css';
</style>
