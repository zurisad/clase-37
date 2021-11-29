class Quiz {
  constructor(){
    this.title2 = createElement('h1')
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
    // this.title.hide();
    // this.input1.hide();
    // this.button.hide();
    // this.input2.hide();

    // //escribe aquí el código para cambiar el color de fondo 
    background("yellow");

    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
    this.title2.html("Resultados");
    this.title2.position(350, 0);

    //llama aquí a getContestantInfo( )
    //getContestantInfo();

    //escribe la condición para comprobar si contestantInfor no está indefinido 
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("*Nota: ¡El concursante que respondió correctamente, está resaltado en color verde!",130,230);
    }

    //escribe aquí el código para agregar una nota

    //escribe el código para resaltar al concursante que respondió correctamente
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
        fill("green");
      else
        fill("red");
      
    }
  }

}
