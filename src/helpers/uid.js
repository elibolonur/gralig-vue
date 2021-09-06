const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}

export const uid = (times = 3, prefix = '') => {
  let uid = prefix

  for (let i = 0; i < times; i++) {
    uid += s4()
  }

  return uid
}
