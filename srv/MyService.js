module.exports= (cds) => {
cds.on('hello',req =>{
    return 'Hey welcome to my world' + req.data.name;
});

}