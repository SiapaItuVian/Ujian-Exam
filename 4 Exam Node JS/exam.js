const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

//codingan disini

//Jarak Tempuh
app.get("/jarak_tempuh/:satuan/:a/:b",(req,res)=>{
    let v,s,t
    let diket1=Number(req.params.a)
    let diket2=Number(req.params.b)
    let satuan=req.params.satuan
    let response
    if (satuan=="v") {
        response={
            diket:"diketahui",
            s:diket1,
            t:diket2,
            hasil:"Hasil",
            v:diket1/diket2
        }
    } else if(satuan=="s") {
        response={
            diket:"diketahui",
            v:diket1,
            t:diket2,
            hasil:"Hasil",
            v:diket1*diket2
        }
    } else if(satuan=="t") {
        response={
            diket:"diketahui",
            s:diket1,
            v:diket2,
            hasil:"Hasil",
            v:diket1/diket2
        }
    }else{
        response={
            error:"error"
        }
    }
    res.json(response)
})

//Berat
app.post("/berat",(req,res)=>{
    let satuan=req.body.satuan
    let angka=Number(req.body.angka)
    let response
    let kg,hg,dag,g,dg,cg,mg
    if (satuan=="kg") {
        kg=angka
        hg=kg*10
        dag=hg*10
        g=dag*10
        dg=g*10
        cg=dg*10
        mg=cg*10
        response={
            kg:kg,
            hg:hg,
            dag:dag,
            g:g,
            dg:dg,
            cg:cg,
            mg:mg,
        }
    } else if(satuan=="hg") {
        kg=angka/10
        hg=kg*10
        dag=hg*10
        g=dag*10
        dg=g*10
        cg=dg*10
        mg=cg*10
        response={
            kg:kg,
            hg:hg,
            dag:dag,
            g:g,
            dg:dg,
            cg:cg,
            mg:mg,
        }
    }else if(satuan=="dag") {
        kg=angka/10**2
        hg=kg*10
        dag=hg*10
        g=dag*10
        dg=g*10
        cg=dg*10
        mg=cg*10
        response={
            kg:kg,
            hg:hg,
            dag:dag,
            g:g,
            dg:dg,
            cg:cg,
            mg:mg,
        }
    }else if(satuan=="g") {
        kg=angka/10**3
        hg=kg*10
        dag=hg*10
        g=dag*10
        dg=g*10
        cg=dg*10
        mg=cg*10
        response={
            kg:kg,
            hg:hg,
            dag:dag,
            g:g,
            dg:dg,
            cg:cg,
            mg:mg,
        }
    }else if(satuan=="dg") {
        kg=angka/10**4
        hg=kg*10
        dag=hg*10
        g=dag*10
        dg=g*10
        cg=dg*10
        mg=cg*10
        response={
            kg:kg,
            hg:hg,
            dag:dag,
            g:g,
            dg:dg,
            cg:cg,
            mg:mg,
        }
    }else if(satuan=="cg") {
        kg=angka/10**5
        hg=kg*10
        dag=hg*10
        g=dag*10
        dg=g*10
        cg=dg*10
        mg=cg*10
        response={
            kg:kg,
            hg:hg,
            dag:dag,
            g:g,
            dg:dg,
            cg:cg,
            mg:mg,
        }
    }else if(satuan=="mg") {
        kg=angka/10**6
        hg=kg*10
        dag=hg*10
        g=dag*10
        dg=g*10
        cg=dg*10
        mg=cg*10
        response={
            kg:kg,
            hg:hg,
            dag:dag,
            g:g,
            dg:dg,
            cg:cg,
            mg:mg,
        }
    }else{
        response={
            error:"error"
        }
    }
    res.json(response)
})

//jarak
app.get("/jarak/:satuan/:angka",(req,res)=>{
    let satuan=req.params.satuan
    let angka=Number(req.params.angka)
    let response
    let km,hm,dam,m,dm,cm,mm
    if (satuan=="km") {
        km=angka
        hm=km*10
        dam=hm*10
        m=dam*10
        dm=m*10
        cm=dm*10
        mm=cm*10
        response={
            km:km,
            hm:hm,
            dam:dam,
            m:m,
            dm:dm,
            cm:cm,
            mm:mm
        }
    } else if(satuan=="hm") {
        km=angka/10
        hm=km*10
        dam=hm*10
        m=dam*10
        dm=m*10
        cm=dm*10
        mm=cm*10
        response={
            km:km,
            hm:hm,
            dam:dam,
            m:m,
            dm:dm,
            cm:cm,
            mm:mm
        }
    }else if(satuan=="dam") {
        km=angka/10**2
        hm=km*10
        dam=hm*10
        m=dam*10
        dm=m*10
        cm=dm*10
        mm=cm*10
        response={
            km:km,
            hm:hm,
            dam:dam,
            m:m,
            dm:dm,
            cm:cm,
            mm:mm
        }
    }else if(satuan=="m") {
        km=angka/10**3
        hm=km*10
        dam=hm*10
        m=dam*10
        dm=m*10
        cm=dm*10
        mm=cm*10
        response={
            km:km,
            hm:hm,
            dam:dam,
            m:m,
            dm:dm,
            cm:cm,
            mm:mm
        }
    }else if(satuan=="dm") {
        km=angka/10**4
        hm=km*10
        dam=hm*10
        m=dam*10
        dm=m*10
        cm=dm*10
        mm=cm*10
        response={
            km:km,
            hm:hm,
            dam:dam,
            m:m,
            dm:dm,
            cm:cm,
            mm:mm
        }
    }else if(satuan=="cm") {
        km=angka/10**5
        hm=km*10
        dam=hm*10
        m=dam*10
        dm=m*10
        cm=dm*10
        mm=cm*10
        response={
            km:km,
            hm:hm,
            dam:dam,
            m:m,
            dm:dm,
            cm:cm,
            mm:mm
        }
    }else if(satuan=="mm") {
        km=angka/10**6
        hm=km*10
        dam=hm*10
        m=dam*10
        dm=m*10
        cm=dm*10
        mm=cm*10
        response={
            km:km,
            hm:hm,
            dam:dam,
            m:m,
            dm:dm,
            cm:cm,
            mm:mm
        }
    }else{
        response={
            error:error
        }
    }
    res.json(response)
})

//Gaya
app.post("/gaya",(req,res)=>{
    let ditanya=req.body.ditanya
    let f=Number(req.body.f)
    let m=Number(req.body.m)
    let a=Number(req.body.a)
    let response
    if (ditanya=="f") {
        response={
            diket:"Diketahui",
            m:m,
            a:a,
            hasil:"hasil",
            f:m*a
        }
    } else if(ditanya=="m"){
        response={
            diket:"Diketahui",
            f:f,
            a:a,
            hasil:"hasil",
            m:f/a
        }
    } else if(ditanya=="a"){
        response={
            diket:"Diketahui",
            f:f,
            m:m,
            hasil:"hasil",
            a:f/m
        }
    }
    res.json(response)
})
//codingan disini

const port=8000
app.listen(port, () => {
    console.log("Server run on port "+port);
})