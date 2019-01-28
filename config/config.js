const config = {
    cookies:{
        domain: 'localhost',  // 写cookie所在的域名
        expires: new Date('2017-02-15'), 
        httpOnly: false,  
        overwrite: false,
        maxAge:7200000
    },
    cors:{
          origin: function (ctx) {
              return 'http://localhost:3001'; 
          },
          exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
          maxAge: 3600,
          credentials: true,
          allowMethods: ['GET', 'POST', 'DELETE',"PUT"],
          allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }
}
module.exports = config