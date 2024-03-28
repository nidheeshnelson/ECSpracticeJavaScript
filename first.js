const obj = {
    nm : "Nidheesh Nelson",
    hb : ["swim","read"],
    ad : {
        hn:120,
        h:"nid"
    }
}
console.log(obj.nm,obj.hb[0],obj.hb[1],obj.ad.hn,obj.ad.h)

class a{
    constructor(nm, hb,...ad){
this.nm=nm;
this.hb=hb;
this.ad=new b(...ad)
    }
}
class b{
    constructor(hn,h){
        this.hn=hn;
        this.h=h;
    }
}
const c = new a(obj.nm, obj.hb, obj.ad);
console.log(c.nm,c.hb[0],c.hb[1],c.ad.hn,c.ad.h);