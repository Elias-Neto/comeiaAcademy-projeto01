document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault()
})

function sendForWhatsApp() {
  const name = document.querySelector(
    "form .input-wrapper:nth-child(1) input"
  ).value
  const email = document.querySelector(
    "form .input-wrapper:nth-child(2) input"
  ).value
  const phone = document.querySelector(
    "form .input-wrapper:nth-child(3) input"
  ).value
  const message = document.querySelector(
    "form .input-wrapper:nth-child(4) textarea"
  ).value

  const text = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`
  const hashedText = encodeURIComponent(text)
  const whatsappNumber = "5581998789321"
  const url = `https://wa.me/${whatsappNumber}?text=${hashedText}`

  window.open(url, "_blank")
}

// Create and Add Mask in Phone Input

function inputPhoneMask(telefone) {
  const texto = telefone.value
  const textoApenasNumeros = texto.replace(/\D/g, "").substring(0, 11)

  let telefoneFormatado = textoApenasNumeros.replace(
    /^(\d{2})(\d{5})(\d{4})/,
    "($1) $2-$3"
  )

  if (textoApenasNumeros.length < 11) {
    telefoneFormatado = textoApenasNumeros.replace(
      /^(\d{2})(\d{4})(\d{0,4})/,
      "($1) $2-$3"
    )
  }

  telefone.value = telefoneFormatado
}

const inputTel = document.querySelector(
  "form .input-wrapper:nth-child(3) input"
)

inputTel.addEventListener("input", function () {
  inputPhoneMask(this)
})
