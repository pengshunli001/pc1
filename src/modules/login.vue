<template>
  <div class="home">
    <div @click="$router.push('/home')">跳转到主页</div>
    <!-- 头部 -->
    <div class="hearder">
      <div class="hearder-top"></div>
      <div class="hearder-nav">
        <div class="w">
          <div class="left">
            <ul>
              <li v-for="(item, index) in hearderNav" :key="index">
                <a href="###"> {{ item }} </a>
              </li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li><a href="###">登录 </a></li>
              <li><a href="###">注册 </a></li>
              <li><a href="###">消息通知</a></li>
              <li>
                <a href="###"
                  ><i class="el-icon-shopping-cart-2"></i>&nbsp购物车&nbsp(0)</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="site-header">
      <div class="w">
        <div class="log"></div>
        <ul>
          <li v-for="(item, index) in siteHeaderNav" :key="index">
            <a href="###">{{ item }} </a>
          </li>
        </ul>
        <div class="search">
          <!-- 使用浮动，解决不在一行的问题 -->
          <input placeholder="请输入关键字" type="text" />
          <span class="button"><i class="el-icon-search"></i></span>
        </div>
      </div>
    </div>
    <!-- swiper -->
    <div class="home-hero-container">
      <div class="container w">
        <div class="top">
          <div class="left">
            <ul>
              <li v-for="(item, index) in swiperNavBar" :key="index">
                <a href="###">{{ item }} </a>
              </li>
            </ul>
          </div>
          <div class="right"></div>
        </div>
        <div class="bottom">
          <div class="left">
            <ul>
              <li>
                <a href="###">
                  <i class="el-icon-edit"></i>
                  <span>小米秒杀</span>
                </a>
              </li>
              <li>
                <a href="###">
                  <i class="el-icon-edit"></i>
                  <span>小米秒杀</span>
                </a>
              </li>
              <li>
                <a href="###">
                  <i class="el-icon-edit"></i>
                  <span>小米秒杀</span>
                </a>
              </li>
              <li>
                <a href="###">
                  <i class="el-icon-edit"></i>
                  <span>小米秒杀</span>
                </a>
              </li>
              <li>
                <a href="###">
                  <i class="el-icon-loading"></i>
                  <span>小米秒杀</span>
                </a>
              </li>
              <li>
                <a href="###">
                  <i class="el-icon-edit"></i>
                  <span>小米秒杀</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li>
                <img src="../assets/xiaomi/1.jpg" alt="" />
              </li>
              <li>
                <img src="../assets/xiaomi/2.jpg" alt="" />
              </li>
              <li>
                <img src="../assets/xiaomi/3.jpg" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-container">
      <div class="footer w">
        <div class="footer-top">
          <ul>
            <li v-for="(item, index) in footerNavaBar" :key="index">
              <a href="###"><i :class="icon[index]"></i> &nbsp{{ item }} </a>
            </li>
          </ul>
        </div>
        <div class="footer-bottom">
          <div class="left">
            <dl>
              <dt>帮助中心</dt>
              <dd>账户理</dd>
              <dd>账户管理</dd>
              <dd>账户理</dd>
              <dd>账户管理</dd>
            </dl>
            <dl>
              <dt>帮助中心</dt>
              <dd>账户理</dd>
              <dd>账户管理</dd>
              <dd>账户理</dd>
              <dd>账户管理</dd>
            </dl>
            <dl>
              <dt>帮助中心</dt>
              <dd>账户管理</dd>
              <dd>账户管</dd>
              <dd>账户管理</dd>
              <dd>账户管理</dd>
            </dl>
            <dl>
              <dt>帮助中心</dt>
              <dd>账户管理</dd>
              <dd>账户管理</dd>
              <dd>账户</dd>
              <dd>管理</dd>
            </dl>
            <dl>
              <dt>帮助中</dt>
              <dd>账户理</dd>
              <dd>账户理</dd>
              <dd>账户理</dd>
              <dd>账户理</dd>
            </dl>
          </div>
          <div class="right">
            <p class="title">400-100-5678</p>
            <p>8:00-18:00（仅收市话费）</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TreeTable from '../components/table/treeTable'
import Tree from '../components/tree/tree'

export default {
  data() {
    return {
      hearderNav: [
        '小米商城',
        '小米商城',
        '小米商城',
        '小米商城',
        '小米商城',
        '小米商城',
        '小米商城',
        '小米商城',
        '小米商城',
        '小米商城',
        '小米商城',
        '小米商城',
        '小米商城',
      ],
      siteHeaderNav: [
        '小米手机',
        'Redim手机',
        '电视',
        '笔记本',
        '家电',
        '路由器',
        '智能硬件',
        '服务',
        '社区',
      ],
      swiperNavBar: [
        '小米手机',
        'Redim手机',
        '电视',
        '笔记本',
        '家电',
        '路由器',
        '智能硬件',
        '服务',
        '社区',
        '社区',
      ],
      footerNavaBar: [
        '预约维修服务',
        '7天无理由退回',
        '电视',
        '笔记本',
        '家电',
      ],
      icon: [
        'el-icon-edit',
        'el-icon-share',
        'el-icon-eleme',
        'el-icon-user',
        'el-icon-user-solid',
      ],
    }
  },
  components: {
    TreeTable,
    Tree,

  },
}
</script>
<style lang='less' scoped>
.home {
  background: rgba(245, 245, 245);
  //  height: 3000px;
  .w {
    width: 1226px;
    margin: auto;
  }
  .hearder {
    .hearder-top {
      height: 120px;
      background: pink;
      background: url(../assets/xiaomi/4.jpg) no-repeat top center;
      background-size: 100% 100%;
    }
    .hearder-nav {
      height: 40px;
      line-height: 40px;
      background: #000;
      .left {
        width: 794px;
        ul {
          li {
            float: left;
            color: #b0b0b0;
            a {
              padding: 0 5px;
              border-right: 1px solid #424242;
              &:hover {
                color: #fff;
              }
            }
          }
        }
      }
      .right {
        float: right;
        ul {
          li {
            float: left;
            float: left;
            color: #b0b0b0;
            &:last-child:hover {
              background: #fff;
              a {
                color: red;
              }
            }
            &:hover a {
              color: #fff;
            }
            a {
              padding: 0 5px;
            }
          }
        }
      }
    }
  }
  .site-header {
    height: 100px;
    background: #fff;
    .w {
      width: 1226px;
      padding-top: 20px;
    }
    .log {
      float: left;
      width: 55px;
      height: 55px;
      background: pink;
      margin-right: 20px;
    }
    ul {
      float: left;
      li {
        float: left;
        height: 48px;
        line-height: 48px;
        a {
          color: #000;
          padding: 25px 10px;
          &:hover {
            border-bottom: 2px solid rgb(238, 140, 28);
          }
        }
      }
    }
    .search {
      float: right;
      width: 300px;
      height: 50px;
      border: 1px solid #e0e0e0;
      input {
        float: left;
        border-right: 1px solid #e0e0e0;
        outline: 0;
        height: 50px;
        line-height: 50px;
        padding-left: 10px;
        box-sizing: border-box;
        width: 245px;
      }
      .button {
        float: left;
        width: 55px;
        display: block;
        height: 50px;
        line-height: 50px;
        text-align: center !important;
        &:hover {
          background: rgb(236, 98, 48);
          color: #fff;
          font-size: 16px;
        }
      }
    }
  }
  .home-hero-container {
    height: 670px;
    background: #fff;
    .container {
      background: #000;
      height: 460px;
      background: url(../assets/xiaomi/1.webp) no-repeat top center;
      background-size: 100% 100%;
      .top {
        .left {
          width: 234px;
          background: rgba(151, 155, 159, 0.5);
          margin-bottom: 10px;
          ul {
            padding: 20px 0;

            li {
              width: 234px;
              height: 42px;
              line-height: 42px;
              text-align: center;
              &:hover {
                background: coral;
                a {
                  color: #fff;
                }
              }
              a {
                padding-left: 20px;
                color: #fff;
              }
            }
          }
        }
      }
      .bottom {
        height: 170px;
        .left {
          float: left;
          width: 234px;
          height: 170px;
          background: rgb(190, 186, 186);
          ul {
            padding: 2px 3px;
            li {
              float: left;
              width: 76px;
              height: 82px;
              a {
                padding-top: 18px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #fff;
                span {
                  display: block;
                  padding: 5px;
                }
              }
            }
          }
        }
        .right {
          float: left;
          width: 990px;
          height: 170px;
          overflow: hidden;
          ul {
            width: 990px;
            box-sizing: border-box;
            li {
              float: left;
              width: 316px;
              height: 170px;
              margin-left: 14px;
              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
  .footer-container {
    height: 332px;
    background: #ffff;
    .footer {
      height: 332px;
      .footer-top {
        height: 80px;
        padding: 27px 0;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        ul {
          li {
            float: left;
            height: 25px;
            line-height: 25px;
            a {
              padding: 0 40px;
              margin: 0 45px;
            }
          }
        }
      }
      .footer-bottom {
        padding: 40px 0;
        overflow: hidden;
        display: flex;
        .left {
          border-right: 1px solid #ccc;
          flex: 2;
          dl {
            float: left;
            width: 160px;
            dt {
              font-size: 15px;
              line-height: 1.25;
              color: #424242;
              margin-bottom: 10px;
            }
            dd {
              font-size: 13px;
              height: 25px;
              line-height: 1.25;
              color: #424242;
            }
          }
        }
        .right {
          flex: 1;
          padding-left: 20px;
          p {
            font-size: 12px;
            line-height: 20px;
            height: 20px;
          }
          .title {
            font-size: 20px;
            color: rgb(231, 139, 27);
          }
        }
      }
    }
  }
}
</style>