var w=Math.min(document.documentElement.clientWidth,window.innerWidth||0),h=Math.min(document.documentElement.clientHeight,window.innerHeight||0);console.log(w),console.log(h);var cellSize=30,bbTerrarium=new terra.Terrarium(w/cellSize,h/cellSize-1,"play",cellSize);terra.registerCreature({type:"plant",color:[0,120,0],size:10,initialEnergy:5,maxEnergy:20,wait:function(){this.energy+=4},move:!1,reproduceLv:.65}),terra.registerCreature({type:"bully",color:[241,196,15],initialEnergy:20,reproduceLv:.6,size:20,sustainability:0}),bbTerrarium.grid=bbTerrarium.makeGridWithDistribution([["plant",50],["bully",5]]),bbTerrarium.animate();