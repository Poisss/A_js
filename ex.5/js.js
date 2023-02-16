const arr1=new Map([
    ['с','Выберите валюту'],
    ['на','Выберите валюту']
])
document.querySelector('.d').addEventListener("change",()=>{
    let c=document.querySelector('.d').value;
    arr1.set('с',c);
    let q1=arr1.get('с');
    let q2=arr1.get('на');
    if(q1!='Выберите валюту' && q2!='Выберите валюту'){
        if(q1=='Российский рубль'){
            if(q2=='Турецкая лира'){
                document.querySelector('.cen').value=Number(0.31);
            }
            if(q2=='Жэньминьби'){
                document.querySelector('.cen').value=Number(0.12);
            }
        }
        if(q1=='Турецкая лира'){
            if(q2=='Российский рубль'){
                document.querySelector('.cen').value=Number(3.24);
            }
            if(q2=='Жэньминьби'){
                document.querySelector('.cen').value=Number(0.38);
            }
        }
        if(q1=='Жэньминьби'){
            if(q2=='Турецкая лира'){
                document.querySelector('.cen').value=Number(2.62);
            }
            if(q2=='Российский рубль'){
                document.querySelector('.cen').value=Number(8.44);
            }
        }
    }
})
document.querySelector('.b').addEventListener("change",()=>{
    let c=document.querySelector('.b').value;
    arr1.set('на',c);
    let q1=arr1.get('с');
    let q2=arr1.get('на');
    if((q1!='Выберите валюту')&&(q2!='Выберите валюту')){
        if(q1=='Российский рубль'){
            if(q2=='Турецкая лира'){
                document.querySelector('.cen').value=Number(0.31);
            }
            if(q2=='Жэньминьби'){
                document.querySelector('.cen').value=Number(0.12);
            }
        }
        if(q1=='Турецкая лира'){
            if(q2=='Российский рубль'){
                document.querySelector('.cen').value=Number(3.24);
            }
            if(q2=='Жэньминьби'){
                document.querySelector('.cen').value=Number(0.38);
            }
        }
        if(q1=='Жэньминьби'){
            if(q2=='Турецкая лира'){
                document.querySelector('.cen').value=Number(2.62);
            }
            if(q2=='Российский рубль'){
                document.querySelector('.cen').value=Number(8.44);
                
            }
        }
    }
})
document.querySelector('.o').addEventListener("click",()=>{
    document.querySelector('.r').value=document.querySelector('.cen').value*document.querySelector('.n').value;
})