import admin from 'firebase-admin';

try {
    admin.initializeApp({
        credential: admin.credential.cert({
            project_id: "blatherings-6c0a2",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCvi1RFKt0BVIIp\n8Q3+c8mZe1AMBxM09B64oJ2ew671ACQn/UE2Wa6fcERdgEU2jKFXK6fjlO65cAGs\nfEQ/7MZJKTSHr5Ggc+CofyBcUrxOjAi4Vu11hdUYNBXlt3TFUcBt9zhAbtBRSmjd\nJ91bcew4S3+SZNWDxzCOjNeBywTJtv2ztvIHScrh9IzdRcQ1FPEyvn68zwcr8Ct2\nI9ftb4EZOHxto03d8qj1lYP5kDMIGZKkcmf5ufpKgSH1/jL8ZZTEufzIFj/SX0QJ\ncHgHnrW250XI6sybnp2fFSTbscKNasNWr/DlDF6GtJa5DA+rAC4nuh3TSixK7Tu8\n7J6C2TLfAgMBAAECggEAGXDd47BUm06+FooC9y+ctguzDCsyU2hV03gjn9DIWGWO\n1+TSQKg6sIy6u7pNTZyP/WwsRsVc268p7u+LjKAqFIxOOqPtPQ3OL11NOVQcSl3t\nHZori+67dWiHC+XMnJQ+iTFdC6mDs2RPUk3mvMwD6hy2/mZys0h49w/eY8ciiIEo\nugmpKgMyl3y+WLIZq69Imbng4sa0loBkLXDLsfjC9pOz79QzefRLI9gm3bauhCOO\ndkz7rYeplB5hGrTE/XG7dE4NSvUa7WeQ2Ylc5OR4jEhzX0QXCQis295Uw08GSBKq\nS8VfTR/IEochSlNj3OAF65cSZrSHtxfXB77Wtu2PQQKBgQDzDYGmXQCPlz5IqTu0\nXn0fPZiWsdpjfT3gXsecEHMgPC3/p9GSdFGVxPdKSzr2LP665j1rGXS/iJ7JAR59\n1ZA+zwwDkN9yncjbNueXG0XEe5UfTQOJf4Ur7bMXkkqeGXp216yzxMXYrtYw8ITx\nsqT33OvSS6I5nodAF1ihqgS6TwKBgQC45TbFxXHqFz/kpJVKmgfiGissN2Kf+/it\nJqS0+DI0kgombYRzEQOIKZNRMAsOh0doKUeINZ8dcDezprajriwL5Ef+eKU0UGPI\n6EDLaGcG4bO6yYrptAO5DMaR2fwYkGAk3QinhfeScuyUbT8X7O5ofTw1tDYWQvhV\nrl5I6i4qcQKBgQC4bEc0NN14Fwrrl332HrxSOCrQLaPIWf/ZgBF2GgVBMGi21F/x\nANHnEs2RUgQrR3kB2DJCUc6EhuX1HyRD1wjcn7499m+WSKNfswmHXupRbHR6i7Vj\nX59s9bAu8pIr5KlIA97HiUeWYxOjjt1RiHwklz1ZFIrDrcZym0RlZtyvgQKBgAsK\n1WyWUClU3iH/mlLsRBBC09U+MYuwdreQmUGdmRH+rtCAtepRV86n/P5aSi7B8YfM\n/1KpMSmG7Cy0hi/cVREYvxv5hJRNQMhc5pG/WHfWvu8m3j7620YP90P6qs2kwbkx\n4jRvEcwTRQHQTHZXVh2zbQcgDiLiOQaU9ViRc9RhAoGALZ/NmaIyceDqUBZAcb6p\nWPksHBPgXbww+zbJaWNz8Xmpj6JwI771aBbzzQKBdGvx3vTwyEEUdfKK2Deqp1cU\nr78QtLGfgzGmrrST+vJ5Az3dHp2UjzhbIakxECEetHuHFZwUzlE0DB9cM+8Hs0IQ\nD57tOM5VeXUzn1X1j2pDyKM=\n-----END PRIVATE KEY-----\n",
            client_email: "firebase-adminsdk-aox7t@blatherings-6c0a2.iam.gserviceaccount.com"
        }),
        databaseURL: 'https://blatherings-6c0a2.firebaseio.com'
    });
} catch (error) {
    /*
     * We skip the "already exists" message which is
     * not an actual error when we're hot-reloading.
     */
    if (!/already exists/u.test(error.message)) {
        // eslint-disable-next-line no-console
        console.error('Firebase admin initialization error', error.stack);
    }
}

export default admin.firestore();
