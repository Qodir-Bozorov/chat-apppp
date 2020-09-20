const rec = new webkitSpeechRecognition()

rec.lang = 'uz-UZ'

const newSpeech = document.getElementById('voiceRecord')

voiceRecorder.onmouseup = function () {
  rec.start()
}

voiceRecorder.onmousedown = function() {
  rec.stop()
}

rec.onresult = function (event) {
  const buyruq = event.results[0][0].transcript

  if (true) {
    const newMsg = document.createElement('LI')
    newMsg.textContent = buyruq
    msgs.appendChild(newMsg)
    newMsg.classList.add("msg-me")
    newMsg.classList.add("msg")
    
    if (newMsg.textContent == "salom" || newMsg.textContent == "Salom") {
      setTimeout(() => {
        const newMsgleft = document.createElement("li")
        newMsgleft.textContent = "salom, qalesan?"
        newMsgleft.classList.add('msg-you')
        newMsgleft.classList.add("msg")
        msgs.appendChild(newMsgleft)
      }, 1000)
    }
  } //sssssssssssss
}