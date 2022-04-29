  //Bubble Class
  class bubble {

  //Construct bubble object
  constructor(name,age,gender,count,x,y,speed) {

      //resultName
      this.n = name;
      //resultAge
      this.a = age;
      //resultCountry
      this.c = count;
      //result gender
      this.gender = gender;

      if (gender == "female"){
        this.gender = 'rgb(253, 221, 92)'
      }
      else if (gender == "male"){
        this.gender = 'rgb(175, 201, 207)'
      };

      //x-position 
      this.x = x;
      //y-position 
      this.y =y;
      //speed of x and y
      this.xspeed = speed;
      this.yspeed = speed;
  
    }

    //diaplsy bubble
    display() {
      //radius of ellipse change according to the value of age
      let r = this.a*4;
      noStroke();
      //fill ellipse with random color
      fill(this.gender);
      //Create ellipse at the position r
      ellipse(this.x, this.y, r, r);
      fill(0);
      //write age
      textSize(this.a);
      textAlign(CENTER);
      //write name
      text(this.n,this.x,this.y+(this.a-10)/2);
      //write country
      textSize((this.a)/2);
      text(this.c,this.x,this.y-(this.a-10)/2);
      textSize((this.a)/3);
      text(this.a+' yr',this.x,this.y-r/4);
    }

    //Animate Bubbles
    move() {
       //Declare half size of the radius
      let halfr = this.a*2;
       //When bump into wall, change direction
      if(this.x > (width-halfr)) {
        this.xspeed = this.xspeed * -1;
      }
      else if(this.x < halfr) {
        this.xspeed = this.xspeed * -1;
      }
      
      if(this.y > (height-halfr)) {
        this.yspeed = this.yspeed * -1;
      }
      else if(this.y < halfr) {
        this.yspeed = this.yspeed * -1;
      }
      
      this.x = this.x + this.xspeed;
      this.y = this.y + this.yspeed;
  
  }
}