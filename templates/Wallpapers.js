export default /*html*/`
<div class="wallpapers">
  <main-header
    title="Wallpapers"
  >
  </main-header>
  <div class="container" :class="{ blur: selected?.key }">
    <!--div>selected: {{ $route.params.wallpaper }}</div-->
    <div class="card" v-for="([key, item], index) of Object.entries(data)" :key="index">
      <div class="thumb" :class="{ [item.key]: true }"></div>
      <div class="info-value">{{ item.basePrice === 0 ? "Free" : item.basePrice + "+" }}</div>

      <div class="card-body">
        <div class="card-title">{{ item.title }}</div>

        <div class="card-details">
          {{ item.description }}
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
  <div v-if="selected" class="close-on-click" @click="unselectItem()">
  </div>
  <div v-if="selected" class="selected">
    <div class="item-info">
      <img :src="selected.source" />
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
      <h1>{{ selected.title }}</h1>
      <div class="text-mid-size">How much would you like to pay?</div>
      <input
        v-model="price"
        id="payWhatYouWantInput"
        :placeholder="'$' +selected.basePrice+ ' or more'"
        :min="selected.basePrice"
        type="number"
        inputmode="decimal"
        autocomplete="off"
        class="price"
      />
      <div
        class="button buy-download-button"
        :class="{ disabled: typeof price != 'number' && selected.basePrice != 0 }"
        @click="buyDownload()"
      >
        {{ price > 0 ? 'Buy' : 'Download' }}
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
`;