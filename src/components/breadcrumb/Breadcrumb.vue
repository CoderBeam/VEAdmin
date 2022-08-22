<!-- <template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path" :to="item.path">
        <span v-if="item.children">{{ item.name }}</span>
        <router-link v-else :to="item.path">{{ item.name }}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>

  </div>
</template>
<script>
export default {
  name: 'Breadcrumb',
  created() {
    this.getBreadcrumb()

  },
  wacth: {
    $route() {
      this.getBreadcrumb();
    }
  },
  data() {
    return {
      breadcrumbList: []
    };
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];
      if (first && first.name !== "首页") {
        matched = [{ path: "/home", name: "首页" }].concat(matched);
      }
      this.breadcrumbList = matched;
    },
  }

}
</script>
<style>
</style> -->
<template>
  <div class="breadCrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in list" :key="item.path" :to="item.path">{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>

export default {
  name: 'Breadcrumb',
  computed: {
    list() {
      let matched = this.$route.matched;
      const first = matched[0];
      if (first && first.name !== "首页") {
        matched = [{ path: "/home", name: "首页" }].concat(matched);
      }
      return matched
    }
  },
}
</script>