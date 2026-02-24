import { useRoute } from 'vue-router';

import MainHeader from 'components/MainHeader.js';

const base = './assets/wallpapers/';
const data = {
  "Arcade": { source: `${base}Arcade Wall preview.png`, class: "arcade" },
  "Feel the breeze": { source: `${base}Feel the breeze Wall preview.png`, class: "feel-the-breeze" },
  "Game girl": { source: `${base}Game girl Wall preview.png`, class: "game-girl" },
  "Halloween": { source: `${base}Halloween wall preview.png`, class: "halloween" },
  "Make a wish": { source: `${base}Make a wish Wall preview.png`, class: "make-a-wish" },
  "Night ride": { source: `${base}Night ride Wall preview.png`, class: "night-ride" },
  "Reze": { source: `${base}Reze wall preview.png`, class: "reze" },
  "See you in space": { source: `${base}See you in space wall preview.png`, class: "see-you-in-space" },
  "Spring": { source: `${base}Spring wall preview.png`, class: "spring" },
  "Summer": { source: `${base}Summer wall preview.png`, class: "summer" },
  "SV Frieren": { source: `${base}SV Frieren preview.png`, class: "sv-frieren" },
  "Take care": { source: `${base}Take care wall preview.png`, class: "take-care" },
  "Tea time": { source: `${base}Tea time wall preview.png`, class: "tea-time" },
  "Wild crowd": { source: `${base}Wild crowd wall preview.png`, class: "wild-crowd" }
};
const checkParameter = value => {
  
  if (value) {
    if (!Object.keys(data).includes(value)) {
      return '';
    }
  }

  return value;
};

export default {
  template: /*html*/`
      <div class="wallpapers">
        <main-header
          title="Wallpapers"
        >
        </main-header>
        <div class="container" :class="{ blur: selectedWallpaper }">
          <!--div>selected: {{ $route.params.wallpaper }}</div-->
          <div class="card" v-for="([key, item], index) of Object.entries(data)" :key="index">
            <div class="thumb" :class="{ [item.class]: true }"></div>

            <div class="card-body">
              <div class="card-title">Title</div>

              <div class="card-details">
                Short description goes here.
              </div>

              <div class="actions">
                <div class="button" @click="selectItem(key)">
                  Download
                </div>
              </div>
            </div>
          </div>
          <div class="loading-message">loading...</div>
        </div>
        <div v-if="selectedWallpaper" class="close-on-click" @click="unselectItem()">
        </div>
        <div v-if="selectedWallpaper" class="selected">
          <div class="item-info">
            <img :src="data[selectedWallpaper].source" />
            <div class="details">
              <h2>Description</h2>
              <div class="description text-mid-size">
                Pixel art Animated / Static Wallpaper.<br>
                <br>
                Includes:<br>
                &nbsp;&nbsp;Animated version (MP4)<br>
                &nbsp;&nbsp;Static version (PNG)<br>
                Optimized for:<br>
                &nbsp;&nbsp;Android - 1440 x 3200 px<br>
                &nbsp;&nbsp;Iphone - 1170 x 2535 px<br>
              </div>
            </div>
          </div>
          <div class="purchase-info">
            <!--div class="close-button" @click="unselectItem()">
              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjU2IDI1NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+DQo8Zz48Zz48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTk4LjgsMTA0LjRWODAuOGgyMy42VjU3LjJIMjQ2VjEwaC00Ny4ydjIzLjZoLTIzLjZ2MjMuNmgtMjMuNnYyMy42aC00Ny4yVjU3LjJIODAuOFYzMy42SDU3LjJWMTBIMTB2NDcuMmgyMy42djIzLjZoMjMuNnYyMy42aDIzLjZ2NDcuMkg1Ny4ydjIzLjZIMzMuNnYyMy42SDEwVjI0Nmg0Ny4ydi0yMy42aDIzLjZ2LTIzLjZoMjMuNnYtMjMuNmg0Ny4ydjIzLjZoMjMuNnYyMy42aDIzLjZWMjQ2SDI0NnYtNDcuMmgtMjMuNnYtMjMuNmgtMjMuNnYtMjMuNmgtMjMuNnYtNDcuMkgxOTguOHoiLz48L2c+PC9nPg0KPC9zdmc+" width="16" height="16">
            </div-->
            <h1>{{ selectedWallpaper }}</h1>
            <div class="text-mid-size">How much would you like to pay?</div>
            <input
              id="payWhatYouWantInput"
              placeholder="$0 or more" min="0"
              type="number"
              inputmode="decimal"
              autocomplete="off"
              class="price"
            />
            <div class="button buy-download-button" @click="buyDownload(selectedWallpaper)">
              Buy or download
            </div>
            <h2>Share this</h2>
            <div class="share-options">
              <a
                class="share-button facebook"
                href="https://www.facebook.com/sharer.php?u=https%3A//tatamidork.com.ar/%23/wallpapers/asd-1&ref=fbshare&t=Tatamidork+added+a+new+item+to+their+Shop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i></i>
              </a>
              <a
                class="share-button twitter"
                data-via="tatamidork_button"
                data-url="https://tatamidork.com.ar/#/wallpapers/asd-1"
                data-text="Tatamidork added a new item to their Shop"
                href="https://twitter.com/intent/tweet?text=Tatamidork+added+a+new+item+to+their+Shop&amp;url=https%3A//tatamidork.com.ar/%23/wallpapers/asd-1">
                <i></i>
              </a>
            </div>
          </div>
        </div>
      </div>
  `,
  watch: {
    $route (to, from, next) {
      this.selectedWallpaper = checkParameter(to.params.wallpaper);
      next();
    }
  },
  setup(props, ctx) {
    console.log('Wallpapers component mounted');

    const route = useRoute();

    const selectedWallpaper = checkParameter(route.params.wallpaper);

    const intervalId = setInterval(() => {
      if (document.getElementById('loading').classList.contains('hidden')) {
        document.querySelector('.wallpapers .loading-message').classList.add('hidden');
        clearInterval(intervalId);
      }
    }, 100);

    return {
      selectedWallpaper,
      data: data,
    };
  },
  mounted() {
    window.addEventListener('keydown', this.handleGlobalEscape);
  },
  unmounted() {
    window.removeEventListener('keydown', this.handleGlobalEscape);
  },
  methods: {
    unselectItem() {
      this.selectedWallpaper = null;
      this.$router.push(`./`);
    },
    selectItem(itemName) {
      this.selectedWallpaper = itemName;
      this.$router.push(`./${itemName}`);
    },
    buyDownload(itemName) {

    },
    handleGlobalEscape(event) {
      if (event.key === 'Escape') {
        this.unselectItem();
      }
    }
  },
  components: {
    MainHeader,
  }
};