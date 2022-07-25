
const myNo = Math.trunc(Math.random() * 10) + 1;
console.log(myNo);
const getMessage = (message)=>{
     document.querySelector('.message').textContent = message
}

let score = 5
let hiScore = 0
document.querySelector('.check').addEventListener('click', () => {
    
    if(score > hiScore ){
        hiScore = score +1
        document.querySelector('.hiscore').textContent = hiScore
    }
    if(score > 0 ){
    
        const no1 = Number(document.querySelector('.enterNumber').value)
        document.querySelector('.showbox').textContent =  no1
        console.log(`com${myNo} mynumber ${no1}`);
        if(myNo === no1){
                score++
                document.querySelector('.score').textContent = score
                            getMessage('You win')  
                document.querySelector('body').style.background = '#60b347'
                // document.querySelector('.showbox').style.fontSize = '50px'
                    }
        else if (!no1){
                            getMessage('No number 😁 idoit')  
        }
        // else if(myNo > no1){
        //         score--
        //             document.querySelector('.score').textContent = score
        //             document.querySelector('.message').textContent = 'Too low'
        //     }
        // else if(myNo < no1){
        //         score--;
        //         document.querySelector('.score').textContent = score
        //         document.querySelector('.message').textContent = 'Too high'
        // }
        else{
            score--
            document.querySelector('.score').textContent = score
                            getMessage(myNo > no1 ? 'Too low' : 'Too high') 
        }
        
        }else{
                            getMessage('Game Over 😥') 
        }

})