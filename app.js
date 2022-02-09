let packages = [
  { heavy: true, chosenOne: false, priority: false, fragile: true, name: 'Tamra', trackingNumber: '1234abc' },
  { heavy: true, chosenOne: false, priority: true, fragile: false, name: 'Hannah', trackingNumber: '4321cba' },
  { heavy: true, chosenOne: false, priority: false, fragile: false, name: 'Katie', trackingNumber: '1234cba' },
  { heavy: false, chosenOne: false, priority: true, fragile: true, name: 'Lacey', trackingNumber: '4321abc' },
  { heavy: false, chosenOne: false, priority: false, fragile: true, name: 'Mick', trackingNumber: '4231bca' },
  { heavy: false, chosenOne: false, priority: true, fragile: false, name: 'Jeremy', trackingNumber: '1324acb' },
  { heavy: false, chosenOne: false, priority: false, fragile: false, name: 'Mark', trackingNumber: '1423acb' },
]

let sorted = []


function draw() {
  let template = ""
  for (let i = 0; i < sorted.length; i++) {
    const package = sorted[i];
    template += /*html*/`
    <div class="col-12 col-sm-6 col-md-4 p-3 ">
    <div class="p-2 text-center bg-secondary shadow rounded">
      <h4>Package for: ${package.name}</h4>
      <button class="btn btn-info" onclick="select()">Select</button>
    </div>
  </div>
  
`
  }
  document.getElementById('cards').innerHTML = template
}
draw()

function chooseOne() {
  packages.forEach(package => package.chosenOne = false)
  const randomIndex = Math.floor(Math.random() * packages.length)
  packages[randomIndex].chosenOne = true
  console.log(packages[randomIndex]);
  sorted = packages
  draw()


}

function filter(filterProperty) {
  let theChosenPackage = packages.find(package => package.chosenOne)
  sorted = sorted.filter(package => package[filterProperty] === theChosenPackage[filterProperty])
  console.log(theChosenPackage)
  console.log(sorted)
  draw()
}

// function filterFragile() {
//   sorted = sorted.filter(package => package.fragile)
//   draw()
// }

// function filterHeavy() {
//   sorted = sorted.filter(package => package.heavy)
//   draw()
// }


function select() {
  alert("You found your package!")
}

chooseOne()