<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">Micaiah</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/about">GitHub Projects<span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.linkedin.com/in/stiles-micaiah">Check out my LinkedIn!</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              href="https://drive.google.com/file/d/1vhPlX6RJo8KKq_uaqL8aOfjdC_2-r-Ge/view?usp=sharing">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>



<!-- https://www.pixelstalk.net/wp-content/uploads/images2/Free_download_Retro_desktop_Wallpaper_HD.jpg -->
<script>
  export default {
    name: "app",
    data() {
      return {
        background: emitBK // !TODO fix this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      };
    },
    mounted() { },

  };
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .navbar-nav {
    margin-right: auto;
    text-align: start;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  body {
    background: none;
  }

  html {
    background-image: url('https://www.pixelstalk.net/wp-content/uploads/images2/Free_download_Retro_desktop_Wallpaper_HD.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
  }
</style>