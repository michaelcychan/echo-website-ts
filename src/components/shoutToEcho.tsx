export const shoutToEcho = (shout: string): string => {
  const textArray: string[] = shout.trim().split(' ')
  if (textArray.length > 2) {
    textArray[textArray.length - 1] += '...' 
    for (let i = 0; i < 2; ++i){
      textArray.push(textArray[textArray.length - 1])
    }
  }
  return textArray.join(' ')
}