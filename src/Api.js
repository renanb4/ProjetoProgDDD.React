﻿import axios from 'axios';

const requisicao = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
});

export default requisicao;