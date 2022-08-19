import app from './src/app';
const { PORT }  = process.env;

app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT}!`)
})