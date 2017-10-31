import transformMessage from '../src'

test('Component should be loaded', () => {
  expect(typeof transformMessage).toBe('function')
})

describe('with default glue', () => {
  test('Should return strings when providing strings', () => {
    const message = 'Name is required',
      expected = 'Name is required'
    expect(transformMessage(message)).toBe(expected)
  })

  test('Should transform objects strings as values', () => {
    const message = { name: 'Name is required', email: 'Email is required' },
      expected = 'Name is required<br/>Email is required'
    expect(transformMessage(message)).toBe(expected)
  })

  test('Should transform objects with arrays of strings', () => {
    const message = {
        name: 'Name is required',
        email: ['Email is required', 'Email is not valid']
      },
      expected = 'Name is required<br/>Email is required<br/>Email is not valid'
    expect(transformMessage(message)).toBe(expected)
  })

  test('Should transform array of strings', () => {
    const message = ['Name is required', 'Email is required', 'Email is not valid'],
      expected = 'Name is required<br/>Email is required<br/>Email is not valid'
    expect(transformMessage(message)).toBe(expected)
  })

  test('Should transform array of arrays of strings', () => {
    const message = [['Name is required', 'Email is required'], 'Email is not valid'],
      expected = 'Name is required<br/>Email is required<br/>Email is not valid'
    expect(transformMessage(message)).toBe(expected)
  })

  test('Should transform object of nested objects', () => {
    const message = {
        name: 'Name is required',
        email: {
          valid: 'Not Valid'
        }
      },
      expected = 'Name is required<br/>Not Valid'
    expect(transformMessage(message)).toBe(expected)
  })

  test('Should transform object of deeply nested objects with arrays as values', () => {
    const message = {
        name: 'Name is required',
        email: {
          fields: ['Invalid', 'Required']
        }
      },
      expected = 'Name is required<br/>Invalid<br/>Required'

    expect(transformMessage(message)).toBe(expected)
  })
})

describe('return flat array', () => {
  test('Should return flat array of items', () => {
    const message = { name: 'Required', email: ['Not Valid', 'Required'] },
      expected = ['Required', 'Not Valid', 'Required']
    expect(transformMessage(message, false)).toEqual(expected)
  })

  test('Should transform object of deeply nested objects to flat array', () => {
    const message = { name: 'Required', email: { fields: ['Not Valid', 'Required'] } },
      expected = ['Required', 'Not Valid', 'Required']
    expect(transformMessage(message, false)).toEqual(expected)
  })
})

describe('with custom glue', () => {
  test('Should transform object of strings to comma separated list', () => {
    const message = { name: 'Name is required', email: 'Email is required' },
      expected = 'Name is required, Email is required'
    expect(transformMessage(message, ', ')).toBe(expected)
  })

  test('Should transform mixed array of numbers, objects, strings', () => {
    const message = [5, 'error', { name: 'Required' }],
      expected = '5,error,Required'
    expect(transformMessage(message, ',')).toBe(expected)
  })
})
