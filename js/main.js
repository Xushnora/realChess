let arr = []

for(let i = 1; i<=8; i++){
    for(let j = 1; j<=8; j++){
     let obj = {
         x: j,
         y:i
     }
     arr.push(obj)
    }
}

let elUl = document.querySelector('.list')
let corX = document.querySelector('.cor-x');
let corY = document.querySelector('.cor-y');

// buttons

let ot = document.querySelector('.ot');
let fil = document.querySelector('.fil');
let shoh = document.querySelector('.shoh');
let vazir = document.querySelector('.vazir');
let piyoda = document.querySelector('.piyoda');
let tora = document.querySelector('.tora');

let x = 0;
let y = 0;

arr.forEach((e,i)=>{
let li = document.createElement('li')

li.classList.add('a'+e.x , 'b'+e.y, 'chesItem')
    if((e.x + e.y) % 2 == 0) {
        li.style.background = `#f0d9b5`;
        li.style.background = `url(../imgs/wood.jpg)`;
    } else {
        li.style.background = `#f0d9b5`;
        li.style.background = `url(../imgs/wood2.jpg)`;
    }

li.textContent=`${e.x}, ${e.y}`
elUl.appendChild(li)
})

let chesItems = document.querySelectorAll('.chesItem');

chesItems.forEach((e, i) => {
    e.addEventListener('mouseover', () =>{
        corX.textContent = `x = ${e.textContent[0]}`;
        corY.textContent = `y = ${e.textContent[3]}`;
        x = e.textContent[0];
        y = e.textContent[3];
    })
});

chesItems.forEach((item) => {
     chesItems.forEach((i) =>{
        if(item.textContent[0] == 2 && item.textContent[3] == 8){
            item.classList.add('blackHorse1');
            // i.addEventListener('click', (c)=> {
            //     console.log("yashilga kirdi");
            //     let xx = c.target.classList[0].split('')[1];
            //     let yy = c.target.classList[1].split('')[1];
            //     chesItems.forEach(itmm => {
            //         let xxx = itmm.classList[0].split('')[1];
            //         let yyy = itmm.classList[1].split('')[1];
        
            //         if(xxx == ((xx - 0) + 1)  && yyy == ((yy - 0) - 2) || 
            //             xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 1) ||
            //             xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 1) || 
            //             xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 2) || 
            //             xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 2) ||
            //             xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 1) ||
            //             xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 1) || 
            //             xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 2)
            //         ) {
            //             itmm.classList.add('green');
            //                 if(xxx == ((xx - 0) + 1)  && yyy == ((yy - 0) - 2) || 
            //                     xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 1) ||
            //                     xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 1) || 
            //                     xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 2) || 
            //                     xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 2) ||
            //                     xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 1) ||
            //                     xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 1) || 
            //                     xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 2)
            //                 ){
            //                     itmm.classList.add('green');
            //                     itmm.addEventListener('click', ()=>{
            //                         itmm.classList.add('blackHorse1');
            //                         if(xxx == ((xx - 0) + 1)  && yyy == ((yy - 0) - 2) || 
            //                         xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 1) ||
            //                         xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 1) || 
            //                         xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 2) || 
            //                         xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 2) ||
            //                         xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 1) ||
            //                         xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 1) || 
            //                         xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 2)){
    
            //                             itmm.classList.add('green');
            //                         } else {
            //                             itmm.classList.remove('green');
            //                             itmm.classList.remove('blackHorse1');
            //                         }
            //                     }) 
            //                     itmm.classList.remove('blackHorse1');
            //                 } else {
            //                     itmm.classList.remove('green');
            //                 }
            //         } else {
            //             itmm.classList.remove('green');
            //         }
            //     })
        
            
            // })
        }
    })
    if(item.textContent[0] == 1 && item.textContent[3] == 8){
        item.classList.add('tora1');
    }
    if(item.textContent[0] == 3 && item.textContent[3] == 8){
        item.classList.add('fil1');
    }
    if(item.textContent[0] == 4 && item.textContent[3] == 8){
        item.classList.add('shoh');
    }
    if(item.textContent[0] == 5 && item.textContent[3] == 8){
        item.classList.add('vazir');
    }
    if(item.textContent[0] == 6 && item.textContent[3] == 8){
        item.classList.add('fil2');
    }
    if(item.textContent[0] == 7 && item.textContent[3] == 8){
        item.classList.add('blackHorse2');
    }
    if(item.textContent[0] == 8 && item.textContent[3] == 8){
        item.classList.add('tora2');
    }
    if(item.textContent[0] == 1 && item.textContent[3] == 7){
        item.classList.add('piyoda1');
    }
    if(item.textContent[0] == 2 && item.textContent[3] == 7){
        item.classList.add('piyoda2');
    }
    if(item.textContent[0] == 3 && item.textContent[3] == 7){
        item.classList.add('piyoda3');
    }
    if(item.textContent[0] == 4 && item.textContent[3] == 7){
        item.classList.add('piyoda4');
    }
    if(item.textContent[0] == 5 && item.textContent[3] == 7){
        item.classList.add('piyoda5');
    }
    if(item.textContent[0] == 6 && item.textContent[3] == 7){
        item.classList.add('piyoda6');
    }
    if(item.textContent[0] == 7 && item.textContent[3] == 7){
        item.classList.add('piyoda7');
    }
    if(item.textContent[0] == 8 && item.textContent[3] == 7){
        item.classList.add('piyoda8');
        chesItems.forEach(item =>{
            item.addEventListener('click', (c)=> {
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
                    if(yy != 8) {
                        if(xxx == xx && yyy == ((yy - 0) - 1) || xxx == xx && yyy == ((yy - 0) - 2)) {
                            console.log('kirdi');
                            itmm.classList.add('green');
                            item.classList.add('piyoda8');
                            if(yy != 7) {
                                if(xxx == xx && yyy == ((yy - 0) - 1)) {
                                    itmm.classList.add('green');
                                   
                                    itmm.addEventListener('click', ()=>{
                                        if(xxx == xx && yyy == ((yy - 0) - 1)) {
                                            item.classList.add('piyoda8');
                                        } else {
                                            item.classList.remove('piyoda8');
                                        }
                                        item.classList.remove('piyoda8');
                                    })
                                } else {
                                    itmm.classList.remove('green');
                                    item.classList.remove('piyoda8');   
                                }
                            }
                        } else {
                            itmm.classList.remove('green');
                        }
                    } 
                    else {
                        itmm.classList.remove('green');
                    }
                })
            })
        })
    }
})

// chesItems.forEach(items =>{
//     items.addEventListener('click', () =>{
//         items.classList.remove('piyoda8');
//     })
// })
// chesItems.forEach(items =>{
//     items.addEventListener('click', () =>{
//         items.classList.remove('piyoda7');
//     })
// })
// chesItems.forEach(items =>{
//     items.addEventListener('click', () =>{
//         items.classList.remove('piyoda6');
//     })
// })

ot.addEventListener('click', (e)=>{
    e.currentTarget.style.background = "gold";
    chesItems.forEach((item, index) =>{
        item.addEventListener('click', (e) => {
            // console.log(x, y);
            let btn = document.createElement('button');
            btn.classList = 'btnHorse';
            btn.innerHTML = `<img src="imgs/ot.svg" alt="ot">`
            e.currentTarget.appendChild(btn);

            e.currentTarget.addEventListener('mouseover', (c) =>{
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];

                chesItems.forEach(item => {
                    let xxx = item.classList[0].split('')[1];
                    let yyy = item.classList[1].split('')[1];

                    if(xxx == ((xx - 0) + 1)  && yyy == ((yy - 0) - 2) || 
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 1) ||
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 2) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 2) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 1) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 1) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 2)
                    ) {
                        // console.log('ok');
                        item.classList.add('green');
                    } else {
                        item.classList.remove('green');
                    }
                })
            
            })
        })
    })
})

function horseFunc(){
    chesItems.forEach(item =>{
        if(item.textContent[0] == 2 && item.textContent[3] == 8){
            item.addEventListener('click', (c)=> {
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
    
                    if(xxx == ((xx - 0) + 1)  && yyy == ((yy - 0) - 2) || 
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 1) ||
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 2) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 2) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 1) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 1) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 2)
                    ) {
                        itmm.classList.add('green');
                        // itmm.classList.add('blackHorse1');
                    } else {
                        itmm.classList.remove('green');
                        // itmm.classList.remove('blackHorse1');
                    }
                })
    
            
            })
        }
        if(item.textContent[0] == 1 && item.textContent[3] == 6){
            item.addEventListener('click', (c)=> {
                item.classList.add('blackHorse1');
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
    
                    if(xxx == ((xx - 0) + 1)  && yyy == ((yy - 0) - 2) || 
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 1) ||
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 2) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 2) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 1) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 1) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 2)
                    ) {
                        itmm.classList.add('green');
                    } else {
                        itmm.classList.remove('green');
                    }
                })
    
            
            })
        }
        if(item.textContent[0] == 3 && item.textContent[3] == 6){
            item.addEventListener('click', (c)=> {
                item.classList.add('blackHorse1');
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
    
                    if(xxx == ((xx - 0) + 1)  && yyy == ((yy - 0) - 2) || 
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 1) ||
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 2) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 2) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 1) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 1) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 2)
                    ) {
                        itmm.classList.add('green');
                    } else {
                        itmm.classList.remove('green');
                    }
                })
    
            
            })
        }
        if(item.textContent[0] == 1 && item.textContent[3] == 5){
            item.addEventListener('click', (c)=> {
                item.classList.add('blackHorse1');
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
    
                    if(xxx == ((xx - 0) + 1)  && yyy == ((yy - 0) - 2) || 
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 1) ||
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 2) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 2) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 1) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 1) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 2)
                    ) {
                        itmm.classList.add('green');
                    } else {
                        itmm.classList.remove('green');
                    }
                })
    
            
            })
        }
    })
}

function horseFunc2(){
    chesItems.forEach(item =>{
        if(item.textContent[0] == 7 && item.textContent[3] == 8){
            item.addEventListener('click', (c)=> {
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
    
                    if(xxx == ((xx - 0) + 1)  && yyy == ((yy - 0) - 2) || 
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 1) ||
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 2) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 2) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 1) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 1) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 2)
                    ) {
                        itmm.classList.add('green');
                        // itmm.classList.add('blackHorse1');
                    } else {
                        itmm.classList.remove('green');
                        // itmm.classList.remove('blackHorse1');
                    }
                })
    
            
            })
        }
        if(item.textContent[0] == 8 && item.textContent[3] == 6){
            item.addEventListener('click', (c)=> {
                item.classList.add('blackHorse1');
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
    
                    if(xxx == ((xx - 0) + 1)  && yyy == ((yy - 0) - 2) || 
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 1) ||
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 2) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 2) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 1) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 1) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 2)
                    ) {
                        itmm.classList.add('green');
                    } else {
                        itmm.classList.remove('green');
                    }
                })
    
            
            })
        }
        if(item.textContent[0] == 6 && item.textContent[3] == 6){
            item.addEventListener('click', (c)=> {
                item.classList.add('blackHorse1');
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
    
                    if(xxx == ((xx - 0) + 1)  && yyy == ((yy - 0) - 2) || 
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 1) ||
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 2) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 2) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 1) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 1) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 2)
                    ) {
                        itmm.classList.add('green');
                    } else {
                        itmm.classList.remove('green');
                    }
                })
    
            
            })
        }
        if(item.textContent[0] == 7 && item.textContent[3] == 4){
            item.addEventListener('click', (c)=> {
                item.classList.add('blackHorse1');
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
    
                    if(xxx == ((xx - 0) + 1)  && yyy == ((yy - 0) - 2) || 
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 1) ||
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 2) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 2) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 1) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 1) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 2)
                    ) {
                        itmm.classList.add('green');
                    } else {
                        itmm.classList.remove('green');
                    }
                })
    
            
            })
        }
        if(item.textContent[0] == 6 && item.textContent[3] == 5){
            item.addEventListener('click', (c)=> {
                item.classList.add('blackHorse1');
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
    
                    if(xxx == ((xx - 0) + 1)  && yyy == ((yy - 0) - 2) || 
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 1) ||
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 2) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 2) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 1) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 1) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 2)
                    ) {
                        itmm.classList.add('green');
                    } else {
                        itmm.classList.remove('green');
                    }
                })
    
            
            })
        }
    })
}

function piyodaFunc1() {
    chesItems.forEach(item =>{
        if(item.textContent[0] == 1 && item.textContent[3] == 6){
            item.addEventListener('click', (c)=> {
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
                    if(yy != 8) {
                        if(xxx == xx && yyy == ((yy - 0) - 1) || xxx == xx && yyy == ((yy - 0) - 2)) {
                            item.classList.add('green');
                            if(yy != 7) {
                                if(xxx == xx && yyy == ((yy - 0) - 1)) {
                                    item.classList.add('green');
                                } else {
                                    item.classList.remove('green');
                                }
                            }
                        } else {
                            item.classList.remove('green');
                        }
                    } 
                    else {
                        item.classList.remove('green');
                    }
                })
    
            
            })
        }
        if(item.textContent[0] == 1 && item.textContent[3] == 5){
            item.addEventListener('click', (c)=> {
                item.classList.add('blackHorse1');
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
                    if(yy != 8) {
                        if(xxx == xx && yyy == ((yy - 0) - 1) || xxx == xx && yyy == ((yy - 0) - 2)) {
                            item.classList.add('green');
                            if(yy != 7) {
                                if(xxx == xx && yyy == ((yy - 0) - 1)) {
                                    item.classList.add('green');
                                } else {
                                    item.classList.remove('green');
                                }
                            }
                        } else {
                            item.classList.remove('green');
                        }
                    } 
                    else {
                        item.classList.remove('green');
                    }
                })
            })
        }
        if(item.textContent[0] == 1 && item.textContent[3] == 6){
            item.addEventListener('click', (c)=> {
                item.classList.add('blackHorse1');
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
    
                    if(yy != 8) {
                        if(xxx == xx && yyy == ((yy - 0) - 1) || xxx == xx && yyy == ((yy - 0) - 2)) {
                            item.classList.add('green');
                            if(yy != 7) {
                                if(xxx == xx && yyy == ((yy - 0) - 1)) {
                                    item.classList.add('green');
                                } else {
                                    item.classList.remove('green');
                                }
                            }
                        } else {
                            item.classList.remove('green');
                        }
                    } 
                    else {
                        item.classList.remove('green');
                    }
                })
    
            
            })
        }
        if(item.textContent[0] == 1 && item.textContent[3] == 7){
            item.addEventListener('click', (c)=> {
                item.classList.add('blackHorse1');
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
                    if(yy != 8) {
                        if(xxx == xx && yyy == ((yy - 0) - 1) || xxx == xx && yyy == ((yy - 0) - 2)) {
                            item.classList.add('green');
                            if(yy != 7) {
                                if(xxx == xx && yyy == ((yy - 0) - 1)) {
                                    item.classList.add('green');
                                } else {
                                    item.classList.remove('green');
                                }
                            }
                        } else {
                            item.classList.remove('green');
                        }
                    } 
                    else {
                        item.classList.remove('green');
                    }
                })
    
            
            })
        }
        if(item.textContent[0] == 1 && item.textContent[3] == 8){
            item.addEventListener('click', (c)=> {
                item.classList.add('blackHorse1');
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];
                chesItems.forEach(itmm => {
                    let xxx = itmm.classList[0].split('')[1];
                    let yyy = itmm.classList[1].split('')[1];
                    if(yy != 8) {
                        if(xxx == xx && yyy == ((yy - 0) - 1) || xxx == xx && yyy == ((yy - 0) - 2)) {
                            item.classList.add('green');
                            if(yy != 7) {
                                if(xxx == xx && yyy == ((yy - 0) - 1)) {
                                    item.classList.add('green');
                                } else {
                                    item.classList.remove('green');
                                }
                            }
                        } else {
                            item.classList.remove('green');
                        }
                    } 
                    else {
                        item.classList.remove('green');
                    }
                })
    
            
            })
        }
    })
}
