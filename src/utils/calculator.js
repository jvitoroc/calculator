import mathjs from "mathjs";

Object.defineProperties(String.prototype, {
    count: {
        value: function(query) {
            /* 
               Counts number of occurrences of query in array, an integer >= 0 
               Uses the javascript == notion of equality.
            */
            var count = 0;
            for(let i=0; i<this.length; i++)
                if (this[i]==query)
                    count++;
            return count;
        }
    }
});

export const operators = ["+", "-", "*", "/", "^"];

export const groupOperators = ["(", ")"]

export const allOperators = groupOperators.concat(operators)

export function isOperator(entity){
    return operators.includes(entity);
}

export function isGroupOperator(entity){
    return groupOperators.includes(entity);
}

export function isNumeric(num){
    return !isNaN(num)
}

export function parseExpression(expression){
    return mathjs.eval(expression);
}

export function entryHandler(current, entry){
    var len = current.length;
    var last = current[len-1];

    if(last === undefined)
        last = "";

    if(last === "" && entry === "(") // this is ugly
        return current.concat(entry);
    if((last === "" && (!isNumeric(entry) && entry !== "-" && entry !== "+" && entry !== "(") ||
        (isNumeric(last) && entry === "(") ||
        (last === ")" && (entry === "(" || isNumeric(entry))) ||
        (isOperator(last) && isOperator(entry)) ||
        (last === "(" && entry === ")")) ||
        (entry === ")" && current.count("(") == current.count(")")))  {
        return current;
    }
    return current.concat(entry);
}