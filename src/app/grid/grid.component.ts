import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  XTurn: boolean;
  boxes: any[];
  gameWinner: String;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.boxes = Array(9).fill(null);
    this.XTurn = true;
    this.gameWinner = null;
  }

  get playerStatus() {
    if (this.XTurn === true){
      return 'X';
    }
    return 'O';
  }

  move(idx: number) {
    if (!this.boxes[idx]){
      this.boxes.splice(idx, 1, this.playerStatus);
      this.XTurn = !this.XTurn;
    }

    this.gameWinner = this.calculateWinner();
  }

  //Algorithm adapted from React's Tic-Tac-Toe Tutorial
  calculateWinner(){
    const possibilities = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];
    for (let i = 0; i < possibilities.length; i++){
      const [x, y, z] = possibilities[i];
      if (this.boxes[x] === this.boxes[y] && this.boxes[x] === this.boxes[z] && this.boxes[x]){
        return this.boxes[x];
      }
    }
    return null;
  }

}