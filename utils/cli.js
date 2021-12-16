
const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
    source : {
        type: `string`,
        alias : `s`,
        desc : `Source file or directory of images`
    },
    width : {
        type : `number`,
        alias : `w`,
        desc : `Image width in pixels`
    },
    quality : {
        type : `number`,
        alias : `q`,
        desc : `Image quality`
    },
    clear : {
        type : 'boolean',
        default : true,
        alias : 'c',
        desc : `Clear the console`
    },
    debug : {
        type : 'boolean',
        default : false,
        alias : 'd',
        desc : `Print debug info`
    },
    version : {
        type : 'boolean',
        alias : 'v',
        desc : `Print cli version`
    }
};

const commands = {
    help : {
        desc : `Print help info`
    }
};

const helpText = meowHelp({
    name : `img`,
    flags,
    commands
});


const options = {
    description : false,
    hardRejection : false,
    flags
}

module.exports = meow(helpText,options);

