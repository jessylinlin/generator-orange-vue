const Generator = require('yeoman-generator')
module.exports = class extends Generator {
    prompting() {
        return this.prompt([{
                type: 'input',
                name: 'name',
                message: 'your project name?',
                default: this.appname
            }])
            .then(answers => {
                this.answers = answers
            })
    }

    writing() {
        const tempates = [
            'index.html',
            'package.json',
            'src/App.vue',
            'src/main.js',
            'src/components/HelloWorld.vue',
            'src/views',
            'src/assets',
            'public'
        ]
        tempates.forEach(item => {
            const context = this.answers
            this.fs.copyTpl(this.templatePath(item), this.destinationPath(item), context)
        })
    }
}