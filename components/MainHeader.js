import { toRefs } from 'vue';


export default {
  props: {
    title: String,
    hideFurigana: Boolean,
    hideZoom: Boolean,
  },
  setup(props, { emit }) {
    const {
      title,
    } = toRefs(props);

    return {
      title,
      onOpenZoom: () => emit('onOpenZoom'),
    };
  },
  data() {
    return {
      showMenu: false,
    };
  },
  components: {
  },
  methods: {
    goHome() {
      this.$router.push('/');
    }
  },
  template: /*html*/`
    <header>
      <div class="title">
        <img src="./assets/logo_vert3.png" @click.prevent="goHome()" title="go home">
        <div>{{ title }}</div>
        <slot></slot>
      </div>
      
      <ul class="menu-index" v-if="showMenu">
        <li><router-link to="/">Go back</router-link></li>
        <li v-if="!hideFurigana"><a href="#" @click.prevent="onChangeFurigana()">Switch furigana</a></li>
        <li v-if="!hideZoom"><a href="#" @click.prevent="onOpenZoom()">Zoom level</a></li>
      </ul>
      
      <div class="icon-menu" @click="showMenu=!showMenu">
      </div>
    </header>
  `,
}