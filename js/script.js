// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin edited by david ukiri
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the surface area of a cube.
 */
function calculate () {
  // input
  let formula = parseFloat(document.getElementById('surface area of the cube').value);

  // process
  let area = 6 * (formula ** 2);
area = area.toFixed(2)
  
  // output
  document.getElementById('formula').innerHTML = 'Area is: ' + area + ' cm²'
}
