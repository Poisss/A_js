function pointOfRegion(){
    let  x =document.form1.x.valueOf();
    let  y =document.form1.y.valueOf();
    if ((x<=1.5) && (x>=0) && (y>=0) && (y<=x*x)){
        alert('точка попадает')
    }
    if (((y<=0)&&(y>=x*x-2))||((y>=x*x-2)&&(y<=-x)&&(y>=0))||((y>=x*x-2)&&(y<=x)&&(y>=0))){
        alert('точка попадает')
    }
    else {
        alert('точка не попадает')
    }
}