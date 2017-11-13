function scene2() {
  console.log('scene 2 executing');
  // Setup Stage
  castle = document.querySelector('#castle')
  stageImg = stage.querySelector('#stage-img')
  castleImgSrc = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc)
  // Setup Cast
  nedContainer = document.createElement('div')
  stage.append(nedContainer)
  ned = document.querySelector('#ned')
  nedContainer.append(ned)
  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)
  ned.style = "border: none; width: 70%; position: absolute; top: 0px;"
  nedContainer.style = "position: absolute; width: 10%; height: 37%; top: 55%; left: 25%; border: none; background: none;"
  leather.style = "border: none; position: absolute; bottom: 0px;"
    // Character 1

  // Character 2

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
