const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const apiV1 = express.Router();
app.use('/v1', apiV1);

apiV1.get('/', (req, res) => {
    res.send('Hello World!');
});

apiV1.post('/savereport', (req, res) => {
    const jsonData = JSON.stringify(req.body, null, 2) + "\n"; // Fügt einen Zeilenumbruch nach jedem Eintrag hinzu
    fs.appendFile('reports.txt', jsonData, (err) => {
        if (err) {
            console.error('An error has occurred:', err);
            res.status(500).send('An error occurred while saving the data.');
            return;
        }

        console.log('Data saved successfully.');
        res.send('Data successfully received and saved.');
    });
});

apiV1.post('/encryptedcard', (req, res) => {
    const jsonData = JSON.stringify(req.body, null, 2) + "\n"; // Fügt einen Zeilenumbruch nach jedem Eintrag hinzu
    fs.appendFile('encryptedcards.txt', jsonData, (err) => {
        if (err) {
            console.error('An error has occurred:', err);
            res.status(500).send('An error occurred while saving the data.');
            return;
        }

        console.log('Data saved successfully.');
        res.send('Data successfully received and saved.');
    });
});



app.listen(port, () => {
    console.log(`Server running on ...  http://localhost:${port}/v1/savereport :)`);
});


