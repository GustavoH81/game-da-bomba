function updateGame(scene) {
/* Movimentação do Player*/
if(teclado.left.isDown) {
    player.setVelocityX(-300);
   player.anims.play("left", true);
    
 }else if(teclado.right.isDown){
    player.setVelocityX(300);
    player.anims.play("right", true);
    
 }else {
    player.setVelocityX(0)
    player.anims.play("parado", true);
 }
}