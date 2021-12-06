<template>
  <div class="home">
      <div class="container">
        <div class="gridBoxBack">
          <div class="gridBox">
            <a href="#" class="airpods" target="_blank">
              <img  src="../images/fixed/airLogo.png" alt="airpodsLogo" class="airLogo"/>
          
              <span>Магия. В новой аранжировке.</span>
              <span>Уже в продаже</span>
              <span>Всего от 7699 грн. ⮚</span>
            </a>

            <a href="#" class="iphone">
              <span>Новый iPhone 13</span>
              <form action="https://www.apple.com/ru/" target="_blank">
                <button>Все модели ⮚</button>
              </form>
            </a>

            <a href="#" class="ipad">
              <span>Мощный iPad Pro</span>
              <form action="https://www.apple.com/ru/" target="_blank">
                <button>Все модели ⮚</button>
              </form>
            </a>

            <a href="#" class="mac">
              <span>Неверотный macbook с чипом M1</span>
              <form action="https://www.apple.com/ru/" target="_blank">
                <button>Все модели ⮚</button>
              </form>
            </a>

            <a href="#" class="watch">
              <span>Сяющие Apple Watch 7</span>
              <form action="https://www.apple.com/ru/" target="_blank">
                <button>Все модели ⮚</button>
              </form>
            </a>
            <a href="#" class="tv">
              <span>Дом в 4k</span>
              <form action="https://www.apple.com/ru/" target="_blank">
                <button>Все модели ⮚</button>
              </form>
            </a>
          </div>
        </div>
      </div>
    </div>

</template>

<script>

export default {

  data: () => ({

    slides: [ 'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg',
              'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg',
              'https://cdn.theatlantic.com/thumbor/W544GIT4l3z8SG-FMUoaKpFLaxE=/0x131:2555x1568/1600x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg'],

    visibleSlide: 0,
    loading: true

  }),

  methods: {
    prev() {
      if (this.visibleSlide === 0) {
        this.visibleSlide =  this.slides.length - 1
      } else {
        this.visibleSlide --
      }
    },

    next() {
      if (this.visibleSlide === this.slides.length - 1) {
        this.visibleSlide =  0
      } else {
        this.visibleSlide ++
      }
    },


  },

  components: {
  }
}
</script>

<style>
@import '../assets/home.css';
@import '../assets/index.css';

@media (max-width: 992px) {
  

  .iphone {
    grid-column: 1/3;
    grid-row: 3/5;

    background-size: 50%;
  }

  .ipad {
    grid-column: 3/5;
    grid-row: 3/5;

    background-size: 95%;
  }

  .mac {
    grid-column: 1/5;
    grid-row: 5;
  }

  .watch {
    grid-column: 1/3;
    grid-row: 6;

    background-size: 70%;
    background-position: right bottom;
  }

  .tv {
    grid-column: 3/5;
    grid-row: 6;
  }
}

@media (max-width: 450px) {
  .gridBoxBack {
  max-width: 100%;
  
  margin-top: 186px;

  background-color: #e3e3e3;
  border-radius: 10px;

  padding: 10px;
}

  .gridBox {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 0px;
  }

  .airpods {
    grid-column: 1;
    grid-row: 1/3;
  }

  .iphone {
    grid-column: 1;
    grid-row: 3/5;

    background-size: 50%;
  }

  .ipad {
    grid-column: 3/5;
    grid-row: 3/5;

    background-size: 95%;
  }

  .mac {
    grid-column: 1/5;
    grid-row: 5;
  }

  .watch {
    grid-column: 1/3;
    grid-row: 6;

    background-size: 70%;
    background-position: right bottom;
  }

  .tv {
    grid-column: 3/5;
    grid-row: 6;
  }
}
</style>
