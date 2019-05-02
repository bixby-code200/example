module.exports.function = function lolChampionRecommend () {
  const champions = ['가렌', '갈리오', '갱플랭크',]
  const result = champions[Math.floor(Math.random() * champions.length)];
  return result
}
