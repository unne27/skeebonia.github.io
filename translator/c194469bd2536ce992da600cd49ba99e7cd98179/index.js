let english = ['A', 'About', 'Alert', 'Am', 'Atleast', 'Authorities', 'Avoid', 'Building', 'Done', 'Ever', 'Government', 'In', 'Know', 'Me', 'Mine', 'More', 'Must', 'Never', 'Our', 'Other', 'Said', 'Say', 'Skeebonia', 'So', 'Swedish', 'To', 'That', 'Than', 'Them', 'They', 'Those', 'Though', 'Thorough', 'Through', 'Under', 'Understand', 'Understanding', 'Understatement', 'Very', 'Where', 'Weaponry', 'You', 'Your']
let skeebonian = ['I', 'Jafer', 'Fæðür', 'Zor', 'Tarrik', 'Chenðæneri', 'Hürent', 'Ünterzal', 'Keð', 'Tsanchi', 'Gzentelmoð', 'Oer', 'Mben', 'Mü', 'Müs', 'Ið', 'Bœz', 'Mvender', 'Iztr', 'Nteher', 'Zþan', 'Lætr', 'Skeebonia', 'Læ', 'Sedðes', 'La', 'Ghe', 'Zheþ', 'Đen', 'Đei', 'Gæs', 'Tol', 'Tarnzich', 'Tier', 'Gzech', 'Ürðets', 'Ürðetsin', 'Æþünfrich', 'Tgare', 'Üchzal', 'Eðesvarn', 'Te', 'Tes']

function onload() {
    for (let i = 0; i < english.length; i++) {
        english[i] = english[i].toLowerCase()
        skeebonian[i] = skeebonian[i].toLowerCase()
    }
}

function btnclicked() {
    let inputfield = document.getElementById('english')
    let input = inputfield.value.toLowerCase()
    let words = input.split(" ")
    let output = ""

    for (let i = 0; i < words.length; i++) {
        for (let e = 0; e < english.length; e++) {
            if (english[e] == words[i]) {
                output += (skeebonian[e] + " ")
            }
        }
    }

    let outputText = document.getElementById("output")
    outputText.innerText = output

}

document.getElementById("trbtn").onclick = btnclicked