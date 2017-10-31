/**
 * Flattens a deeply nested array or object
 * @param {Object | Array | String} message
 * @example
 * message = { username: ['some error', 'maybe another error'], email: ['another error', 'and another error']}
 * message = { username: 'some error', email: 'and another error'}
 * message = ['some error', 'and another error']
 * message = [['some error'], ['and another error']]
 * message = 'some error'
 * @return { String | Array }
 */
export function flattenDeep (message) {
  // Check if messages are an Object. Arrays also count here
  if (typeof message === 'object') {
    return Object.keys(message).reduce((msg, key) => {
      // We flatten the message if its an obj or just pass it if is a string.
      let transformed = flattenDeep(message[key])
      typeof transformed === 'object' && (transformed = [...transformed])
      return msg.concat(transformed)
    }, [])
  }
  // its not an object or array so we just return it.
  return message
}

/**
 * Joins an array of values if glue is provided.
 * @param message
 * @param $glue
 * @return {*}
 */
export default function joinFlattened (message, $glue = '<br/>') {
  const flattened = flattenDeep(message)
  if (Array.isArray(flattened)) {
    return $glue ? flattened.join($glue) : flattened
  } else {
    return flattened
  }
}