(defproject rube "0.1.0-SNAPSHOT"
            :description "A pure CLJ[S] library for building software models that run by themselves."
            :url "http://tiltontec.com"
            :license {:name "Eclipse Public License"
                      :url "http://www.eclipse.org/legal/epl-v10.html"}
            :dependencies [[org.clojure/clojure "1.7.0"]
                           [org.clojure/clojurescript "1.7.48"]]
            :plugins [[lein-cljsbuild "1.1.3"]]
            :test-paths ["test"]
            :cljsbuild {:builds {;; go back to 5/26 for minify
                                 :qxia {:source-paths ["src"]
                                       :compiler {:output-to "resources/identica/source/script/qxia.js"
                                                  :output-dir "resources/identica/source/script/out"
                                                  :optimizations :whitespace}}
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
