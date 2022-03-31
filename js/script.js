// Created by: Marshall
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculates area of a triangle.
 */
function calculate () {
  // input
  const length = parseFloat(document.getElementById('pyramid-length').value)
  const width = parseFloat(document.getElementById('pyramid-width').value)
  const height = parseFloat(document.getElementById('pyramid-height').value)

  // process
  const area = (length * width * height) / 3

   // output
  document.getElementById('area').innerHTML = 'Area of the pyramid is: ' + area.toFixed(2) + ' km³'
}