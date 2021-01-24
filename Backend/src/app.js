import * as express from "express";
import { graphqlHTTP } from "express-graphql";
import ServiceResponse from "./services/ServiceResponse";
import * as mongoose from 'mongoose';
import schema from './graphql/schema';
import { DB_URL } from "./constants/dbConstants";

import * as cors from "cors";
import { config } from "dotenv";

config();

const app: any = express();

mongoose.connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection.once('open', () => {
    console.log('MongoDB is connected');
});

app.use(cors());

app.listen(8888, () => {
    console.log('Server listening on 8888');
});

app.get('/', (req, res) => {
    res.send('Server Working');
});