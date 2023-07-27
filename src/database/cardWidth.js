export const responsiveCardWidth = () => {
  return window.innerWidth > 1024 ? ((window.innerWidth - 130) * 16.666 / 100)
    : window.innerWidth > 768 ? ((window.innerWidth - 130) * 20 / 100)
      : window.innerWidth > 600 ? ((window.innerWidth - 130) * 25 / 100)
        : ((window.innerWidth - 35) * 33.333 / 100)
}

export const responsiveRowCardWidth = () => {
  return window.innerWidth > 1024 ? ((window.innerWidth - 142) * 16.666 / 100)
    : window.innerWidth > 768 ? ((window.innerWidth - 139) * 20 / 100)
      : window.innerWidth > 600 ? ((window.innerWidth - 133) * 25 / 100)
        : ((window.innerWidth - 70) * 33.333 / 100)
}