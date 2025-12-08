export default {
  template: /*html*/`
    <div class="portfolio container">
      <div v-for="i in 28" :key="i" @click="onSelect">
      </div>
    </div>
  `,
  methods: {
    onSelect(event) {
      if (event.target.classList.contains('zoom')) {
        event.target.classList.remove('zoom');
      } else {
        for (const el of event.target.parentNode.children) {
          el.classList.remove('zoom');
        }
        event.target.classList.add('zoom');
      }
    }
  }
};