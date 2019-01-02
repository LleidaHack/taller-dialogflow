## Creació chatbot d'un restaurant

### Creació del Agent

1. Navegar a [dialogflow](dialogflow.com)
2. Sign in amb la conta de google.
3. Clickar `Create new agent` a la part superior esquerra per crear un nou agent.

![creacio agent](../images/creacio_agent.png)

4. Introduir dades agent.
  - Seleccionar nom
  - Idioma

![form nou agent](../images/formulari-nou-agent.png)

### Creació primer Intent

1. Seleccionar l'opció Intents a la part esquerra.
2. A la part superior dreta seleccionar `Create Intent`
3. Ens centrarem en les `Training phrases` i `Responses`
4. Training phrases
```
What is your name? 
What's your name?
Can you tell me your name?
Tell me your name
```
5. Responses

```
My name is Guillem. I am a restaurant assistant.
I won't tell you my name
```

### Poc natural? Small talk!

Small talk permet que el teu chatbot s'assembli més a una persona i que sigui capaç de reaccionar a més situacions inesperades. 

### Creació Intent amb paràmetres

Repetir `Creació primer Intent`. 

1. Training phrases. Escriure la frase tal com la diria un client i marcar les entitats claus com el nombre de persones i dia de la reserva.
2. Indicar el tipus de l'entitat, és obligatori?, respostes si no s'obté el paràmetre...
3. Resposetes mostrant les entitats obtingudes.

![Intent amb params](../images/intent-params.png)