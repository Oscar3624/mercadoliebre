const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;
app.use(express.static(path.resolve(__dirname,'public')))
app.listen(PORT, () => console.log('running on' + PORT));
app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})  
app.get('/register', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})  
app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})  
app.post('/home', (req,res) => {
    res.redirect('/');
})