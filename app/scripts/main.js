var w = Math.min(document.documentElement.clientWidth, window.innerWidth || 0)
var h = Math.min(document.documentElement.clientHeight, window.innerHeight || 0)

console.log(w)
console.log(h)

var cellSize = 20;
var btnHeight = ($('.toggler').outerHeight()) / 10;
console.log(btnHeight)

var mainCanvas = new terra.Terrarium((w / cellSize), ((h / cellSize) - 0.5), 'playClass', cellSize);

var btn = 1;
var anywhere = $('html')
var toggler = $('.toggler')

// //ANIMATE ONE STEP ON EACH CLICK
// ////////////////////////////////
// anywhere.click(function(){
//   mainCanvas.animate(1);
//   toggler.addClass('hidden');
// })
// ////////////////////////////////

//ANIMATE ON CLICK
//////////////////
anywhere.click(function(){
  if (btn === 1) {
    btn--
    mainCanvas.animate();
    toggler.addClass('hidden')
  } else 

  if (btn === 0) {
    btn++
    mainCanvas.stop();
  }
});
//////////////////




//Large Bacteria
////////////////
terra.registerCreature({
  type: 'plant',
  color: [0, 120, 0],
  size: 10,
  // character: '0',
  initialEnergy: 5,
  maxEnergy: 20,
  wait: function() {
    // photosynthesis :)
    this.energy += 5;
  },
  move: false,
  reproduceLv: 0.4
});
terra.registerCreature({
  type: 'bully',
  color: [241, 156, 15],
  // character: 'X',
  initialEnergy: 50,
  // reproduceLv: 0.6,
  size: 100,
  sustainability: 0,
  reproduceLv: 0.9
});
mainCanvas.grid = mainCanvas.makeGridWithDistribution([['plant', 50], ['bully', 5]]);
////////////////


// //Play
// ////
// terra.registerCreature({
//   type: 'simplePlant',
//   color: [120, 0, 0],
//   size: 10,
//   initialEnergy: 50,
//   // maxEnergy: 100,
//   sustainability: 3,
//   wait: function() {
//     this.energy += 6;
//   },
//   reproduceLv: 5
// })

// terra.registerCreature({
//   type: 'creatureA',
//   color: [0, 120, 0],
//   sustainability: 6,
//   initialEnergy: 500,
//   size: 20
//   // maxEnergy: 500
// })

// terra.registerCreature({
//   type: 'creatureB',
//   color: [0, 0, 255]
// })

// mainCanvas.grid = mainCanvas.makeGridWithDistribution([['creatureA', 10], ['creatureB', 10], ['simplePlant', 80]]);