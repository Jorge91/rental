module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';',
                process: false,
                stripBanners: {
                    block: true
                }
            },
            app: {
                src: [
                    // libs
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-animate/angular-animate.min.js',
                    'bower_components/angular-messages/angular-messages.min.js',
                    'bower_components/angular-aria/angular-aria.min.js',
                    'bower_components/angular-material/angular-material.min.js',
                    'bower_components/moment/min/moment.min.js',
                    'bower_components/mdPickers/dist/mdPickers.min.js',

                    // Application scripts
                    'js/app.js',
                    'js/services/*.js',
                    'js/controllers/*.js',


                ],
                dest: 'built/app.js'
            },
            style: {
                src: [
                    'bower_components/angular-material/angular-material.css',
                    'bower_components/mdPickers/dist/mdPickers.min.css',
                    'styles/style.css'
                ],
                dest: 'built/style.css'
            }

        },

        uglify: {
            options: {
                mangle: false
            },
            built: {
                files: {
                    'built/app.js': ['built/app.js']
                }
            }
        },

        less: {
            build: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "styles/style.css": ["styles/style.less"]
                }
            }
        },


        watch: {
            less: {
                files: ['styles/*.less'],
                tasks: ['less:build'],
                options: {
                    nospawn: true,
                    spawn: false
                }
            },

            js: {
                files: ['js/*.js', 'js/**/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    nospawn: true,
                    spawn: false
                }
            }
        }

    });

    // Plugins
    //grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['less:build', 'concat', 'watch']);
    grunt.registerTask('prod', ['less:build', 'concat', 'uglify']);

};
