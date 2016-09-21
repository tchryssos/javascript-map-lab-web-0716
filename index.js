const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null },
];

let sortedRobots = robots.map(function(robot){
  let newBot=Object.assign({},robot);

  if (knownDecepticons.includes(robot.name)){
    newBot.alliance="decepticon"
  } else {
    newBot.alliance="autobot"
  }
  return newBot
})

let coloredZebraStripes=zebraStripes.map(function(stripe, index){
  let newStripe=Object.assign({}, stripe)
  if (index % 2 === 0 || index === 0){
    newStripe.color="black"
  } else {
    newStripe.color="white"
  }
  return newStripe
})
