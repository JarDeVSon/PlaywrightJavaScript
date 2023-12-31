import { test, expect } from '@playwright/test';

let id;
let token = '3177007a85de886276f0ac7c6461465d4aa8269c8f1a4fae0dba09754fab28ae';

test.describe('Suite de testes API Gorest', async () => {

    test('GET ALL API Request', async ({ request }) => {
        const response = await request.get('https://gorest.co.in/public/v2/users')

        console.log(response)
        console.log(response.status())
        expect(200).toEqual(response.status());

    });

    test('POST API Request', async ({ request }) => {
        const response = await request.post('https://gorest.co.in/public/v2/users', {
            data: {
                "name": "Repeteco123",
                "email": "letsgo121@gmail.com",
                "gender": "male",
                "status": "active"
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }

        })

        console.log(response)
        console.log(response.status())
        expect(response.status()).toBe(201)
        let responseBody = await response.json()
        id = responseBody.id

    });
    
    test('GET ONE SINGLE API Request', async ({ request }) => {
        const response = await request.get(`https://gorest.co.in/public/v2/users/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },

        })

        console.log(response)
        console.log(response.status())
        expect(response.status()).toBe(200)

    });
    test('PUT API Request', async ({ request }) => {
        const response = await request.put(`https://gorest.co.in/public/v2/users/${id}`, {
            data: {
                "name": "RepetecoPUT1",
                "email": "letsgo121@gmail.com",
                "gender": "male",
                "status": "active"
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }

        })

        console.log(response)
        console.log(response.status())
        expect(response.status()).toBe(200)

    });

    test('DELETE API Request', async ({ request }) => {
        const response = await request.delete(`https://gorest.co.in/public/v2/users/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        console.log(response.status())
        expect(response.status()).toBe(204);

    });
})

