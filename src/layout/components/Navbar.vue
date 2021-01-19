<template>
  <div class="navbar">
    <div class="left-menu">格蓝威驰</div>

    <div class="right-menu">
      <el-input
        v-model="search"
        class="search-input"
        suffix-icon="el-icon-search"
        placeholder="快速搜索"
      />
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <img :src="adminImg" class="user-avatar" />
          <span class="text-name"> admin</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <!-- <router-link to="/profile/index">
            <el-dropdown-item>Profile</el-dropdown-item>
          </router-link>
          <router-link to="/">
            <el-dropdown-item>Dashboard</el-dropdown-item>
          </router-link>
          <a
            target="_blank"
            href="https://github.com/PanJiaChen/vue-element-admin/"
          >
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a
            target="_blank"
            href="https://panjiachen.github.io/vue-element-admin-site/#/"
          > -->
          <!-- <el-dropdown-item>Docs</el-dropdown-item>
          </a> -->
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      search: "",
      adminImg: require("@/assets/img/admin.png"),
    };
  },
  computed: {
    ...mapGetters(["sidebar", "device"]),
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";

.navbar {
  height: 80px;
  overflow: hidden;
  position: relative;
  background: $themeBg;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-bottom: 2px solid #fff;

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .left-menu {
    float: left;
    height: 100%;
    line-height: 80px;
    padding-left: 20px;
    color: #fff;
    font-size: 26px;
    font-weight: 900;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 80px;
    display: flex;
    &:focus {
      outline: none;
    }
    .search-input {
      margin-right: 80px;
      .el-input__inner {
        border-radius: 18px;
      }
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        display: flex;
        align-items: center;
        position: relative;
        .text-name {
          margin-left: 20px;
          color: #fff;
        }
        .search-input {
          margin-right: 80px;
        }

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          color: #fff;
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 35px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
