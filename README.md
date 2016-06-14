README
======

The following instructions apply throughout.


Installation
------------

1. Open console
2. Change directory to the test you are interested in
3. run `npm install`
4. run `npm start`
5. Follow any other instructions on screen.

T-001
-----

Create a node.js application to read and parse the contents of a text file (data layout below). 
The parser will add up the values for each letter. 
Example output `{ A: 2, B: 14, C: 6 }`

        2013-08-09T13:50:33.166Z A 2
        2013-08-09T13:51:33.166Z B 1
        2013-08-09T13:52:33.166Z C 6
        2013-08-09T13:53:33.166Z B 8
        2013-08-09T13:54:33.166Z B 5


T-002
-----

Create a basic node.js webserver which will listen on port 8080, the web server will return “hello world” with a 200 response code with text/plain content type in the header.

T-003
-----

Create an express.js server to serve static content. Any required dependencies should be installed
using npm install.

T-004
-----

Create an express.js middleware component to log all requests with request date and time

T-005
-----

Create an express.js application for routing, including, get, post, put and update routes. Options to
pass additional routing/optional values e.g /:id

T-006
-----

Create an express.js server with an error handler to log error requests.

T-007
-----

Create an express.js server to interface with a mongodb database. Create a route to insert, retrieve
and delete a document within a collection.

T-008
-----

Create node application to read and write a compressed text file using streams, buffers and pipes.

T-009
-----

Create node application to read o/s parameters such as o/s type, version, used/free memory, output
to be in json format.

T-010
-----

Create node application demonstrating how to use async call-backs and timers.

T-011
-----

Create node application with a custom event emitter, example code to connect, listener and
respond to the events, remove listeners when finished.

T-012
-----

Using grunt/gulp create a routine to copy code files to a new directory, update version numbers.
Add the ability for a watcher process to update files as changes are made.
