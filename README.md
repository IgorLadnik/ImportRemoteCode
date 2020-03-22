# ImportRemoteCode
Import a JS function via network

This example illustrate possibility to 

- import code of javascript function as string via network,
- create the function from its code and save for future use,
- inject to it local dependencies (objects, functions, classes), and
- execute imported function in context of importer.

Sample works as following.
First run file server with file-server\start.cmd .
Then compile and run importer.
Importer requests file server for function from file file-server\_from-far.js and performs the above operation over the function.
Result is printed in console.

Further development.
Make possible to imported function bring its additional dependencies from file server. 
