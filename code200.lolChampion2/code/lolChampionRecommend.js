module.exports.function = function lolChampionRecommend (position) {
  const console = require('console');
  const TopChampions = ['가렌', '갈리오', '갱플랭크',]
  const MidChampions = ['모르가나', '아리', '카타리나',]
  var result = ''
  console.log(position)
  if (position == '탑') {
    result = TopChampions[Math.floor(Math.random() * TopChampions.length)];
  } else {
    result = MidChampions[Math.floor(Math.random() * MidChampions.length)];
  }
  return result
}
