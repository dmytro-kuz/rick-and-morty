export default function numberSequence( length = 10, start = 0){
  return Array(length).fill(0).map((element, index) => index + 1 + start).join(',')
}
