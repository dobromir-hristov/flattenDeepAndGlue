import test from 'ava'
import transformMessage from '../dist/objectToBrSeparatedString'

test('Component should be loaded', t => {
  t.is(typeof transformMessage, 'function', 'Imports the function properly')
})

test('Should leave strings alone', t => {
  const message = 'Name is required',
    expected = 'Name is required'
  t.is(transformMessage(message), expected)
})

test('Should transform objects with keys and strings', t => {
  const message = {name: 'Name is required', email: 'Email is required'},
    expected = 'Name is required<br/>Email is required'
  t.is(transformMessage(message), expected)
})

test('Should transform objects with keys and arrays of strings', t => {
  const message = {name: 'Name is required', email: ['Email is required', 'Email is not valid']},
    expected = 'Name is required<br/>Email is required<br/>Email is not valid'
  t.is(transformMessage(message), expected)
})

test('Should transform array of strings', t => {
  const message = ['Name is required','Email is required', 'Email is not valid'],
    expected = 'Name is required<br/>Email is required<br/>Email is not valid'
  t.is(transformMessage(message), expected)
})

test('Should transform array of arrays of strings', t => {
  const message = [['Name is required','Email is required'], 'Email is not valid'],
    expected = 'Name is required<br/>Email is required<br/>Email is not valid'
  t.is(transformMessage(message), expected)
})

test('Should transform object of strings to comma separated list', t => {
  const message = {name: 'Name is required', email: 'Email is required'},
    expected = 'Name is required, Email is required'
  t.is(transformMessage(message, ', '), expected)
})