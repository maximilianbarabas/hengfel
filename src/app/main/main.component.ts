/*
* File: main.component.ts
* Author: Maximilian Barabas
* Copyright: M B
* Group: Szoft_II_N
* Date: 2022-04-18
* Github: https://github.com/maximilianbarabas/
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  radius = new FormControl('')
  height = new FormControl('')

  surface = new FormControl('')

  resultVisible = false
  resetVisible = false

  constructor() { }

  onKeyUp(event: any) { 
    if (event.key == "Enter") {
      this.eventHandler()
    } 
  }

  eventHandler() { 
    let radius = Number(this.radius.value)
    let height = Number(this.height.value)

    let surface = this.calcSurface(radius, height)

    this.resultVisible = true
    this.resetVisible = true

    this.surface.setValue(String(surface + " cm"))
  }

  calcSurface(radius: number, height: number) {

    let sum = radius + height
    let result = 2*Math.PI*radius*sum

    return result
  }

  reset() { 
    this.radius.setValue('')
    this.height.setValue('')

    this.resultVisible = false
    this.resetVisible = false
  }

  ngOnInit(): void {
  }

}
