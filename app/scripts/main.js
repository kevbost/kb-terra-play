var w = Math.min(document.documentElement.clientWidth, window.innerWidth || 0)
var h = Math.min(document.documentElement.clientHeight, window.innerHeight || 0)

console.log(w)
console.log(h)

var cellSize = 30

var bbTerrarium = new terra.Terrarium((w / cellSize), ((h / cellSize)-1), 'play', cellSize);

terra.registerCreature({
  type: 'plant',
  color: [0, 120, 0],
  size: 10,
  initialEnergy: 5,
  maxEnergy: 20,
  wait: function() {
    // photosynthesis :)
    this.energy += 4;
  },
  move: false,
  reproduceLv: 0.65
});

// terra.registerCreature({
//   type: 'brute',
//   color: [0, 255, 255],
//   // maxEnergy: 50,
//   initialEnergy: 10,
//   size: 20,
//   // reproduceLv: 0.65,
//   move: false
// });

terra.registerCreature({
  type: 'bully',
  color: [241, 196, 15],
  initialEnergy: 50,
  // reproduceLv: 0.6,
  size: 100,
  sustainability: 0
});

// bbTerrarium.grid = bbTerrarium.makeGridWithDistribution([['plant', 50], ['brute', 5], ['bully', 5]]);
// bbTerrarium.animate();

// terra.registerCreature({
//   type: 'play',
//   color: [0, 255, 255],
//   initialEnergy: 20,
//   size: 40,
//   sustainability: 4
// })

bbTerrarium.grid = bbTerrarium.makeGridWithDistribution([['plant', 50], ['bully', 5]]);
bbTerrarium.animate();