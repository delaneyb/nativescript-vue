const frames = {}

export function setFrame(id, frame) {
  frames[id] = frames[id] || []
  frames[id].unshift(frame)
}

export function getFrame(id) {
  return frames[id] && frames[id][0]
}

export function deleteFrame(id, frame) {
  return frames[id].splice(frames[id].indexOf(frame), 1)
}
