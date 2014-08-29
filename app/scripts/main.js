// the demo running at the top of this page

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

console.log(w)
console.log(h)

var bbTerrarium = new terra.Terrarium((w / 10), (h / 11));

terra.registerCreature({
  type: 'plant',
  color: [0, 120, 0],
  size: 10,
  initialEnergy: 5,
  maxEnergy: 20,
  wait: function() {
    // photosynthesis :)
    this.energy += 1;
  },
  move: false,
  reproduceLv: 0.65
});

terra.registerCreature({
  type: 'brute',
  color: [0, 255, 255],
  maxEnergy: 50,
  initialEnergy: 10,
  size: 20
});

terra.registerCreature({
  type: 'bully',
  color: [241, 196, 15],
  initialEnergy: 20,
  reproduceLv: 0.6,
  sustainability: 3
});

bbTerrarium.grid = bbTerrarium.makeGridWithDistribution([['plant', 50], ['brute', 5], ['bully', 5]]);
bbTerrarium.animate();