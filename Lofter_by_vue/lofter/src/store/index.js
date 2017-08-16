// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    // 用于存储用户信息 ： user_name user_id user_head
    uinfo: [],
    // 用于判断是否已经登录
    hasLogin: false,
    // 用于存储已登录用户个人界面文章
    uarticle: [],
    uArticleNum: 0, // 用户文章总数
    // 用于存储已在store中存储了的文章数量
    totalArtNum: '',
    uLastPage: '', // 用户文章最后一页
    // 所有已加载文章
    allArticle: [],
    allLastPage: '', // 所有文章最后一页
    totalAllArtNum: 0, // 已加载文章数量
    // 目前点击需要显示的评论
    curComment: '',
    curArtId: '',
    curArticleIndex: '',
    // 存储用户标签
    tag: []
  },
  mutations: {
    // 设置用户信息
    setUinfo (state, info) {
      state.uinfo = info
      state.hasLogin = true
    },
    // 设置用户个人界面文章
    setUarticle (state, article) {
      // 使用push方法将 新添加的article添加到 uarticle
      // 例如 uarticle=[1,2] article=[3,4]，使用下述方法后，会变成[1,2,3,4]
      console.log(article)
      state.uarticle.push(...article.data)
      state.totalArtNum = state.uarticle.length
      state.uArticleNum = article.total
      state.uLastPage = article.last_page
    },
    // 设置目前点击微博的评论到评论页面
    setCurComment (state, comment) {
      state.curComment = comment
      console.log(state.curComment)
    },
    // 设置所有用户文章
    setAllArticle (state, article) {
      // 使用push方法将 新添加的article添加到 uarticle
      // 例如 uarticle=[1,2] article=[3,4]，使用下述方法后，会变成[1,2,3,4]
      state.allArticle.push(...article.data)
      state.totalAllArtNum = state.allArticle.length
      console.log(state.totalAllArtNum)
      state.allLastPage = article.last_page
    },
    // 保存标签
    tagSave (state, value) {
      if (state.tag.indexOf(value) === -1) {
        state.tag.push(value)
      }
    },
    // 删除上一个标签
    tagRemove (state) {
      if (state.tag !== []) {
        state.tag.splice(-1, 1)
      }
    },
    // 清空标签
    tagClear (state) {
      state.tag = []
    }
  }
})
export default Store
