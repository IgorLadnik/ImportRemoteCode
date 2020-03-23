# ImportRemoteCode
Import a JS function via network

This example illustrate possibility to 

- import code of javascript function as string via network,
- create the function from its code and save for future use,
- inject local dependencies (objects, functions, classes) to imported function, and
- execute imported function in context of importer.

Imported function is created as "async" - so "await" usage inside it is allowed.
Imported function is capable to import another remote function and execute it.

Sample works as following.
First run file server with file-server\start.cmd .
Then compile and run importer.
Importer requests file server for function from file file-server\_from-far1.js and performs the above operation over the function.
The first imported function is in its turn imports and calls function from file file-server\_from-far2.js, and its imports and calls file-server\_from-far3.js .
Result is printed in console.
