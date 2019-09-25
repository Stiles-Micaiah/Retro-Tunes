<template>
  <div class="home">


    <!--     
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
    </div> -->

    <div class="form-grouping">


      <h5 class="card-title introAndDesc">Retro Tracks</h5>
      <p class="card-text introAndDesc">
        Welcome to Retro Tracks! A fun iTunes API app with a Retro spin!
      </p>
      <form @submit.prevent="search()">
        <input type="Text" class="form-control rounded-pill" v-model="searchQuery" aria-describedby="searchHelp"
          placeholder="Name your query" />
        <small id="searchHelp" class="form-text text-muted">Search whatever you like. AC/DC is recommened...</small>
      </form>

    </div>

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


<style scoped>
  .introAndDesc {
    text-shadow: 1px 1px 2px #fcb47a, 1px 1px 2px #fcb47a, 1px 1px 2px #fcb47a;
  }

  .form-grouping {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 15vh;
    margin-bottom: auto;
  }
</style>