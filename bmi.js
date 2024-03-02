let bmi = 23;
if(bmi < 18.5){
    console.log('underweight')
}


if (bmi >= 18.5  && bmi <= 24.9 ){
    console.log('normal')
}
else{
    if(bmi >= 25  && bmi <= 29.9){
        console.log('overweight')
    }
    else{
        console.log('obese')
    }
}