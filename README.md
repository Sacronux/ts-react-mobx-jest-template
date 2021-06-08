Typescript React Mobx Jest template

To run dockerfile use:

`docker build -t sample:dev .`
`docker run -itd --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true sample:dev`
