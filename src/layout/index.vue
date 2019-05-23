<template>
  <div :class="classObj" class="app-wrapper">
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" /> -->
    <div class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" /> <!-- 侧边栏 -->
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <!-- 导航栏  -->
        <navbar />
        <!-- 标签栏  -->
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
      <!-- <right-panel v-if="showSettings">
        <settings />
      </right-panel> -->
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar,Sidebar,TagsView } from './components'
import { mapState } from 'vuex';

export default {
    name: 'Layout',
    components:{
        AppMain,
        Navbar,
        // Settings,
        Sidebar,
        TagsView
    },
    computed:{
        ...mapState({
            sidebar: state => state.app.sidebar,
            device: state=>state.app.device,
            // showSettings: state=>state.settings.showSettings,
            needTagsView: state=>state.settings.tagsView,
            fixedHeader: state=>state.settings.fixedHeader
        }),
        classObj(){
          return {
            hideSidebar: !this.sidebar.opened,
            openSidebar: this.sidebar.opened,
            withoutAnimation: this.sidebar.withoutAnimation,
            mobile: this.device == 'mobile'
          }
        }
    },
    methods:{
      handleClickOutside(){
        this.$store.dispatch('app/closeSideBar', {
          withoutAnimation: false
        })
      }
    }
}
</script>