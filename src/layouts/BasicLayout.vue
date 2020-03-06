<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout style="min-height: 100vh">
      <a-layout-sider
        v-if="navLayout === 'left'"
        :theme="navTheme"
        :trigger="null"
        collapsible
        v-model="collapsed"
        width="256px"
      >
        <h2 class="logo">
          <img src="@/assets/logo.png" alt="" />
          <span v-if="!collapsed">Ant Design Pro</span>
        </h2>
        <SiderMenu :theme="navTheme" :collapsed="collapsed" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            v-auth="['admin', 'user']"
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          />
          <Header />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view />
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <Authorized :authority="['admin', 'user']">
      <SettingDrawer />
    </Authorized>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "../components/GlobalFooter";
import SiderMenu from "./SiderMenu";
import SettingDrawer from "../components/SettingDrawer";
export default {
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  },
  components: {
    Header,
    Footer,
    SiderMenu,
    SettingDrawer
  }
};
</script>

<style scoped>
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}
.trigger:hover {
  background: #eee;
}
.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}
.logo img {
  height: 32px;
  width: 32px;
}
.logo span {
  margin-left: 10px;
}
.nav-theme-dark >>> .logo {
  color: #ffffff;
}
</style>
