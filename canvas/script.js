

//this entire thing does the cursor part of my website!
    var al = [];
    var bg;
    function setup() {
        bg = loadImage("background.jpg");
        createCanvas( windowWidth, windowHeight );
    }

    function draw() {
    background(bg);
    
    
    strokeWeight( 1 ); // Restore strokeWeight 
    
    /*
    * Array to store reference to each Rays() object 
    */
    al.push( new Rays() );
    
    for( var i = 0; i < al.length; i++ ) {
        var r = al[i];
        r.applyForce( new p5.Vector( random( -0.5, 0.5 ), random( 0.01, 0.05 ) ) );
        r.update();
        r.render();
        if( r.isDead() )
        al.shift();
    }
    }

    function windowResized() {
    resizeCanvas( windowWidth, windowHeight );
    }

    function Rays() {
    this.counter = 0;
    this.position = new p5.Vector( mouseX, mouseY );
    this.velocity = new p5.Vector( 0, 0 );
    this.acceleration = new p5.Vector( 0, 0 );
    this.lifeSpan = 1;
    }

    /*
    * Takes p5.Vector object as the initial force 
    * This force provides the required acceleration
    */
    Rays.prototype.applyForce = function( force ) {
    acceleration = force;
    }

    /*
    * Calculates and updates
    *
    * 1. Velocity
    * 2. Position
    */
    Rays.prototype.update = function() {
    this.velocity.add( this.acceleration );
    this.position.add( this.velocity );
    this.lifeSpan -= 0.06;
    }

    /*
    * Displays line on the document
    */
    Rays.prototype.render = function() {
    var c = color( 'rgba(49, 67, 96, ' + this.lifeSpan + ')' );
    stroke( c ); 
    line( this.position.x, this.position.y, pmouseX, pmouseY );
    }

    /*
    * Helps in determining whether the shift()
    * method should be called or not
    *
    * [This method is important, if not used the array will
    * be filled infinitely]
    */
    Rays.prototype.isDead = function() {
    if( this.lifeSpan < 0.1 )
        return true;
    else
        return false;
    }


//this is where i want to put the interactive background?? maybe


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("imgProjects").style.right="250px";
    //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("imgProjects").style.right="0px";
    //document.body.style.backgroundColor = "white";
}


