// Your Code Here
let reps = [ 10, 13, 12 ]
renderChart(reps)
//let reps = []
//let reps = []
let newNumberOfReps = window.prompt('Enter your number of reps: ')
//let reps = []
//let newNumberOfReps = window.prompt('Enter your number of reps: ')
reps.push(newNumberOfReps)
renderChart(reps)
let serializedReps = JSON.stringify(reps)