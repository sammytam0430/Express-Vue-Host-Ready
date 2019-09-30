<template>
  <b-navbar :class="scrolled ? 'scrolled' : 'normal'" toggleable="md" type="light" variant="light" sticky>
    <b-navbar-brand :to="show ? '/dashboard' : '/'">
    </b-navbar-brand>
    <b-navbar-nav v-if="show">
    </b-navbar-nav>
    <b-navbar-toggle target="nav-collapse" class="ml-auto"></b-navbar-toggle>
    <b-collapse id="nav-collapse" v-model="expanded" is-nav>
      <b-navbar-nav v-if="show" class="ml-auto">
        <b-nav-item>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else class="ml-auto">
        <b-nav-item>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

export default {
  name: "navbar",
  components: {
  },
  watch: {
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style scoped>
</style>
