let mark = 66;
if(mark >= 90){
    console.log('Goldren A+')
}
else{
    if (mark >= 80  && mark <= 89.9){
        console.log('A+')
    } 
    else
        if (mark >= 70  && mark <= 79.9){
            console.log('A')
    }
    else
        if (mark >= 60  && mark <= 69.9){
            console.log('A-')
    }
    else
        if (mark >= 50  && mark <= 59.9){
            console.log('B')
    }
    else
        if (mark >= 40  && mark <= 49.9){
            console.log('C')
    }
    else
        if (mark >= 33  && mark <= 39.9){
            console.log('D')
    }
    else{
        console.log(Fail)
    }
}
