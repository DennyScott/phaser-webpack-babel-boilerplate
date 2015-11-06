import '../lib/pixi.js';
import '../lib/phaser.js';
import test from './test';

test(() => {
  console.log('runs after the test');
});

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
}

function create() {
}

function update() {
}
