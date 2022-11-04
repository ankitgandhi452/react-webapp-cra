const SPACE_COEFICIENT = 4

const dsSpacing = {
  zero: 0 / SPACE_COEFICIENT,
  deepfreeze: 2 / SPACE_COEFICIENT,
  quickfreeze: 4 / SPACE_COEFICIENT,
  glacial: 8 / SPACE_COEFICIENT,
  frostbite: 12 / SPACE_COEFICIENT,
  bittercold: 16 / SPACE_COEFICIENT,
  cool: 20 / SPACE_COEFICIENT,
  mild: 24 / SPACE_COEFICIENT,
  pleasant: 28 / SPACE_COEFICIENT,
  warm: 32 / SPACE_COEFICIENT,
  tepid: 36 / SPACE_COEFICIENT,
  tropical: 40 / SPACE_COEFICIENT,
  hot: 44 / SPACE_COEFICIENT,
  blazing: 48 / SPACE_COEFICIENT,
  molten: 64 / SPACE_COEFICIENT,
  superheated: 80 / SPACE_COEFICIENT,
  meltdown: 96 / SPACE_COEFICIENT,
  whitehot: 112 / SPACE_COEFICIENT,
  plasma: 128 / SPACE_COEFICIENT
}

export { SPACE_COEFICIENT, getSpacingPX }

export default dsSpacing

function getSpacingPX (multipler) {
  return `${SPACE_COEFICIENT * multipler}px`
}
