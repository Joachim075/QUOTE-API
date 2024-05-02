import app from "../server.js"
import request from "supertest"
import "dotenv/config"
let token= process.env.JWT_TOKEN
  test('use token to get all authers with a 200 status code', async ()=>{
    let response= (await request(app).get("/author").set('authorization',`Bearer ${token}`))
expect(response.status).toBe(200)
  }
  )

  test('get all authers without token with a 500 status code', async ()=>{
    let response= (await request(app).get("/author"))
  expect(response.status).toEqual(500)
  })

 




 