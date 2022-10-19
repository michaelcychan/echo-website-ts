import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


describe('opening the webpage', () => {
  test('title', () => {
    render(<App />);
    const header = document.getElementsByClassName('App-header')[0].innerHTML;
    expect(header).toBe('<h1>Echo Site.</h1>')
  })

  test('returns the same one word', () => {
    const page = render(<App />);
    const input = document.getElementById('shout')
    fireEvent.change(input, {target: {value: 'this'}})
    const echo = document.getElementsByClassName('echo')[0].innerHTML
    expect(echo).toBe('this')
  })

  test('returns a modified text', () => {
    const page = render(<App />);
    const input = document.getElementById('shout')
    fireEvent.change(input, {target: {value: 'This is an echo cave'}})
    const echo = document.getElementsByClassName('echo')[0].innerHTML
    expect(echo).toBe('This is an echo cave... cave... cave...')
  })

})
