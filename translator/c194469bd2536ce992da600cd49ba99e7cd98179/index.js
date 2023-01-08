let english = ['A', 'About', 'Alert', 'Am', 'Atleast', 'Authorities', 'Avoid', 'Building', 'Done', 'Ever', 'Government', 'Hello', 'In', 'Know', 'Me', 'Mine', 'More', 'Must', 'Never', 'Our', 'Other', 'Said', 'Say', 'Skeebonia', 'So', 'Swedish', 'To', 'That', 'Than', 'Them', 'They', 'Those', 'Though', 'Thorough', 'Through', 'Under', 'Understand', 'Understanding', 'Understatement', 'Very', 'Where', 'Weaponry', 'You', 'Your']
let skeebonian = ['I', 'Jafer', 'Fæðür', 'Zor', 'Tarrik', 'Chenðæneri', 'Hürent', 'Ünterzal', 'Keð', 'Tsanchi', 'Gzentelmoð', 'Kasching', 'Oer', 'Mben', 'Mü', 'Müs', 'Ið', 'Bœz', 'Mvender', 'Iztr', 'Nteher', 'Zþan', 'Lætr', 'Skeebonia', 'Læ', 'Sedðes', 'La', 'Ghe', 'Zheþ', 'Đen', 'Đei', 'Gæs', 'Tol', 'Tarnzich', 'Tier', 'Gzech', 'Ürðets', 'Ürðetsin', 'Æþünfrich', 'Tgare', 'Üchzal', 'Eðesvarn', 'Te', 'Tes']


function btnclicked() {
    let inputfield = document.getElementById('english')
    let input = inputfield.value.toLowerCase()
    let words = input.split(" ")
    let output = ""
    console.log(input)
    console.log(words)
    console.log("Button clicked!")
    console.log(english)
    console.log(skeebonian)
    for (let i = 0; i < words.length; i++) {
        for (let e = 0; e < english.length; e++) {
            if (english[e] == words[i]) {
                console.log("Found it!")
                output += (skeebonian[e] + " ")
            } else {
                console.log("Couldn't find word!")
            }
        }
    }
    
    let outputText = document.getElementById("output")
    console.log(output)
    outputText.innerText = output

}

function btnclicked2() {
    let inputfield = document.getElementById('skeebonian')
    let input = inputfield.value.toLowerCase()
    let words = input.split(" ")
    let output = ""
    console.log(input)
    console.log(words)
    console.log("Button clicked!")
    console.log(skeebonian)
    console.log(skeebonian)
    for (let i = 0; i < words.length; i++) {
        for (let e = 0; e < skeebonian.length; e++) {
            if (skeebonian[e] == words[i]) {
                console.log("Found it!")
                output += (english[e] + " ")
            } else {
                console.log("Couldn't find word!")
            }
        }
    }
    
    let outputText = document.getElementById("output")
    console.log(output)
    outputText.innerText = output

}

function oonload() {
    for (let i = 0; i < english.length; i++) {
        english[i] = english[i].toLowerCase()
        skeebonian[i] = skeebonian[i].toLowerCase()
        console.log(english[i])
    }




}

window.onload = oonload