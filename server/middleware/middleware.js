export const verifyUser = async(req,resp,next)=>{
    try {
        const { authorization } = req.headers;
        if (!authorization) {
          throw new Error("You are not authorized");
        }
        if (!authorization.startsWith("Bearer ")) {
          throw new Error("Token is not valid");
        }
    
        //const payload = await verifyToken(authorization.split(" ")[1]);
        const payload = await verifyToken(authorization.split(" ")[1].trim())
        console.log('payload',payload);
    
        if (!payload) {
          throw new Error("Token is not Valid");
        }
    
        conn.query(
          "Select * from user where email=?",[payload.email],
          (error, results) => {
            if (error) {
              throw new Error(error);
            }
            console.log('results',results);
            req.body.user = results;
          }
        );
        
        console.log('req.body.user',req.body.user);
        next();
      } catch (error) {
        console.log(error.message);
        resp.status(500).json({ success: "0", message: error.message });
      }
}