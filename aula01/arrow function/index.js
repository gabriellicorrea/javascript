() => {

}

/*const test = () => {
    console.log("Arrow function.")
}
test()
*/

/*function myFunc(){
    this.a = 'hello'

    console.log(this.a)

    setInterval(function(){
        console.log(this.a)
    }, 1000)
}
myFunc()*/
function func(){
    this.a = 'hello'

    console.log(this.a)

    setInterval(() => {
        console.log(this.a)
    }, 1000)
}
func()