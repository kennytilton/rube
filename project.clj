(defproject rube "0.1.0-SNAPSHOT"
            :description "A pure CLJ[S] library for building software models that run by themselves."
            :url "http://tiltontec.com"
            :license {:name "Eclipse Public License"
                      :url "http://www.eclipse.org/legal/epl-v10.html"}
            :dependencies [[org.clojure/clojure "1.7.0"]
                           [org.clojure/clojurescript "1.9.36"]
                           ;;[com.datomic/datomic-pro "0.9.5350"]
                           ]
            :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                            [org.clojure/tools.nrepl "0.2.10"]]
                       :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}
            :plugins [[lein-cljsbuild "1.1.3"]]
            :test-paths ["test"]
            :cljsbuild {:builds {;; [note to self: go back to 5/26 for minify]
                                  ;;
                                  ;; qooxdoo will generate runnable directories as
                                  ;; "source" (slower, better issue detection) or
                                  ;; "build" (minified, let's things slide)
                                  ;;
                                  ;; desktop qooxdoo is mad slow in source mode and I can
                                  ;; go for months on one "build" version, so I develop
                                  ;; against build and jump to source only when a bug might
                                  ;; be in the qooxdoo code and I am hoping the source build will
                                  ;; show me my error.
                                  ;;
                                  ;; qooxdoo mobile is dead fast source or build, so I use that
                                  ;; which is here (via 'lein cljsbuild auto qxia):
                                  ;;
                                 :divakenny {:source-paths ["src"]
                                       :compiler {:foreign-libs [{:file "resources/qxiacore/source/script/qxiacore.js"
                                                                   :provides ["qxiacore"]}]
                                                  :output-to "resources/qxiacore/source/script/divakenny.js"
                                                  :output-dir "resources/qxiacore/source/script/out"
                                                  :optimizations :whitespace}}

                                 :hellomobile {:source-paths ["src"]
                                       :compiler {;;:externs ["externs.js"]
                                                  :foreign-libs [{:file "resources/identica/source/script/identica.js"
                                                                   :provides ["identica"]}]
                                                  :output-to "resources/identica/source/script/qxia.js"
                                                  :output-dir "resources/identica/source/script/out"
                                                  :optimizations :whitespace}}
                                  ;;
                                  ;; this next build is needed only for the cordova emulate/run
                                  ;; (which I do so rarely I forget to 'lein cljsbuild qxiabuild'
                                  ;; before './generate.py build' and invariable lose a minute
                                  ;; scratching my head):
                                  ;;
                                 :hmbuild {:source-paths ["src"]
                                       :compiler {:externs ["externs.js"]
                                                  :foreign-libs [{:file "resources/identica/source/script/identica.js"
                                                                   :provides ["identica"]}]
                                                  :output-to "resources/identica/build/script/qxia.js"
                                                  :output-dir "resources/identica/build/script/out"
                                                  :optimizations :whitespace}}
                                 :cellsdev {:source-paths ["src"]
                                       :compiler {:output-to "resources/public/js/main.js"
                                                  :output-dir "resources/public/js/out"
                                                  :optimizations :whitespace}}
                                 :cellstest {:source-paths ["src" "test"]
                                        :compiler {:output-to "resources/public/js/main-test.js"
                                                   :optimizations :whitespace
                                                   :pretty-print true}}
                                 }
                        :test-commands {"unit" ["phantomjs"
                                                "resources/test/phantom/runner.js"
                                                "resources/test/test.html"]}} )
