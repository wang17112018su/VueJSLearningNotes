new Vue({
    el: '#app',
    data: {
        playerHealth : 100,
        monsterHealth : 100,
        isGameRunning : false,
        turns : []
    },

    methods: {
        startGame: function(){
            this.isGameRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns=[]
        },

        attack: function(){
            let damage = this.calculateDamage(3,11);
            this.monsterHealth -= damage;
            this.turns.unshift({isPlayer:true, text:'Player hits Monster for ' + damage });
            if(this.checkWin()){
                this.monsterAttack();
            }

        },

        specialAttack: function(){

            let damage = this.calculateDamage(10,20);
            this.monsterHealth -= damage;
            this.turns.unshift({isPlayer:true, text:'Player hits Monster for ' + damage });
            if(this.checkWin()){
                this.monsterAttack();
            }

        },

        heal: function(){
            if(this.playerHealth<=90){
                this.playerHealth += 10;
            }else{
                this.playerHealth = 100;
            }
            this.turns.unshift({isPlayer:true, text:'Player heals for 10'});
            this.monsterAttack();

        },

        giveUp: function(){
            this.isGameRunning = false;
        },

        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm("You Won! New Game?")) {
                    this.startGame();
                } else {
                    this.isGameRunning = false;
                }
            }
            else if (this.playerHealth <=0) {
                if (confirm("You Lost! New Game?")) {
                    this.startGame();
                } else {
                    this.isGameRunning = false;
                }
            }else{
                return true;
            }

        },

        calculateDamage: function(min,max){

            return Math.max(Math.floor(Math.random()*max)+1,min);

        },

        monsterAttack: function(){
            let damage = this.calculateDamage(5,15);
            this.playerHealth -= damage;
            this.turns.unshift({isPlayer:false, text:'Monster hits Player for ' + damage });
            this.checkWin();
        }
    }



});
