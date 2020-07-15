# Typescript Examples

## Documentation

[Typescript Documentation for basic types](https://www.typescriptlang.org/docs/handbook/basic-types.html)

## Ignore

There may be a time when you need to have typescript compile your code even though you have not taken into account types.
To ignore a document that you plan to come back to later and update just add the following line to the top of the typescript file.

```typescript
//@ts-ignore
```

## Variables

```typescript
const numberExample: number = 42;
const stringExample: string = "hello world";
const boolExample: boolean = true;
const arrayOfStrings: string[] = ["hello", "world"];
const arrayWithOnlyTwoValues: [string, number] = [stringExample, numberExample]; // see Tupal for more info
const iDontCare: any = ["whatever", 2, { want: "todo" }];
```

## Two Types

```typescript
// at some point you may want to get back a string or a number
type stringOrNumber = string | number;
let userInput: stringOrNumber = document.getElementByID("userInput") as HTMLInputElement).value;
```

## Objects

```typescript
Interface Obj {
    _id: number;
    name: string;
}

const someObject: Obj {
    _id: 1701,
    name: "Enterprise"
}
```

## Functions

```typescript
type AddFunction = (num: number, numTwo: number) => number;

const add: AddFunction = (num, numTwo) => {
  return num + numTwo;
};
```
