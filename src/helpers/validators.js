export const validateColor = (val) => {
  const valid = val === '' || val === 'blue' || val === 'yellow' || val === 'green' || val === 'red'

  if (!valid) {
    console.error('[Vue warn]: prop.color is not valid!')
    console.error(`[Vue warn]: Accepted values: blue | yellow | green | red`)
  }

  return valid
}
