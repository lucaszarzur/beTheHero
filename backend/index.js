const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        app: 'Be The Hero',
        owner: 'Lucas Zarzur'
    })
});

app.listen(3333);