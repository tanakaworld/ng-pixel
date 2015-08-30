module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            files: {
                src: 'src/*.js',
                dest: 'dist/ng-pixel.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/ng-pixel.min.js': 'dist/ng-pixel.js'
                }
            }
        },

        watch: {
            js: {
                files: 'src/*js',
                tasks: ['concat', 'uglify']
            }
        },

        clean: {
            dist: {
                files: [
                    {
                        dot: false,
                        src: [
                            '.tmp',
                            'dist/*',
                            '!dist/.git*'
                        ]
                    }
                ]
            },
            server: '.tmp'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean:dist', 'concat', 'uglify']);
};
