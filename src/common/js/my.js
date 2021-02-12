
//getWinScroll 获取系统滚动条滚过去的距离，函数返回一个对象，对象的left属性保存横向滚动条滚过去的距离
//document.getElementsByTagName('html')[0]=document.documentElement
//document.getElementsByTagName('body')[0]=document.body
export function getWinScroll () {
  return {
    left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  }
}
//setWinScroll设置系统滚动条滚过去的距离，参数num是设置的值setWinScroll(0)
export function setWinScroll (num) {
  window.pageYOffset = num;
  document.documentElement.scrollTop = num;
  document.body.scrollTop = num
}
//getScreen()是获取浏览器可视化区域的宽度和高度，可以直接调用返回对象的width和height来获取
export function getScreen () {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  }
}
//获取元素距离文档边缘的距离 
export function getEleToDoc (ele) {
  var obj = {
    left: 0,
    top: 0
  }
  var oTarget = ele;
  while (oTarget) {
    if (oTarget == ele) {
      //当oTarget就是ele的时候，是不用获取边框的
      obj.left += oTarget.offsetLeft;
      obj.top += oTarget.offsetTop
    } else {
      obj.left += oTarget.offsetLeft + oTarget.clientLeft;
      obj.top += oTarget.offsetTop + oTarget.clientTop;
    }
    oTarget = oTarget.offsetParent
  }
  return obj
}


//获取行间样式，以及非行间样式(ele,'width')
export function getStyle (obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr]
  } else {
    return getComputedStyle(obj, null)[attr]
  }
}
//specialCss 可以设置transform属性：css(ele,'scale',2);可以获取 css(ele,'scale') 不带单位
export function transformCss (node, type, val) {
  // debugger;
  console.log("node", node)
  if (typeof node == 'object' && typeof node['transform'] == 'undefined') {
    node['transform'] = {}
  }
  if (arguments.length >= 3) {
    //设置需要线设置才能获取
    node['transform'][type] = val;
    var text = '';
    for (var item in node['transform']) {
      switch (item) {
        case 'translateX':
        case 'translateY':
          text += item + "(" + node['transform'][item] + "px) ";
          break;
        case 'rotate':
        case 'rotateX':
        case 'rotateY':
          text += item + "(" + node['transform'][item] + "deg) ";
          break;
        case 'scale':
        case 'scaleX':
        case 'scaleY':
          text += item + "(" + node['transform'][item] + ") ";
          break;
      }
    }
    console.log('text', text)
    node.style.transform = text;

  } else if (arguments.length == 2) {
    var val = node['transform'][type];
    if (typeof val == undefined) {
      switch (type) {
        case 'translateX':
        case 'translateY':
        case 'rotate':
        case 'rotateX':
        case 'rotateY':
          val = 0;
          break;
        case 'scaleX':
        case 'scaleY':
          val = 1;
          break;
      }
    }
    return val
  }

}
