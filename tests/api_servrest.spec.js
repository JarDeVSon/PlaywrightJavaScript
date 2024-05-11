import { test, expect } from '@playwright/test';

let tokenStorage;
let id;

test.describe('Suite de testes API ServRest', async () => {

    test.beforeEach('Before Each Hook - Storage token', async ({request}) => {
        const response = await request.post('https://serverest.dev/login', {
            data: {
                "email": "fulano@qa.com",
                "password": "teste"
              },
              headers: {
                "Content-Type": "application/json"
              },
        })
        console.log(response.json())
        expect(response.status()).toBe(200);
        let responseBody = await response.json()
        tokenStorage = responseBody.authorization
        return tokenStorage;
    })

    test('GET ALL API Request', async ({ request }) => {
        const response = await request.get('https://serverest.dev/usuarios')

        console.log(response)
        console.log(response.status())
        expect(200).toEqual(response.status());

    });

    test('POST API Request', async ({ request }) => {
        const response = await request.post('https://serverest.dev/usuarios', {
            headers: {
                'Authorization': tokenStorage,
                'Content-Type': 'application/json'
            },
            data: {
                "nome": "Fulano da Silva",
                "email": Math.random(1) + "beltrano@qa.com.br",
                "password": "teste",
                "administrador": "true"
            }

        })

        console.log(response.json())
        console.log(response.status())
        expect(response.status()).toBe(201)
        let responseBody = await response.json();
        id = responseBody._id

    });

    test('GET ONE SINGLE API Request', async ({ request }) => {
        const response = await request.get(`https://serverest.dev/usuarios/${id}`, {
            headers: {
                'Authorization': tokenStorage,
                'Content-Type': 'application/json'
            },

        })

        console.log(response)
        console.log(response.status())
        expect(response.status()).toBe(200)

    });
    test('PUT API Request', async ({ request }) => {
        const response = await request.put(`https://serverest.dev/usuarios/${id}`, {
            data: {
                "nome": "Fulano da Silva 1",
                "email": Math.random(1) + "beltrano@qa.com.br",
                "password": "teste",
                "administrador": "true"
            },
            headers: {
                'Authorization': tokenStorage,
                'Content-Type': 'application/json'
            }

        })

        console.log(response)
        console.log(response.status())
        expect(response.status()).toBe(200)

    });

    test('DELETE API Request', async ({ request }) => {
        const response = await request.delete(`https://serverest.dev/usuarios/${id}`, {
            headers: {
                'Authorization': tokenStorage,
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        console.log(response.status())
        expect(response.status()).toBe(200);

    });
})

