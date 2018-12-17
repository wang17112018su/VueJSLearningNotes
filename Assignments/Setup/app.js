new Vue({
  el: '#app',
  data: {
      
      startGame : true,
      yourLife : 100,
      monsterLife : 100,
      monsterLifeBar : {
          width:"100%",
          'background-color': "green", 
          margin: 0,
          color: "white",
          
      },
      yourLifeBar : {
          width:"100%",
          'background-color': "green", 
          margin: 0,
          color: "white",
          
      },
    
      attackLog : [],
      
  },
    methods: {
        
        restart: function(){
            
            this.yourLife = 100;
                this.monsterLife = 100;
                this.monsterLifeBar.width="100%";
                this.monsterLifeBar.color="white";
                this.yourLifeBar.width="100%";
                this.yourLifeBar.color="white";
                this.attackLog=[];
            
        },
        
        runningAway: function(){
            this.startGame = confirm('Are you sure you want to runaway from this?')
            if(this.startGame){
                this.restart();
            }
        },
        
        hitPoints: function(isSpecialAttack){
            
            if(isSpecialAttack){
                return Math.floor(Math.random()*10)*2;
            }else{
                return Math.floor(Math.random()*10);
            }
            
        },
        
        attack: function(hitPoints){
            this.monsterLife -= hitPoints;
            this.attackLog.push("you attacked monster for "+hitPoints);
            if(this.monsterLife>0){
                this.monsterCounter();
                this.monsterLifeBar.width=this.monsterLife + "%";
            }else{
                alert("You Win!!");
                this.monsterLife = 0;
                this.monsterLifeBar.width="0%";
                this.monsterLifeBar.color="red"
            }
        },
        
        monsterCounter: function(){
            let monsterAttack = Math.floor(Math.random()*10);
            this.yourLife -= monsterAttack;
            this.attackLog.push("monster attacked you for "+monsterAttack);
            if(this.yourLife<=0){
                alert("You Lose!!");
                this.yourLife = 0;
                this.yourLifeBar.width="0%";
                this.yourLifeBar.color="red"
            }else{
                this.yourLifeBar.width=this.yourLife + "%";;
            }
            
        },
        
        heal : function (){
            let healPoints = Math.floor(Math.random()*11);
            this.yourLife += healPoints;
            this.attackLog.push("you healed for "+healPoints);
            this.monsterCounter();
        }
    }
  
});