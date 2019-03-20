<script>
export default {
  beforeCreate() {
    const { params, query } = this.$route;
    const { path } = params;
    this.$route.replace({ path: "/" + path, query });
  },
  return: function(h) {
    return h();
  }
};
</script>