/**
 * Created by 明阳 on 2014/12/27.
 * updated by 軒 on 2019/12/15.
 */
// 具体的抽奖程序
localStorage.unlucky = localStorage.unlucky || "{}";

function getLuckyStar() {
  let unlucky = JSON.parse(localStorage.unlucky);
  let try_cnt = 0;
  let luckyStar;
  let luckyName;
  do {
    luckyStar = stars[parseInt(stars.length * Math.random())];
    luckyName = luckyStar[1];
    luckyStar = luckyStar[0];
    ++try_cnt;
    if (try_cnt > 100000) {
      for (let i = 0; i <= stars.length; ++i) {
        // if (i === stars.length) {
        //   // 没有用alert输出，注意打开控制台
        //   console.log("Can not find lucky star!");
        //   luckyStar = "00000000";
        //   luckyName = "按D重置";
        //   return {
        //     id: luckyStar,
        //     name: luckyName
        //   };
        // }
        if (unlucky[stars[i][0]]) continue;
        luckyName = luckyStar[1];
        luckyStar = luckyStar[0];
        break;
      }
    }
  } while (unlucky[luckyStar]);
  unlucky[luckyStar] = 1;
  localStorage.unlucky = JSON.stringify(unlucky);
  if (luckyName.length === 2) {
    // 两个加空格
    luckyName = luckyName[0] + "&nbsp&nbsp" + luckyName[1];
  }else{
    // 过长进行截断
    if (luckyName.length > 4) {
      luckyName = luckyName.substr(0,4);
    }
    // 四个进行加空格和换行
    if (luckyName.length === 4) {
      luckyName = luckyName[0] + "&nbsp&nbsp" + luckyName[1] + '\n' + luckyName[2] + "&nbsp&nbsp" + luckyName[3];
    }
  }
  return {
    id: luckyStar,
    name: luckyName
  };
}

