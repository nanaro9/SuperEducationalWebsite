const API = 'http://127.0.0.1:81'

let myMsg = document.querySelector('.myMsg')
let chatMsg = document.querySelector('.chatazinas')
let vards = document.querySelector('.vards')

function sutitZinu(){
    console.log('sutitzinu() darbojas')
    chatMsg.innerHTML += '<br/>' + myMsg.value
    fetch(API+'/send/'+vards.value+'/'+myMsg.value)
}