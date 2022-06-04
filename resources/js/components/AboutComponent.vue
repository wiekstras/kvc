<template>
  <!-- Jumbotron start -->
  <div class="jumbotron jumbotron-fluid"
    style="background-image:url('https://cambuur.nl/friksbeheer/wp-content/uploads/2020/05/4659261c-65d7-4ead-bdac-546ca992fbb3-865x487.jpg'); background-size:cover">
    <div class="container" style="height: 30vh;">
      <h1 class="display-4">SCS Kern van Cambuur</h1>
      <p class="lead">Over ons</p>
    </div>
  </div>
  <!-- Jumbotron end -->
  <!-- Over ons start -->
  <div class="container over-ons">
    <div class="row">
      <div class="col-sm-12 col-md-8">
        <div class="row">
          <h1>Over Kern van Cambuur</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, suscipit labore? Debitis dolorem sint
            quam harum itaque aliquam adipisci. Repellendus veritatis eveniet soluta perspiciatis voluptates at
            explicabo dolor laboriosam ea, repudiandae doloremque veniam mollitia a. Vitae veniam inventore tempore,
            quidem adipisci natus odio at sapiente, expedita totam nesciunt ex et!</p>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <p>img hier</p>
          </div>
          <div class="col-sm-12 col-md-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur tenetur, sequi repellendus assumenda
            doloribus ipsa cumque. Quo alias autem temporibus minima quae facilis dolores reprehenderit, fuga doloremque
            molestias, totam omnis saepe tempora incidunt praesentium atque. Beatae error natus rerum et. Hic, tempore
            eveniet? Iste delectus mollitia aut suscipit facilis repellat eaque, vero doloribus similique optio labore
            officia, nostrum sequi dolorum assumenda debitis unde voluptatibus sunt ipsa? Praesentium sunt eius
            laboriosam pariatur a beatae cupiditate minus quos commodi, explicabo laudantium nihil provident quia, nemo
            excepturi voluptatibus amet, ducimus illum ad soluta nam! Iure ut, quo at error atque nemo quae veniam.
          </div>
        </div>
      </div>
      <div class="col">
        <h1>Headlines</h1>
        <div class="container" style="border: 1;">
          <ul>
            <li v-for="item in headlines" style="list-style: none; margin: inherit;">
              <div class="row">
                <div class="col-3">
                  <img :src="item.image" style="width:100%" />
                </div>
                <div class="col">
                  <div class="row">
                    {{ item.title }}
                  </div>
                  <div class="row">
                    {{ item.published }}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Over ons end -->
  <!-- Onze supporters start -->
  <div class="container onze-supporters" style="text-align: center;">
    <h1> Onze supporters</h1>
    <agile :slidesToShow="4" :centerMode="true" :dots="false">
      <div class="slide">
        <img src="https://picsum.photos/id/237/200">
      </div>

      <div class="slide">
        <img src="https://picsum.photos/id/231/200">
      </div>

      <div class="slide">
        <img src="https://picsum.photos/id/230/200">
      </div>

      <div class="slide">
        <img src="https://picsum.photos/id/232/200">
      </div>

    </agile>
  </div>
  <!-- Onze supporters end -->
  <!-- Ons team start -->
  <div class="container ons-team" style="text-align: center;">
    <h1 style="text-align:center"> Ons team</h1>
    <div class="row">
      <div class="col-sm-6 col-md-3">
        <div class="card">
          <img class="card-img-top" src="https://picsum.photos/id/110/200">

          <h6 class="card-title">
            Rick Zondervan
          </h6>
          <h7> Bestuurslid</h7>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="card">
          <img class="card-img-top" src="https://picsum.photos/id/120/200">
          <h6 class="card-title">
            Richard Span
          </h6>
          <h7> Bestuurslid</h7>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="card">
          <img class="card-img-top" src="https://picsum.photos/id/180/200">

          <h6 class="card-title">
            Giel van Bussel
          </h6>
          <h7> Beste programmeur</h7>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="card">
          <img class="card-img-top" src="https://picsum.photos/id/154/200">

          <h6 class="card-title">
            Tim Stokkers
          </h6>
          <h7> Hooligan</h7>
        </div>
      </div>
    </div>
  </div>
  <!-- Ons team end -->

</template>
<script>
import { VueAgile } from 'vue-agile'


export default {
  components: {
    agile: VueAgile
  },
  data() {
    return {
      headlines: [
        { image: 'https://picsum.photos/id/145/200', title: 'Cambuur toch nog linkerrijtje!', published: '2016-04-10' },
        { image: 'https://picsum.photos/id/421/200', title: 'Cambuur mazzel met puntje tegen SCH', published: '2016-04-10' },
        { image: 'https://picsum.photos/id/123/200', title: 'Cambuur in gevaarzone', published: '2016-04-10' },
        { image: 'https://picsum.photos/id/512/200', title: 'Donateurs gezocht', published: '2016-04-10' }
      ]
    }
  }
}
</script>
<style>
.container {
  margin-bottom: 5%;
}

.slide img {
  width: 80%;
  height: auto;
}

.agile__nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.agile__nav-button--next {
  right: 0px;
}

.card-img-top {
  height: fit-content;
}

@media screen and (max-width: 800px) {
  .ons-team .card {
    margin: 5% 10%;
  }
}
</style>