<template>
  <div class="home">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="@/assets/new-spotify-update-cover.jpg" alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/spotify3.w700.h467.gif" alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/1_UGeW4yAJ4yQn0PoGuXivGw.gif" alt="Third slide" />
        </div>
      </div>
    </div>
    <hr />
    <div class="card text-center">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Music Tunes</h5>
        <p class="card-text">
          Welcome to Music Tunes! The generic, totally not iTunes based, music
          search!
        </p>
        <form @submit.prevent="search()">
          <input type="Text" class="form-control" v-model="searchQuery" aria-describedby="searchHelp"
            placeholder="Name your query" />
          <small id="searchHelp" class="form-text text-muted">Search whatever you like. AC/DC is recommened...</small>
        </form>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";
  import router from "@/./router";

  export default {
    name: "home",
    data() {
      return {
        searchQuery: ""
      };
    },
    components: {
      HelloWorld
    },
    methods: {
      search() {
        let query = this.searchQuery;
        this.$store.dispatch("getResualts", query);
        this.searchQuery = "";
        router.push({ name: "resultspage" });
      }
    }
  };
</script>