import app from './src/app';
const { PORT }  = process.env;

app.listen(PORT || 3000, function () {
    console.log(`App is listening on port 3000!`)
})