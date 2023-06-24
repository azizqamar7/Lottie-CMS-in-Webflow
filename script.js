playerContainers = document.querySelectorAll('.c_product_card')

playerContainers.forEach((container) => {
  let player = container.querySelector('lottie-player')
  let isPlaying = false

  container.addEventListener('mouseover', () => {
    if (!isPlaying) {
      player.setDirection(1)
      player.play()
      isPlaying = true
    }
  })

  container.addEventListener('mouseleave', () => {
    if (isPlaying) {
      player.setDirection(-1)
      player.play()
      isPlaying = false
    }
  })
})
