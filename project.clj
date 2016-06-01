(defproject rube "0.1.0-SNAPSHOT"
            :description "A pure CLJ[S] library for building software models that run by themselves."
            :url "http://tiltontec.com"
            :license {:name "Eclipse Public License"
                      :url "http://www.eclipse.org/legal/epl-v10.html"}
            :dependencies [[org.clojure/clojure "1.7.0"]
                           [org.clojure/clojurescript "1.7.48"]]
            :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                [org.clojure/tools.nrepl "0.2.10"]]
                       :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}
            :plugins [[lein-cljsbuild "1.1.3"]]
            :test-paths ["test"]
            :cljsbuild {:builds {;; go back to 5/26 for minify
                                 :qxia {:source-paths ["src"]
                                       :compiler {:externs ["externs.js"]
                                                  :foreign-libs [{:file "resources/identica/source/script/identica.js"
                                                                   :provides ["identica"]}]
                                                  :output-to "resources/identica/source/script/qxia.js"
                                                  :output-dir "resources/identica/source/script/out"
                                                  :optimizations :whitespace}}
                                 ;; :qxiabuild {:source-paths ["src"]
                                 ;;       :compiler {:externs ["externs.js"]
                                 ;;                  :foreign-libs [{:file "resources/identica/source/script/identica.js"
                                 ;;                                   :provides ["identica"]}]
                                 ;;                  :output-to "resources/identica/build/script/qxia.js"
                                 ;;                  :output-dir "resources/identica/build/script/out"
                                 ;;                  :optimizations :whitespace}}
                                 ;; :dev {:source-paths ["src"]
                                 ;;       :compiler {:output-to "resources/public/js/main.js"
                                 ;;                  :output-dir "resources/public/js/out"
                                 ;;                  :optimizations :whitespace}}
                                 ;; :test {:source-paths ["src" "test"]
                                 ;;       :compiler {:output-to "resources/public/js/main-test.js"
                                 ;;                  :optimizations :whitespace
                                 ;;                  :pretty-print true}}
                                 }
                        :test-commands {"unit" ["phantomjs"
                                                "resources/test/phantom/runner.js"
                                                "resources/test/test.html"]}} )
