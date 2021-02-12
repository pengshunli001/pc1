export default {
  leftNav: [
    {
      'id': '101',
      'authName': '用户管理',
      'children': [
        {
          'id': '110',
          'authName': '用户列表',
          'path': "/user",
          'children':[]
        }

      ],
    },
    {
      'id': '102',
      'authName': '权限管理',
      'children': [
        {
          'id': '115',
          'authName': '角色列表',
          'path': "/role",
          'children':[]
        },
        {
          'id': '111',
          'authName': '权限列表',
          'path': "/rights",
          'children':[]
        },
        

      ],
    },
    {
      'id': '103',
      'authName': '商品管理',
      'children': [
        {
          'id': '112',
          'authName': '商品列表',
          'path': "/goods",
          'children':[]
        },
        {
          'id': '113',
          'authName': '单品列表',
          'path': "/list",
          'children':[]
        },
        {
          'id': '114',
          'authName': '商品分类',
          'path': "/category",
          'children':[]
        }

      ],
    },

  ],
}