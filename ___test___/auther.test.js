import app from "../server.js"
import request from "supertest"


  test('use token to get all authers with a 200 status code', async ()=>{
    let response= (await request(app).get("/author").set('authorization',"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFvY2hpbSIsImF1dGhlcklkIjoyMiwiaWF0IjoxNzE0MjkxODc2LCJleHAiOjE3MTQzNzgyNzZ9.GD3KuFjSjLoblW9RhlLDEnH2RV3ZIHoshoX3o-HW4eo"))
expect(response.status).toBe(200)
  }
  )

  test('get all authers without token with a 500 status code', async ()=>{
    let response= (await request(app).get("/author"))
  expect(response.status).toEqual(500)
  })

  test('Access quotes without token with a 500 status code', async ()=>{
    let response= (await request(app).get("/quote"))
  expect(response.status).toEqual(500)
  })

  test('Access quotes with token  with a 200 status code', async ()=>{
    let response= (await request(app).get("/author").set('authorization',"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFvY2hpbSIsImF1dGhlcklkIjoyMiwiaWF0IjoxNzE0MjkxODc2LCJleHAiOjE3MTQzNzgyNzZ9.GD3KuFjSjLoblW9RhlLDEnH2RV3ZIHoshoX3o-HW4eo"))
expect(response.status).toBe(200)
  }
  )




 