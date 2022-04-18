export const AUDIOS = []

export const fillAudios = (audios, keys) => {
  keys.forEach((key => {
    AUDIOS.push({
      code: key.code,
      audio: new Audio(`./sounds/${key.name}.wav`)
    })
  }))
}