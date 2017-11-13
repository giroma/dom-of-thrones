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
  joffContainer = document.createElement('div')
  joffContainer.id = 'joff-container'
  stage.append(joffContainer)
  joffContainer.style.width = '8%'
  joffContainer.style.position = 'absolute'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '55%'
  joffContainer.style.left = '55%'

  joff = document.querySelector('#joffrey')
  joffContainer.append(joff)
  joff.style.width = '75%'
  joff.style.position = 'absolute'
  joff.style.left = '33%'

  kingWardrobe = document.querySelector('#king')
  joffContainer.append(kingWardrobe)
  kingWardrobe.style.position = 'absolute'
  kingWardrobe.style.bottom = 0
  // Setup Props
  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.left = '31%'
  sword.style.height = '5%'

  sword.style.transform = 'rotateY(150deg)'
  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
  })

  frame(function() {
    sword.style.top = '74%'
    sword.style.left = '36%'
  })

  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
  })

  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '47%'
  })

  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
  })

    frame(function() {
    joffrey.style.top = 0
    joffrey.style.left = '33%'
    joff.style.transform = 'rotateZ(220deg)'
  })

  frame(function() {
    joffrey.style.top = '17%'
    joffrey.style.left = '90%'
    joff.style.transform = 'rotateZ(140deg)'
  })

  frame(function() {
    joffrey.style.top = '35%'
    joffrey.style.left = '160%'
    joff.style.transform = 'rotateZ(260deg)'
  })

  frame(function() {
    joffrey.style.top = '55%'
    joffrey.style.left = '230%'
    joff.style.transform = 'rotateZ(180deg)'
  })

  frame(function() {
    joffrey.style.top = '75%'
    joffrey.style.left = '300%'
    joff.style.transform = 'rotateZ(100deg)'
  })
}
