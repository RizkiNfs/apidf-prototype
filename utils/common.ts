
export const safeJSONparse = (json: string) => {
  try {
    return JSON.parse(json)
  } catch (e) {
    return {}
  }
}