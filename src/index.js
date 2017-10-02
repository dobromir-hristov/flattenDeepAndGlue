/**
 * Transform an array of messages from laravel error message bag to be a single html string with breaks
 * @param {Object | Array | String} message
 * @param {String} $glue
 * @example
 * message = { username: ['some error', 'maybe another error'], email: ['another error', 'and another error']}
 * message = { username: 'some error', email: 'and another error'}
 * message = ['some error', 'and another error']
 * message = [['some error'], ['and another error']]
 * message = 'some error'
 * @return { String }
 */
export default function transformMessage (message, $glue = '<br/>') {
  // Check if messages are an Object of array items
  if (typeof message === 'object') {
    return Object.keys(message).reduce((msg, key) => {
      // We flatten the message if its an obj or just pass it if is a string.
      if (typeof message[key] === 'object') {
        msg.push(...message[key])
      } else {
        msg.push(message[key])
      }
      return msg
    },[]).join($glue)
  }
  // its not an object so we just return it.
  return message
}