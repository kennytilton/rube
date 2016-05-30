# Rube
A pure dataflow aka FRP aka reactive library for building application models that run by themselves, on Clojure or Clojurescript thanks to .cljc. 
#### The Name
It seems no longer to be the case, but at one time the rules for the annual Rube Goldberg contest (https://www.rubegoldberg.com/contests/) included one beautifully written rule I will do my best not to butcher:

````
Once set in motion by the operator, a machine must run by itself
to task completion without further intervention.
````
ie, We laugh at Rube Goldberg Machines but they have our software models beat when it comes to running autonomously.

#### Some resources
The original write-up, the Cells Manifesto: http://smuglispweeny.blogspot.com/2008/02/cells-manifesto.html

The first Clojure version, with a hefty tutorial read-me: https://github.com/kennytilton/its-alive

The first Clojurescript version: https://github.com/kennytilton/modeller -- a hot mess but with Figwheel and a Web sample via Sablono. A tip of the hat to Bruce Haumann for the "Hello Seymore" lein-figwheel quick start I worked from: https://github.com/bhauman/lein-figwheel/wiki/Quick-Start

Another tip of the hat to Andrew Vida for a huge leg up on testing via PhantomJS: http://blog.testdouble.com/posts/2015-10-12-configure-leiningen-for-clojurescript-and-clojure-testing.html

And I guess a double tip of the hat to the makers of Clojurescript for achieving so much portability. 
#### Next Up: Qxia
[I will leave these here for ongoing voting, but Qxia is well underway on qooxdoo mobile (see below).

Qxia (pronounced cooks-ee-uh, ending like asphyxia), a Web or mobile (see below) framework built atop Rube. Exactly what client Rube should drive is still a toss-up, so email me your votes:
* recreate in clj my qooxlisp Web framework driving qooxdoo from server-side Clojure with Cells (Rube) Inside(tm);
* mess around with Sablono long enough to see if ReactJS adds value when Cells has a superset of capability (if it does);
* forget CLJ and go straight to CLJS+qooxdoo mobile;
* other __________________.

Qxia will start as a simple sub-directory because it will also require work/validation of the so-called "client queue handler" which worries about the order in which JS snippets should be presented to the client to make qooxdoo (or whatever) happy.

[Actually, I decided to leverage Cells/cljs and do a mobile version, and so far I have not run into an ordering problem. I might break Qxia out into its own repo sooner than planned.]

By the way, whatever path we take I am toying with targeting the educational realm with a Logo-like orientation. Cells do make UIs fun and easy, folks are talking about comp sci in schools again, and kids do like their portables.

#### Qxia Rizing (on qx.mobile)
qooxdoo is a great, fast, mature JS library for RIA, Web, or mobile. 

http://qooxdoo.org/

I have a qooxlisp repo that marries Common Lisp, Cells, and qooxdoo desktop (RIA) if anyone cares to look.

For Rube/CLJ*, I am starting with qx.mobile because I have never done mobile. It turns out that the marrying is vastly easier as well. So far, anyway. The greater ease comes from not having to reach across the AJAX divide to drive synchronous JS drom asynchronous server AJAX handlers.

I have now recreated the qx.mobile "Hello World" tutorial using Rube. You will find that in the rube/src/hello_mobile subdirectory. A browser-runnable version can be launched by drilling down into rube/resources/helloworld/build and opening index.html in a browser.

This week will (likely) get Qxia to version 0.2.0 and some documentation including a "Getting Started" tutorial.

Stay tuned.
