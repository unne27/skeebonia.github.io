//let english = ['A', 'About', 'All', 'Alert', 'Am', 'And', 'Anything', 'Are', 'Atleast', 'Authorities', 'Avoid', 'Be', 'Building', 'Discussion', 'Done', 'Ever', 'Government', 'Hello', 'In', 'Information', 'Important', 'Is', 'Know', 'Me', 'Mine', 'More', 'Must', 'Never', 'Not', 'Of', 'Or', 'Our', 'Other', 'Said', 'Say', 'Skeebonia', 'So', 'Swedish', 'To', 'That', 'Than', 'The', 'Them', 'These', 'They', 'Those', 'Though', 'Thorough', 'Through', 'Under', 'Understand', 'Understanding', 'Understatement', 'Very', 'We', 'Why', 'Where', 'Weaponry', 'You', 'Your']
//let skeebonian = ['I', 'Jafer', 'ær', 'Fæðür', 'Zor', 'Shi', 'Tserechi', 'Zar', 'Tarrik', 'Chenðæneri', 'Hürent', 'Fai', 'Ünterzal', 'Œrentich', 'Keð', 'Tsanchi', 'Gzentelmoð', 'Kasching', 'œr', 'Xeþernai', 'Laeðrænich', 'Tei', 'Mben', 'Mü', 'Müs', 'Ið', 'Bœz', 'Mvender', 'Kœ', 'Hæ', 'Bœþür', 'Iztr', 'Nteher', 'Zþan', 'Lætr', 'Skeebonia', 'Læ', 'Sedðes', 'La', 'Ghe', 'Zheþ', 'Ge', 'Đen', 'Ges', 'Đei', 'Gæs', 'Tol', 'Tarnzich', 'Tier', 'Gzech', 'Ürðets', 'Ürðetsin', 'Æþünfrich', 'Tgare', 'Vsach', 'Oib', 'Üchzal', 'Eðesvarn', 'Te', 'Tes']
let english
let skeebonian



function btnclicked() {
    for (let i = 0; i < english.length; i++) {
        english[i] = english[i].toLowerCase()
        skeebonian[i] = skeebonian[i].toLowerCase()
        console.log(english[i])
    }
    let inputfield = document.getElementById('english')
    let input = inputfield.value.toLowerCase().replace(',', '').replace('.', '');;
    let words = input.split(" ")
    let output = ""
    console.log(input)
    console.log(words)
    console.log("Button clicked!")
    console.log(english)
    console.log(skeebonian)
    for (let i = 0; i < words.length; i++) {
        let found = false
        for (let e = 0; e < english.length; e++) {
            
            if (english[e] == words[i]) {
                console.log("Found it!")
                found = true
                output += (skeebonian[e] + " ")
            } else {
                
            }
        }
        if (!found) {
            output += (words[i] + " ")
            console.log("Couldn't find the word!")
        }
    }
    
    let outputText = document.getElementById("output")
    console.log(output)
    outputText.innerText = output

}

function btnclicked2() {
    for (let i = 0; i < english.length; i++) {
        english[i] = english[i].toLowerCase()
        skeebonian[i] = skeebonian[i].toLowerCase()
        console.log(english[i])
    }

    let inputfield = document.getElementById('skeebonian')
    let input = inputfield.value.toLowerCase().replace(',', '').replace('.', '');
    let words = input.split(" ")
    let output = ""
    console.log(input)
    console.log(words)
    console.log("Button clicked!")
    console.log(skeebonian)
    console.log(skeebonian)
    for (let i = 0; i < words.length; i++) {
        let found = false
        for (let e = 0; e < skeebonian.length; e++) {
            if (skeebonian[e] == words[i]) {
                console.log("Found it!")
                found = true
                output += (english[e] + " ")
            } else {
                
            }
        }
        if (!found) {
            output += (words[i] + " ")
            console.log("Couldn't find word!")
        }
    }
    
    let outputText = document.getElementById("output2")
    console.log(output)
    outputText.innerText = output

}

function writewords() {
    let database = firebase.database()
    database.ref('english').set(english)
    database.ref('skeebonian').set(skeebonian)
}

function addwordclicked() {
    let inputenglish = document.getElementById('addenglish').value.toLowerCase()
    let inputskeebonian = document.getElementById('addskeebonian').value.toLowerCase()
    let outputdiv = document.getElementById('addoutput')
    let output = ""

    if (english.includes(inputenglish)) {
        let nobtn = document.getElementById("no")
        let yesbtn = document.getElementById("yes")

        let skeebonianword
        for (let i = 0; i < english.length; i++) {
            if (english[i] == inputenglish) {
                skeebonianword = skeebonian[i]
                break
            }
        }
        output = "That word already exists! It's called " + skeebonianword + ". \n Are you sure you want to replace it?"
        nobtn.style = "display:block;"
        yesbtn.style = "display:block;"
        
    } else {
        english.push(inputenglish)
        skeebonian.push(inputskeebonian)
        writewords()
        output = "Added new word!"
    }

    outputdiv.innerText = output
}

function yes() {
    english.push(inputenglish)
    skeebonian.push(inputskeebonian)
    writewords()
    document.getElementById('addoutput').innerText = "Replaced the word!"
}

function no() {
    let nobtn = document.getElementById("no")
    let yesbtn = document.getElementById("yes")

    nobtn.style = "display:none;"
    yesbtn.style = "display:none;"
    document.getElementById('addoutput').innerText = ""
}

function oonload() {
    const firebaseConfig = {
      
        apiKey: "AIzaSyB6x1W0lM7h2mpMUHSrcP9XpYYzNR70FaY",
    
        authDomain: "skeebonia.firebaseapp.com",
    
        projectId: "skeebonia",
    
        storageBucket: "skeebonia.appspot.com",
    
        messagingSenderId: "647627425513",
    
        appId: "1:647627425513:web:bf50d02c8c080a2566d278",
    
        measurementId: "G-ZFWK41PFHZ"
    
      };
      firebase.initializeApp(firebaseConfig)
      let database = firebase.database()

    let done = false

    var ref1 = database.ref('english')
    ref1.on('value', (snap)=>{
        console.log(snap.val())
        english = snap.val()
        console.log(done)
        if (done) {
            for (let i = 0; i < english.length; i++) {
                english[i] = english[i].toLowerCase()
                skeebonian[i] = skeebonian[i].toLowerCase()
                console.log(english[i])
            }
        } else {
            done = true
        }
    }, ()=>{
        document.body.style = "display:none;"
    })

    var ref2 = database.ref('skeebonian')
    ref2.on('value', (snap)=>{
        console.log(snap.val())
        skeebonian = snap.val()
        console.log(done)
        if (done) {
            for (let i = 0; i < english.length; i++) {
                english[i] = english[i].toLowerCase()
                skeebonian[i] = skeebonian[i].toLowerCase()
                console.log(english[i])
            }
        } else {
            done = true
        }
    }, ()=>{
        document.body.style = "display:none;"
    })






}

window.onload = oonload