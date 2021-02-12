module.exports = {
  root: true,
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": 'module',//类型为module，因为代码使用了使用了ECMAScript模块
    "parser": 'babel-eslint'//解析器，这里我们使用babel-eslint
  },
  env: {
    browser: true,//预定义的全局变量，这里是浏览器环境
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  //extends: 'standard', //扩展，可以通过字符串或者一个数组来扩展规则
  // required to lint *.vue files
  plugins: [
   'html',
   'vue'
  ],
  // add your custom rules here
  'rules': {
    //"no-empty": 1,
    "no-alert": 1,
    "comma-dangle": ["error", "never"],
    //"no-irregular-whitespace": 1, //不允许出现不规则的空格
    "default-case": 1, //在switch语句中需要有default语句
    "eqeqeq": ["error", "smart"], //比较的时候使用严格等
    "no-else-return": 1,
    //"no-multi-spaces": 2, //不允许出现多余的空格
    "no-redeclare": 2, //不允许变量重复声明
    "radix": 2, //使用parseInt时强制使用基数来指定是十进制还是其他进制
    "vars-on-top": 1, //var必须放在作用域顶部
    "no-undef-init": 2, //不允许初始化变量时给变量赋值undefined
    "no-undefined": 2, //不允许把undefined当做标识符使用
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}], //不允许有声明后未使用的变量或者参数
    "no-use-before-define": [2, "nofunc"], //不允许在未定义之前就使用变量"indent": 2, //强制一致的缩进风格
    "key-spacing": [1, {"beforeColon": false, "afterColon": true}], //对象字面量中冒号的前后空格
    "no-trailing-spaces": 1, //一行最后不允许有空格
    "no-extra-parens": 1, //不允许出现多余的括号
    "semi-spacing": [2, {"before": false, "after": true}], //分后前后空格
    "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}], //函数定义时括号前的空格
    "space-infix-ops": [1, {"int32Hint": true}], //操作符周围的空格
    "keyword-spacing": 1, //关键字前后的空格
    "no-var": 1, //使用let和const代替var
    "no-multiple-empty-lines": [2, {"max": 2}], //空行最多不能超过两行
    "semi": [1, "always"]
    // "ecmaVersion": 6,
    // "ecmaFeatures": {
    //   "experimentalObjectRestSpread": true
    // },
  }
}