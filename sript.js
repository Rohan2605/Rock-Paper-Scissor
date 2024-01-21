let userScore = 0
let compScore = 0
let userSelect
let compSelect


// Computer choice
compSelection = () =>{
    const compChoices = ['rock', 'paper', 'scissor']
    let randIdx = Math.floor(Math.random()*3)
    // console.log(randIdx)
    return compChoices[randIdx]
}

// User choice
let userChoices = document.querySelectorAll(".choice")
    userChoices.forEach(choice => {
    choice.addEventListener("click", () => {
        userSelect = choice.getAttribute("id")
        playgame(userSelect)
    })
});


// Playing game
playgame = (userSelect) =>{
    compSelect = compSelection()
    console.log(`your choice is ${userSelect}`)
    console.log(`computer choice is ${compSelect}`)

    let Your_result = true
    if(userSelect === compSelect){
        console.log("Game Draw")
        document.querySelector(".msg-container").style.backgroundColor = "black"
        document.querySelector("#msg").textContent = "Game Draw"
    }
    else if(userSelect === 'rock'){
        Your_result = (compSelect === 'paper') ? false : true
        Your_result ? userScore++ : compScore++
        winnerUpdate(Your_result)
    }
    else if(userSelect === 'paper'){
        Your_result = (compSelect === 'rock') ? true : false
        Your_result ? userScore++ : compScore++
        winnerUpdate(Your_result)
    }
    else if(userSelect === 'scissor'){
        Your_result = (compSelect === 'paper') ? true : false
        Your_result ? userScore++ : compScore++
        winnerUpdate(Your_result)
    }
    updateScore()
}

updateScore = () =>{
    document.querySelector("#user-score").textContent = userScore
    document.querySelector("#comp-score").textContent = compScore
}

winnerUpdate = (Your_result) => {
    if(Your_result){
        document.querySelector("#msg").textContent = `You won, your ${userSelect} beats ${compSelect}`
        document.querySelector(".msg-container").style.backgroundColor = "green"
    }
    else{
        document.querySelector("#msg").textContent = `You lost, ${compSelect} beats your ${userSelect}`
        document.querySelector(".msg-container").style.backgroundColor = "red"
    }
}




