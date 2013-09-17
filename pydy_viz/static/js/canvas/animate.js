
Canvas.prototype.startAnimation = function(){
        
    for(var key in JSONObj.frames){
      Canvas.prototype._animate(key, Canvas.prototype.animationCounter);
      }
      Canvas.prototype.animationCounter++; 
      $("#currentFrame").html("Current Frame: " + Canvas.prototype.animationCounter);
      
      Canvas.prototype.animationID = requestAnimationFrame(Canvas.prototype.startAnimation);
      if(Canvas.prototype.animationCounter >= Canvas.prototype.timeSteps)
          if($("#isLooped").is(':checked')) Canvas.prototype.animationCounter = 0; 
          else { 
          cancelAnimationFrame(Canvas.prototype.animationID);          
          Canvas.prototype.animationCounter = 0;  
          }         
  
};

Canvas.prototype._animate = function(key, counter)
      {
          console.log(Canvas.prototype.scene.children[4].children[key]);
          var _element = JSONObj.frames[key].simulation_matrix[counter];
          var matrix = new THREE.Matrix4();
          matrix.elements = _element;
          // TODO Replace exact number by getObjectbyName ..
          console.log("key, counter, element:" + key, counter, _element);
          
          Canvas.prototype.scene.getObjectByName("frames").children[key].matrix.identity();
          Canvas.prototype.scene.getObjectByName("frames").children[key].applyMatrix(matrix)
          
       };


Canvas.prototype.pauseAnimation = function(){
    cancelAnimationFrame(Canvas.prototype.animationID);
    Canvas.prototype.animationID = undefined;

};
Canvas.prototype.stopAnimation = function(){
    Canvas.prototype.animationCounter = 0;
    cancelAnimationFrame(Canvas.prototype.animationID);
    Canvas.prototype.animationID = undefined;
    
    for(var key in JSONObj.frames){
          Canvas.prototype._animate(key, 0);
    }
                
};

Canvas.prototype._transform = function(key, i){
    
    var _element = 
            JSONObj.frames[key].simulation_matrix[i];
    this.frames.children[key].matrix.elements = _element;
    };

