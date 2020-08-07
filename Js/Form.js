class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("CAR RACING GAME")
        title.position(550,0);
        var input = createInput("NAME")
        var button = createButton('Play')
        var greeting = createElement('h3')
        input.position(550,160);
        button.position(550,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name)
            player.updateCount(playerCount);
            greeting.html ("HELLO" + name)
            greeting.position(550,160);

        })
    }
}