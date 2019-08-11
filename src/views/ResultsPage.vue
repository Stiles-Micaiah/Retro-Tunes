<template>
  <div id="ResultsPage">
    <hr />
    <div class="card card-search text-center">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Music Tunes</h5>
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
    <div class="container-fluid">
      <div class="row" id="results-row">
        <div v-for="entry in entryResults" :key="entry.trackId" v-if="entry.kind == 'song'" class="card-803 col-lg-2">
          <div class="card">

            <a @click="plays(entry.previewUrl)" href="javascript:void()" class="card card-click">

              <img style="height: auto; width: 100%; display: block;"
                :src="entry.artworkUrl60.replace(/60x60/g, '250x250')" alt="Card image">

              <div v-if="play == entry.previewUrl && isPlaying" class="card-img-overlay"
                style="background-color: rgba(0, 0, 0, 0)">
                <img style="height: 8%; width: auto; bottom: 0%; right: 0%; position: absolute; color:white;"
                  src="@/assets/music.png">
              </div>
            </a>


            <div class="card-body">
              <h5 class="card-title wrapped-text">{{entry.trackName}}</h5>
              <h6 class="card-subtitle astist-name wrapped-text text-muted">{{entry.artistName}}</h6>
            </div>

          </div>
        </div>

      </div>
    </div>

    <hr />
    <audio v-if="this.play" id="audioTag" autoplay :src="this.play"></audio>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        searchQuery: "",
        play: "",
        isPlaying: false
      };
    },
    mounted() { },
    computed: {
      entryResults() {
        return this.$store.state.results;
      }
    },
    methods: {
      search() {
        let query = this.searchQuery;
        this.$store.dispatch("getResualts", query);
        this.searchQuery = "";
        // router.push({ name: "resultspage" });
      },
      plays(preview) {
        let audio = document.getElementById('audioTag');
        if (this.play != preview) {
          this.play = preview;
          this.isPlaying = true;
        } else if (!audio.paused) {
          audio.pause();
          this.isPlaying = false;
        } else {
          audio.play();
          this.isPlaying = true;
        }

      }
    }
  };
</script>

<style scoped>
  .card,
  .card>* {
    background-color: rgba(85, 1, 163, 0.226);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: darkgoldenrod;
  }

  .card-803 {
    margin-bottom: 20px;
  }

  .astist-name {
    color: tomato !important;
  }

  .card-search {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .wrapped-text {
    white-space: nowrap;
    height: 1em;

    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>