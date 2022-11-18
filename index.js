var credentials = [
    {name: "Mali", saldo: 200, password: "123"},
    {name: "Gera", saldo: 290, password: "Yhuboalguien2004"},
    {name: "Maui", saldo: 67, password: "Nosequemasponer1"},
]

const formDom = document.getElementById('formulario')
const withdraw = document.getElementById("withdraw")
const buttonMinus = document.getElementById("add1")
const deposit = document.getElementById("deposit")
const buttonAdd = document.getElementById("add2")
const bankOptions = document.getElementById('bank-form')

var saldo; 

function visibility(){
    let login = document.getElementById('login')
    login.classList.remove('login')
    login.classList.add('visibility')
    let bank = document.getElementById('bank-options')
    bank.classList.remove('visibility')
    bank.classList.add('bank-options')
}

function modElemento (name){
    let span = document.getElementById('welcome-sign')
    span.innerHTML = `Welcome to OwlBank ${name}`
}

function mostrarError(){
    let span = document.getElementById('error-user')
    span.classList.remove('error-user')
    span.classList.add('error')
    setInterval(()=>{
        span.classList.remove('error')
        span.classList.add('error-user')
    }, 5000)
}

function validar (us, pass) {
    for (var i = 0; i < 4; i++) {
        if (us==credentials[i].name && pass == credentials[i].password) {
            visibility()
            modElemento(credentials[i].name)
            window.saldo = i
        }
        else if (us!=credentials[i].name || pass!= credentials[i].password) {
            mostrarError()
        }
    }
}

formDom.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    let userdom = document.getElementById('user').value
    let passdom = document.getElementById('password').value
    validar(userdom, passdom)
})


bankOptions.addEventListener('submit', (evento)=>{
    evento.preventDefault()
})

function checkBalance (){
    let balance = document.getElementById("bank-options")
    balance.classList.remove('bank-options')
    balance.classList.add('visibility')
    let bank = document.getElementById('bankOpts')
    bank.classList.remove('visibility')
    bank.classList.add('bank-options')
    let a = document.getElementById('balance-opts')
    a.classList.remove('visibility')
    a.classList.add('bank-options')
    let banker = document.getElementById('balance')
    banker.innerHTML = `${credentials[saldo].saldo}`
}

function accountDeposit (){
    let balance = document.getElementById("bank-options")
    balance.classList.remove('bank-options')
    balance.classList.add('visibility')
    let bank = document.getElementById('bankOpts')
    bank.classList.remove('visibility')
    bank.classList.add('bank-options')
    let a = document.getElementById('balance-opts2')
    a.classList.remove('visibility')
    a.classList.add('bank-options')
    let banker = document.getElementById('balance1')
    banker.innerHTML = `${credentials[saldo].saldo}`
}

function withdraMoney (){
    let balance = document.getElementById("bank-options")
    balance.classList.remove('bank-options')
    balance.classList.add('visibility')
    let bank = document.getElementById('bankOpts')
    bank.classList.remove('visibility')
    bank.classList.add('bank-options')
    let a = document.getElementById('balance-opts3')
    a.classList.remove('visibility')
    a.classList.add('bank-options')
    let banker = document.getElementById('balance2')
    banker.innerHTML = `${credentials[saldo].saldo}`
}

buttonAdd.addEventListener('click', (event)=>{
    number = deposit.value
    credentials[saldo].saldo = credentials[0].saldo + Number(number)
    if (credentials[saldo].saldo > 990){
        alert("error, you can't have more than $990")
        credentials[saldo].saldo = 990
    }
    let banker = document.getElementById('balance1')
    banker.innerHTML = `${credentials[saldo].saldo}`
})

buttonMinus.addEventListener('click', (event)=>{
    number = withdraw.value
    credentials[saldo].saldo = credentials[0].saldo - Number(number)
    if (credentials[saldo].saldo < 10){
        alert("error, you can't have less than $10")
        credentials[saldo].saldo = 10
    }
    let banker = document.getElementById('balance2')
    banker.innerHTML = `${credentials[saldo].saldo}`
})


function goback(){
    let a = document.getElementById('bankOpts')
    a.classList.remove('bank-options')
    a.classList.add('visibility')
    let b = document.getElementById('balance-opts')
    b.classList.remove('bank-options')
    b.classList.add('visibility')
    let c = document.getElementById('balance-opts2')
    c.classList.remove('bank-options')
    c.classList.add('visibility')
    let d = document.getElementById('balance-opts3')
    d.classList.remove('bank-options')
    d.classList.add('visibility')
    let e = document.getElementById('bank-options')
    e.classList.remove('visibility')
    e.classList.add('bank-options')
}

function logoff() {
    let bank = document.getElementById('bank-options')
    bank.classList.remove('bank-options')
    bank.classList.add('visibility')
    let login = document.getElementById('login')
    login.classList.remove('visibility')
    login.classList.add('login')
}



