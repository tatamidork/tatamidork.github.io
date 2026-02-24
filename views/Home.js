const name = "tatamidork";

export default {
  template: /*html*/`
    <div class="home box-centered">
      <div class="main-logo"></div>
      <span class="normal">
        PIXEL ARTIST &#9724; ANIMATOR
      </span>
      <div class="icons">
        <div class="email-icon" @click="sendTo"></div>
        <div class="ig-icon" @click="openInstagram"></div>
        <div class="x-icon" @click="openTwitter"></div>
        <div class="ng-icon" @click="openNewGrounds"></div>
        <div class="tt-icon" @click="openTiktok"></div>
        <div class="cara-icon" @click="openCara"></div>
        <div class="threads-icon" @click="openThreads"></div>
      </div>
      <span class="big" @click="() => goTo('portfolio')">PORTFOLIO</span>
      <!--span class="big" @click="() => goTo('wallpapers')">WALLPAPERS</span-->
    </div>
  `,
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
    sendTo() {
      window.location.href = `mailto:${name}@gmail.com`;
    },
    openInstagram() {
      this.open(`https://www.instagram.com/${name}`);
    },
    openTwitter() {
      this.open(`https://x.com/${name}`);
    },
    openNewGrounds() {
      this.open(`https://${name}.newgrounds.com/`);
    },
    openTiktok() {
      this.open(`https://tiktok.com/@${name}`);
    },
    openCara() {
      this.open(`https://cara.app/${name}`);
    },
    openThreads() {
      this.open(`https://www.threads.com/@${name}`);
    },
    goTo(path) {
      window.location.hash = `#/${path}/`;
    }
  }
};