/**
 * Transform an array of messages from laravel error message bag to be a single html string with breaks
 * @param {Object | Array | String} message
 * @param {String | Boolean} $glue
 * @example
 * message = { username: ['some error', 'maybe another error'], email: ['another error', 'and another error']}
 * message = { username: 'some error', email: 'and another error'}
 * message = ['some error', 'and another error']
 * message = [['some error'], ['and another error']]
 * message = 'some error'
 * @return { String | Array }
 */
export default function transformMessage (message, $glue = '<br/>') {
  // Check if messages are an Object. Arrays also count here
  if (typeof message === 'object') {
    const messageArray = Object.keys(message).reduce((msg, key) => {
      // We flatten the message if its an obj or just pass it if is a string.
      let transformed = transformMessage(message[key], $glue)
      typeof transformed === 'object' && (transformed = [...transformed])
      return msg.concat(transformed)
    }, [])
    return $glue ? messageArray.join($glue) : messageArray
  }
  // its not an object so we just return it.
  return message
}