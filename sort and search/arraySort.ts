const foo = ["Alpha", "beta", "Gamma", "delta"];
foo.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(foo);
