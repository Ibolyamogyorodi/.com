<template>
  <section>
    <button @click="scroll">
      <span>
        <img src="/assets/logo.png" />
      </span>
      <span>Visnalize</span>
    </button>
    <h1>Recreating <b>Nostalgia</b> for <b>Entertainment</b></h1>
    <div class="indicator">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 267 512.46"
      >
        <path
          d="M133.5 0c36.67 0 70.05 15.03 94.25 39.21l.06.07C251.99 63.47 267 96.84 267 133.5v151.22c0 36.67-15.03 70.04-39.21 94.24l-.06.06c-24.2 24.18-57.57 39.19-94.23 39.19-36.67 0-70.05-15.02-94.25-39.21l-.06-.06C15.01 354.74 0 321.37 0 284.72V133.5c0-36.67 15.03-70.04 39.21-94.25l.06-.06C63.47 15.02 96.84 0 133.5 0zM98.79 447.32l34.7 34.72 34.77-34.72 15.16 15.24-49.98 49.9-49.89-49.9 15.24-15.24zm34.71-130.89c12.5 0 22.74-10.23 22.74-22.73v-30.34c0-12.51-10.24-22.74-22.74-22.74-12.5 0-22.73 10.23-22.73 22.74v30.34c0 12.5 10.23 22.73 22.73 22.73zm0-294.87c-30.81 0-58.8 12.59-79.05 32.85-20.31 20.3-32.89 48.29-32.89 79.09v151.22c0 30.8 12.58 58.79 32.85 79.05 20.29 20.3 48.28 32.88 79.09 32.88 30.81 0 58.8-12.58 79.05-32.85 20.3-20.29 32.89-48.28 32.89-79.08V133.5c0-30.8-12.59-58.79-32.85-79.05-20.29-20.3-48.28-32.89-79.09-32.89z"
        />
      </svg>
    </div>
  </section>
</template>

<script>
import { animate, inView } from "motion";

export default {
  mounted() {
    const navbar = this.$root.$el.querySelector(".navbar");
    const navbarHeight = navbar.scrollHeight;
    inView(this.$el, () => {
      animate(navbar, { y: -navbarHeight, opacity: 0 });
      return () => {
        animate(navbar, { y: 0, opacity: 1 });
      };
    });
  },
  methods: {
    scroll() {
      window.scrollTo({ top: this.$el.scrollHeight });
    },
  },
};
</script>

<style lang="stylus" scoped>
section {
  background-image: url('/assets/home-bg.jpg');
  background-color: #1596f2;
  background-size: cover;
  background-attachment: fixed;
  transition: background 0.3s;
  height: 100vh;
  max-height: 900px;
  min-height: 500px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

h1 {
  font-weight: normal;
}

button {
  background: none;
  border: 0;
  display: block;
  cursor: pointer;
  position: relative;

  span {
    &:first-child {
      width: 150px;
      height: 150px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    display: block;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    text-shadow: 0 1px 2px #000;
  }
}

h1 {
  padding: 1rem 2rem;
  margin: 0;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px #000;
  max-width: 600px;
  font-size: 3.5rem;
}

.indicator {
  width: 24px;
  height: auto;
  position: absolute;
  bottom: 8px;
  fill: #fff;
}

@media (max-width: 640px) {
  h1 {
    font-size: 2rem;
  }
}
</style>