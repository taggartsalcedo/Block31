const express = require('express');
const data = require('./dataPage.js');


const PORT = 8080
app.listen(PORT, () => {console.log('Server is running on port ${PORT}');
}); 

app.get('/api/v1/pets', (req, res) => { res.send('All pets from databse');
    res.send(data)
});

app.get('/api/v1/pets/:name', (reg, res) => { const name = req.params.name; res.send('Pet with name ${name} from databse');
    const params = req.params;
    params.name = name;
    const filtered = data.filter(pet => pet.name.toLowerCase() === name.toLowerCase()
    );
    res.send(filtered)
});
