import express from 'express';
import cors from 'cors';
import { getProcessDefinitions } from './camunda-rest-service.js';
import { getProcessDefinitionTaskKey } from './camunda-rest-service.js';
import { startProcessInstance } from './camunda-rest-service.js';
import { getTasks } from "./camunda-rest-service.js";
import { getRenderedForm } from "./camunda-rest-service.js";
import { getVariablesForTask } from "./camunda-rest-service.js";
import { postCompleteTask } from "./camunda-rest-service.js";
import { camundaEngineRestURL } from '../../environment.js';
import bodyParser from "body-parser";


const app = express()
const port = 3000

app.use(cors({
    origin: '*'
}));

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.get('/getProcessDefinitions', (req, res) => {
    getProcessDefinitions(camundaEngineRestURL + 'process-definition?latestVersion=true')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
});

app.get('/getProcessDefinitionTaskKey/:processDefinitionKey', (req, res) => {
    const processDefinitionKey = req.params.processDefinitionKey; 
    getProcessDefinitionTaskKey(camundaEngineRestURL + 'process-definition/key/'+ processDefinitionKey +'/startForm')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.post('/startProcessInstance/:processDefinitionKey', bodyParser.json() ,(req, res) => {
    const processDefinitionKey = req.params.processDefinitionKey;
    const variables = req.body;
    console.log(variables);
    startProcessInstance(camundaEngineRestURL + 'process-definition/key/'+ processDefinitionKey +'/submit-form', JSON.stringify(variables))
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.get('/tasks', (req, res) => {
    getTasks(camundaEngineRestURL + "task?sortBy=created&sortOrder=desc&maxResults=100")
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.get('/task/:id', (req, res) => {
    const id = req.params.id;
    getRenderedForm(camundaEngineRestURL + "task/"+ id + "/rendered-form")
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.get('/getVariableForTask/:id/:variable', (req, res) => {
    const id = req.params.id;
    const variable = req.params.variable;
    getVariablesForTask(camundaEngineRestURL + "task/" + id + "/form-variables?variableNames=" + variable)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.post('/completeTask/:taskId', bodyParser.json() ,(req, res) => {
    const taskId = req.params.taskId;
    const variables = req.body;
    postCompleteTask(camundaEngineRestURL + 'task/'+ taskId +'/complete', JSON.stringify(variables))
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})


app.listen(port, () => console.log(`Express is listening on port ${port}!`))