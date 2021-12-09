// 十二时辰按照地支，十二属相排列
let tzArr = [
  "子",
  "丑",
  "寅",
  "卯",
  "辰",
  "巳",
  "午",
  "未",
  "申",
  "酉",
  "戌",
  "亥",
];
// 十二时辰对应
let sdArr = [
  "夜半",
  "鸡鸣",
  "平旦",
  "日出",
  "食时",
  "隅中",
  "日平",
  "日昳",
  "晡时",
  "日入",
  "黄昏",
  "人定",
];
// 一个时辰为八刻
let skArr = ["一", "二", "三", "四", "五", "六", "七", "八"];

// 默认获取当前时辰，时刻
const getShiChen = (date = new Date()) => {
  const h = date.getHours()
  const m = date.getMinutes()
  let shichenStr = '<span>' +
    tzArr[parseInt(String(h / 2))] +
    "时" +
    sdArr[parseInt(String(h / 2))] + "</span><span>"
  // 判断时刻 
  if (h % 2 === 0) {
    shichenStr += skArr[parseInt(String(m / 15))];
  } else if (h % 2 === 1) {
    shichenStr += skArr[parseInt(String(m / 15)) + 4];
  }
  return shichenStr + "刻" + "</span>";
};

export {getShiChen};
