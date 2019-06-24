'use strict'

const { test, trait } = use('Test/Suite')('Create Bill')

trait('Test/ApiClient')

test('Create new bill with name and ocurance should PASS', async({ assert, client }) => {
  
  const data = {
    name: 'Meralco',
    occurance: 'Monthly',
  }

  const response = await client.post('/bill/add-new').send(data).end()

  response.assertStatus(200)

  response.assertJSONSubset({
    name: data.name,
    occurance: data.occurance,
  })

})

test('Create new bill with no name should fail', async({assert, client}) => {
  const data = {
    name: '',
    occurance: 'Weekly',
  }

  const response = await client.post('/bill/add-new').send(data).end()

  response.assertStatus(500)

})