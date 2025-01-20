export const increment = (count: number, setValue: (v: number) => void) => {
  const sum = count + 1
  if (sum <= 100) {
    setValue(sum)
  }

  // return count
}
