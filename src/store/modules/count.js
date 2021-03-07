export default {
  namespaced: true,
  state: {
    treeTable: {
      showEditTable: false
    },
    currentTreeData: {},
    editCurrentTreeData: [],
    currentLevel: 0,


  },
  getters: {
    getShowEditTable (state) {
      return state.treeTable.showEditTable;
    },
    getCurrentTreeData (state) {
      return state.currentTreeData;
    }
  },
  mutations: {
    setShowEditBtn (state, value) {
      state.treeTable.showEditTable = value;
    },
    setCurrentTreeData (state, value) {
      state.currentTreeData = value
    },
    setEditCurrentTreeData (state, value) {
      state.editCurrentTreeData = value
    },
    setCurrentLevel (state, value) {
      state.currentLevel = value
    }
  },
  actions: {

  }
}