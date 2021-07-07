let UUID = 1
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function UniqueID () {
  const getID = () => {
    UUID++
    return UUID
  }

  return {
    getID
  }
}