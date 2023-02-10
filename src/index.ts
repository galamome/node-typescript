const name = "Guillaume"
console.log(`Hello ${name}!`)

interface DescribableFunction {
    description: string;
    todo: (someArg: number) => boolean;
};
function doSomething(fn: DescribableFunction, toBeChecked: number) {
    console.log(`${fn.description} with '${toBeChecked}' returned ${fn.todo(toBeChecked)}`);
}

const myFn = {
    todo: (someArg: number): boolean => {
        return someArg > 5;
    },
    description: 'checks if arg is greater than 5'
}

doSomething(myFn, 4);