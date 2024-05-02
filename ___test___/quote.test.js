import app from "../server.js"
import request from "supertest"



test('Access quotes without token with a 500 status code', async ()=>{
    let response= (await request(app).get("/quote"))
  expect(response.status).toEqual(500)
  })

  test('Access quotes with token  with a 200 status code', async ()=>{
    let response= (await request(app).get("/author").set('authorization',`Bearer ${token}`))
expect(response.status).toBe(200)
  }
  )