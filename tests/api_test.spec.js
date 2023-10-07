import { test, expect } from '@playwright/test';

test('GET API Request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2')

    console.log(response.json())
     expect(200).toEqual(response.status());

     const text = await response.text();
     expect(text).toContain('Janet')

  });
  