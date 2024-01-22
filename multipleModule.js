function myFunction1(){
console.log('hello from myFunction1!!');
}
function myFunction2(){
    console.log('hello from myFunction2!!');
}

module.exports = {
    foo: 'bar',
    myFunction1: myFunction1,
    myFunction2: myFunction2

};