const express = require('express');
const app = express();
const PORT = 3000;
const dataroute = require('./route/dataroute');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorhandler');

app.use(express.json());

app.use("/data", dataroute)

app.use(logger);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/data`);
});
