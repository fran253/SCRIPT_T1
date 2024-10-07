function pingPong() {
    numMax = 100;
    for (let index = 1; index <= numMax; index++) {
        if (index % 10 == 0) {
            console.log('PONG')
            
        }
        else if (index % 5 == 0) 
        {
            console.log('PING')
        }
        else
        {
            console.log(index)
        }
        
        
    }

}

pingPong()
// expected output
// 1
// 2
// 3
// 4
// 5 PING
// 6
// 7
// 8
// 9
// 10 PONG
// 11
// 12
// 13
// 14
// 15 PING
// 16
// 17
// 18
// 19
// 20 PONG