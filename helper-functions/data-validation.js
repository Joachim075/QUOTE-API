import joi from "joi";

// joi Schemas
const autherSchema= joi.object({
    name:joi.string().min(2).max(25).required(),
    password:joi.string().max(10).min(4).required(),
    email:joi.string().required()
})

const quoteSchema= joi.object({
    name:joi.string().max(25).required(),
    description: joi.string().required()
})

//validation function
function validate(schema){
    return (req,res,next)=>{
        const result= schema.validate(req.body)

        if (result.error) {
            res.json(result.error)
        } else {
            next()
        }
    }
}

export{
    autherSchema,
    quoteSchema,
    validate
}


