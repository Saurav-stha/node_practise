var s=1
var m=0

setInterval(() => {

    if (s>59){
        m++
        s-=60
    }
    if (m==0)
        console.log(s++, "sec")
    else
        console.log(m," min ",s++," sec")
}, 1000)